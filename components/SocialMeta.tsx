/* components/SocialMeta.tsx
   Dynamically injects OG / Twitter tags according to the current page.

   • Adds og:title / og:description / twitter:* tags (unchanged behaviour)
   • 🆕 Adds   og:type = music.album   when the URL lives under /bhajans
---------------------------------------------------------------------------- */
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SocialMeta() {
  const path = usePathname();                     // e.g.  "/bhajans#cd3"

  useEffect(() => {
    const title       = document.title;
    const description =
      (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content ?? '';

    /* helper – find or create <meta …> */
    const ensure = (name: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        property
          ? el.setAttribute('property', name)
          : el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };

    /* --- Standard OG + Twitter tags -------------------------------------- */
    ensure('og:title',         true).content = title;
    ensure('og:description',   true).content = description;
    ensure('og:url',           true).content = `https://www.saisubhanjali.com${path}`;

    ensure('twitter:title').content       = title;
    ensure('twitter:description').content = description;

    /* 🆕  ———  Enrich album pages with og:type=music.album  ——— */
    const ogType = path.startsWith('/bhajans') ? 'music.album' : 'website';
    ensure('og:type',          true).content = ogType;
  }, [path]);

  return null;   // nothing visible is rendered
}
