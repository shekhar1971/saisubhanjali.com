export const dynamic = 'force-dynamic';   // never prerender me
export const runtime = 'nodejs';          // run in Node on Vercel
export const revalidate = 0;              // no ISR

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';


import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!   // service-role key ⇒ full write
);

// ── adjustable thresholds via env vars ──────────────────────────────────────
const MIN_DR = Number(process.env.MIN_BACKLINK_DR ?? 30);
const BAD_TLDS = (process.env.BAD_TLDS ?? '.xyz,.info').split(','); // keep dot
const BAD_ANCHOR_REGEX = /[\u{1F600}-\u{1F6FF}]{3,}/u; // ≥3 emojis = spam

export async function GET() {
  // -- 0. Hard kill-switch --
  if (process.env.BACKLINK_AGENT_ENABLED !== 'true') {
    return NextResponse.json({ disabled: true });
  }

  // -- 1. Fetch raw backlink data --
  const res = await fetch(
    'https://scrapegraph.io/api/backlinks?domain=saisubhanjali.com'
  );
  if (!res.ok)
    return NextResponse.json({ error: 'Upstream API failed' }, { status: 502 });

  const links = (await res.json()) as {
    url: string;
    anchor: string;
    dr: number;
    rel?: string;
    first_seen: string;
  }[];

  if (!links.length) return NextResponse.json({ inserted: 0 });

  // -- 2. Dump everything into backlinks_raw (quarantine) --
  await supabase.from('backlinks_raw').upsert(links, { onConflict: 'url' });

  // -- 3. Fetch disavowed domain list --
  const { data: disavowed } = await supabase
    .from('disavowed_backlinks')
    .select('domain');
  const disavowedSet = new Set(disavowed?.map((d) => d.domain));

  // -- 4. Credibility filter --
  const credible = links.filter((l) => {
    const host = new URL(l.url).hostname.toLowerCase();
    const tld = host.slice(host.lastIndexOf('.')); // ".com", ".org", …
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

  // -- 5. Promote credible rows into public table --
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
