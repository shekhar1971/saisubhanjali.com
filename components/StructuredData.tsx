/* components/StructuredData.tsx
   Injects JSON-LD into <head> for richer Google / Bing indexing.

   • Always:   WebSite  +  Person  +  MusicGroup (6-album set incl. every track)
   • If URL matches /bhajans, /bhajans#cd3, /bhajans/album-4 …
     ⇒ adds a detailed MusicAlbum block for that one album.
   • NEW: BreadcrumbList (Home › section) for Google sitelinks

   Runs client-side only (strategy="afterInteractive"), so it never affects the
   server build or TypeScript types.                                           */

'use client';

import Script           from 'next/script';
import { usePathname }  from 'next/navigation';
import { CDs, baseURL } from './CDsData';   // ← already in your repo

const SITE = 'https://www.saisubhanjali.com';

export default function StructuredData() {
  const path = usePathname();                       /* e.g. "/bhajans"         */
  const firstSeg = path.split('/').filter(Boolean)[0] || 'Home';

  /* 1️⃣  WebSite ---------------------------------------------------------------- */
  const webSite = { /* … unchanged … */ };

  /* 2️⃣  Person / Author -------------------------------------------------------- */
  const author  = { /* … unchanged … */ };

  /* 3️⃣  MusicGroup – six albums + EVERY track ---------------------------------- */
  const series  = { /* … unchanged … */ };

  /* 4️⃣  Optional single-album block ------------------------------------------- */
  let albumLD: any = null;  /* … unchanged … */

  /* 🔹 NEW 5️⃣  BreadcrumbList -------------------------------------------------- */
  let crumbsLD: any = null;
  if (path !== '/') {
    crumbsLD = {
      '@context'       : 'https://schema.org',
      '@type'          : 'BreadcrumbList',
      itemListElement  : [
        { '@type':'ListItem', position:1, name:'Home',  item:SITE },
        { '@type':'ListItem', position:2, name:firstSeg.replace(/-/g,' '), item:`${SITE}${path}` }
      ],
    };
  }

  /* 6️⃣  Render scripts ---------------------------------------------------------- */
  return (
    <>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }} />
      <Script id="ld-author"  type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(author)  }} />
      <Script id="ld-series"  type="application/ld+json" strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(series)  }} />

      {albumLD  && (
        <Script id="ld-album" type="application/ld+json" strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(albumLD) }} />
      )}

      {/* ▼ BreadcrumbList — only when not on the home page */}
      {crumbsLD && (
        <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLD) }} />
      )}
    </>
  );
}
