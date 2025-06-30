/* components/SocialMeta.tsx
   Dynamically injects OG / Twitter tags based on <title>/<meta name="description"> */
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SocialMeta() {
  const path = usePathname();

  useEffect(() => {
    const title       = document.title;
    const description = (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content ?? '';

    const ensure = (name: string, property = false) => {
      const selector  = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let   el        = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        property ? el.setAttribute('property', name) : el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      return el;
    };

    ensure('og:title', true).content            = title;
    ensure('og:description', true).content      = description;
    ensure('og:url', true).content              = `https://www.saisubhanjali.com${path}`;
    ensure('twitter:title').content             = title;
    ensure('twitter:description').content       = description;
  }, [path]);

  return null; // renders nothing visible
}
