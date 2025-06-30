/* components/SeoBooster.tsx
   Lightweight helper: canonical link + JSON-LD
------------------------------------------------ */
'use client';

import { usePathname } from 'next/navigation';
import { useEffect }   from 'react';

export default function SeoBooster() {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    /* 1. canonical --------------------------------------------- */
    const baseUrl   = 'https://www.saisubhanjali.com';
    const canonical = baseUrl + pathname;

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    /* 2. tiny JSON-LD snippet ----------------------------------- */
    const data = {
      '@context': 'https://schema.org',
      '@type'   : 'Organization',
      url       : baseUrl,
      name      : 'Sai Subhanjali',
      logo      : `${baseUrl}/SaiBaba1.png`,
    };

    const id = 'ss-jsonld';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script          = document.createElement('script');
      script.id       = id;
      script.type     = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, [pathname]);

  return null; // nothing to render
}
