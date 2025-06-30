/*  app/podcast/feed.xml/route.ts
    Builds a full RSS-2 / iTunes-compatible feed for all bhajans.

    – Uses the same CDsData.ts you already have.
    – `dynamic = 'force-static'` = Next.js will prerender once at build time.
    – Adds <enclosure> tags, so any podcast / music app can subscribe.
---------------------------------------------------------------------*/
import { NextResponse } from 'next/server';
import { CDs, baseURL }  from '../../../components/CDsData';

export const dynamic = 'force-static';          // ← prerender at build
export const revalidate = false;                // ← no ISR needed

export async function GET() {
  /* --- build <item> list --------------------------------------------------- */
  const items: string[] = [];

  CDs.forEach((cd, cdIdx) =>
    cd.songs.forEach((song, i) => {
      const url  = `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`;
      const guid = `${cd.cdNumber}-track-${i + 1}`;

      items.push(`
        <item>
          <title>${song.title} (Album ${cdIdx + 1})</title>
          <link>${url}</link>
          <guid isPermaLink="false">${guid}</guid>
          <description>Sai Subhanjali – Album ${cdIdx + 1}</description>
          <enclosure url="${url}" type="audio/mpeg"/>
          <pubDate>${new Date(2024, 0, 1).toUTCString()}</pubDate>
        </item>`);
    })
  );

  /* --- wrap channel -------------------------------------------------------- */
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"
       xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
    <channel>
      <title>Sai Subhanjali – Complete Bhajans (Official)</title>
      <link>https://www.saisubhanjali.com</link>
      <language>en</language>
      <itunes:author>Smt. Subbalakshmi Sattiraju</itunes:author>
      <description>A devotional treasury of Shirdi Sai Baba bhajans composed & sung by Smt. Subbalakshmi Sattiraju.</description>
      ${items.join('\n')}
    </channel>
  </rss>`;

  return new NextResponse(rss.trim(), {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' },
  });
}
