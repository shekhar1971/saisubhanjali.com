/* components/StructuredData.tsx
   Injects JSON-LD into <head> for richer Google / Bing indexing.

   • Always:   WebSite  +  Person  +  MusicGroup (6-album set incl. every track)
   • If URL matches /bhajans, /bhajans#cd3, /bhajans/album-4 …  
     ⇒ adds a detailed MusicAlbum block for that one album.

   Runs client-side only (strategy="afterInteractive"), so it never affects the
   server build or TypeScript types.                                             */

'use client';

import Script           from 'next/script';
import { usePathname }  from 'next/navigation';
import { CDs, baseURL } from './CDsData';   // ← already in your repo

const SITE = 'https://www.saisubhanjali.com';

export default function StructuredData() {
  const path = usePathname();

  /* 1️⃣  WebSite ---------------------------------------------------------------- */
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

  /* 2️⃣  Person / Author -------------------------------------------------------- */
  const author = {
    '@context': 'https://schema.org',
    '@type'   : 'Person',
    name      : 'Smt. Subbalakshmi Sattiraju',
    sameAs    : [`${SITE}/about`],
  };

  /* 3️⃣  MusicGroup – six albums + EVERY track ---------------------------------- */
  const series = {
    '@context': 'https://schema.org',
    '@type'   : 'MusicGroup',
    name      : 'Sai Subhanjali Albums',
    url       : `${SITE}/bhajans`,
    album     : CDs.map((cd, idx) => ({
      '@type' : 'MusicAlbum',
      name    : `Sai Subhanjali – Album ${idx + 1}`,
      url     : `${SITE}/bhajans#cd${idx + 1}`,
      track   : cd.songs.map((song, i) => ({
        '@type'   : 'MusicRecording',
        position  : i + 1,
        name      : song.title,
        url       : `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`,
        inAlbum   : `Sai Subhanjali – Album ${idx + 1}`,
        byArtist  : 'Smt. Subbalakshmi Sattiraju',
      })),
    })),
  };

  /* 4️⃣  Optional: a single-album block when user is on that album -------------- */
  let albumLD: any = null;
  const albumMatch = /^\/bhajans(?:\/(?:cd|album)-?(\d))?/.exec(path);
  if (albumMatch) {
    const idx = albumMatch[1] ? Number(albumMatch[1]) - 1 : null;
    if (idx !== null && CDs[idx]) {
      const cd = CDs[idx];
      albumLD = {
        '@context': 'https://schema.org',
        '@type'   : 'MusicAlbum',
        name      : `Sai Subhanjali – Album ${idx + 1}`,
        url       : `${SITE}/bhajans#cd${idx + 1}`,
        byArtist  : { '@type': 'Person', name: 'Smt. Subbalakshmi Sattiraju' },
        numTracks : cd.songs.length,
        track     : cd.songs.map((song, i) => ({
          '@type'  : 'MusicRecording',
          position : i + 1,
          name     : song.title,
          url      : `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`,
        })),
      };
    }
  }

  /* 5️⃣  Render scripts ---------------------------------------------------------- */
  return (
    <>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <Script id="ld-author"  type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(author)  }} />
      <Script id="ld-series"  type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(series)  }} />

      {albumLD && (
        <Script id="ld-album" type="application/ld+json" strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(albumLD) }} />
      )}
    </>
  );
}
