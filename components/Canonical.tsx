/* components/Canonical.tsx
   Adds a single <link rel="canonical"> to <head> on every route. */
'use client';
import { usePathname } from 'next/navigation';
import { useEffect }   from 'react';

export default function Canonical() {
  const path = usePathname();
  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel=canonical]') ??
                      Object.assign(document.createElement('link'), { rel: 'canonical' });
    canonical.href = `https://www.saisubhanjali.com${path.split('#')[0]}`;
    document.head.appendChild(canonical);
  }, [path]);
  return null;
}
