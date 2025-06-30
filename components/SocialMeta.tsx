/* components/SocialMeta.tsx
   Auto-fills Open Graph + Twitter tags from the current <title> & <meta name="description">
-------------------------------------------------------------------- */
'use client';

import { useEffect }   from 'react';
import { usePathname } from 'next/navigation';

export default function SocialMeta() {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    /* grab the <title> and description already supplied by Next metadata */
    const title = document.title;
    const desc  =
      document.querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.content || 'Sai Subhanjali – Devotional Bhajans';

    const url   = `https://www.saisubhanjali.com${pathname}`;
    const image = 'https://www.saisubhanjali.com/SaiBaba1.png';

    /** helper to add / update **/
    const set = (attr: string, name: string, content: string) => {
      let el =
        document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    /* -------- Open Graph -------- */
    set('property', 'og:title'      , title);
    set('property', 'og:description', desc);
    set('property', 'og:url'        , url);
    set('property', 'og:type'       , 'website');
    set('property', 'og:image'      , image);

    /* -------- Twitter Cards ----- */
    set('name'    , 'twitter:card'        , 'summary_large_image');
    set('name'    , 'twitter:title'       , title);
    set('name'    , 'twitter:description' , desc);
    set('name'    , 'twitter:image'       , image);
  }, [pathname]);

  return null;  // nothing rendered
}
