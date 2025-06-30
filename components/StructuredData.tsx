/* components/StructuredData.tsx
   Injects JSON-LD into <head>.

   – Always:  WebSite  +  Person  +  MusicGroup (the 6-album series)
   – Conditionally:  MusicAlbum + MusicRecording when the URL is
     /bhajans, /bhajans#cd3, /bhajans/album-4, etc.

   Runs client-side only, so it never affects the server build.
-----------------------------------------------------------------*/
'use client';

import Script           from 'next/script';
import { usePathname }  from 'next/navigation';
import { CDs }          from './CDsData';          // ← you already have this

const SITE = 'https://www.saisubhanjali.com';

export default function StructuredData() {
  const path = usePathname();

  /* --- 1. WebSite schema --------------------------------------- */
  const webSite = {
    '@context'       : 'https://schema.org',
    '@type'          : 'WebSite',
    name             : 'Sai Subhanjali',
    url              : SITE,
    potentialAction  : {
      '@type'       : 'SearchAction',
      target        : `${SITE}/search?q={search_term_string}`,
      'query-input' : 'required name=search_term_string',
    },
  };

  /* --- 2. Person / Author -------------------------------------- */
  const author = {
    '@context': 'https://schema.org',
    '@type'   : 'Person',
    name      : 'Smt. Subbalakshmi Sattiraju',
    sameAs    : [`${SITE}/about`],
  };

  /* --- 3. MusicGroup – the 6-album set ------------------------- */
  const series = {
    '@context': 'https://schema.org',
    '@type'   : 'MusicGroup',
    name      : 'Sai Subhanjali Albums',
    url       : `${SITE}/bhajans`,
    album     : CDs.map((cd, i) => ({
      '@type': 'MusicAlbum',
      name   : `Sai Subhanjali – Album ${i + 1}`,
      url    : `${SITE}/bhajans#cd${i + 1}`,
    })),
  };

  /* --- 4. Maybe add MusicAlbum details for one specific page --- */
  let albumJSON: any = null;
  const albumMatch = /^\/bhajans(?:\/(?:cd|album)-?(\d))?/.exec(path);
  if (albumMatch) {
    const idx = albumMatch[1] ? Number(albumMatch[1]) - 1 : null;
    if (idx !== null && CDs[idx]) {
      const cd = CDs[idx];
      albumJSON = {
        '@context': 'https://schema.org',
        '@type'   : 'MusicAlbum',
        name      : `Sai Subhanjali – Album ${idx + 1}`,
        byArtist  : { '@type': 'Person', name: 'Smt. Subbalakshmi Sattiraju' },
        numTracks : cd.songs.length,
        hasPart   : cd.songs.map((s, i) => ({
          '@type'  : 'MusicRecording',
          position : i + 1,
          name     : s.title,
          url      : `${SITE}/bhajans#cd${idx + 1}-track-${i + 1}`,
        })),
      };
    }
  }

  /* ---------- render ------------------------------------------ */
  return (
    <>
      <Script id="ld-website"  type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <Script id="ld-person"   type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(author)  }} />
      <Script id="ld-series"   type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(series)  }} />
      {albumJSON && (
        <Script id="ld-album"  type="application/ld+json" strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(albumJSON) }} />
      )}
    </>
  );
}
