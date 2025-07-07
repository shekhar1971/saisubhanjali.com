// ─────  force dynamic execution ────────────────────────────────────────────
export const dynamic = 'force-dynamic';   // never prerender at build time
export const runtime = 'nodejs';          // run as Node function on Vercel
export const revalidate = 0;              // no ISR

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// ── Supabase client (service-role) ─────────────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// ── adjustable thresholds via env vars ─────────────────────────────────────
const MIN_DR = Number(process.env.MIN_BACKLINK_DR ?? 30);
const BAD_TLDS = (process.env.BAD_TLDS ?? '.xyz,.info').split(',');
const BAD_ANCHOR_REGEX = /[\u{1F600}-\u{1F6FF}]{3,}/u; // ≥3 emojis

// ───────────────────────────────────────────────────────────────────────────
export async function GET() {
  // 0️⃣ kill-switch
  if (process.env.BACKLINK_AGENT_ENABLED !== 'true') {
    return NextResponse.json({ disabled: true });
  }

  // 1️⃣ fetch backlinks
  const res = await fetch(
    'https://scrapegraph.io/api/backlinks?domain=saisubhanjali.com'
  );
  if (!res.ok) {
    return NextResponse.json({ error: 'Upstream API failed' }, { status: 502 });
  }

  const links = (await res.json()) as {
    url: string;
    anchor: string;
    dr: number;
    rel?: string;
    first_seen: string;
  }[];

  if (!links.length) return NextResponse.json({ inserted: 0 });

  // 2️⃣ quarantine
  await supabase.from('backlinks_raw').upsert(links, { onConflict: 'url' });

  // 3️⃣ fetch disavowed
  const { data: disavowed } = await supabase
    .from('disavowed_backlinks')
    .select('domain');
  const disavowedSet = new Set(disavowed?.map((d) => d.domain));

  // 4️⃣ credibility filter
  const credible = links.filter((l) => {
    const host = new URL(l.url).hostname.toLowerCase();
    const tld = host.slice(host.lastIndexOf('.')); // ".com" / ".org"…
    return (
      l.dr >= MIN_DR &&
      (!l.rel || l.rel === 'dofollow') &&
      !BAD_TLDS.includes(tld) &&
      !BAD_ANCHOR_REGEX.test(l.anchor) &&
      !disavowedSet.has(host)
    );
  });

  if (!credible.length) {
    return NextResponse.json({ credible: 0, quarantined: links.length });
  }

  // 5️⃣ promote to public table
  const { error } = await supabase
    .from('backlinks')
    .upsert(credible, { onConflict: 'url' });

  return error
    ? NextResponse.json({ error }, { status: 500 })
    : NextResponse.json({
        credible: credible.length,
        quarantined: links.length - credible.length
      });
}
