/* components/StructuredData.tsx
   Injects JSON-LD once, site-wide. Extend as you add pages. */
'use client';

import Script from 'next/script';

export default function StructuredData() {
  /* --- 1. WebSite schema with search-action --- */
  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sai Subhanjali',
    url: 'https://www.saisubhanjali.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.saisubhanjali.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  /* --- 2. Person / Author schema (most-referenced entity) --- */
  const author = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Smt. Subbalakshmi Sattiraju',
    sameAs: [
      'https://www.saisubhanjali.com/about',
      // add Wiki or social URLs if they exist
    ],
  };

  /* --- 3. MusicSeries (the 6-album set) --- */
  const series = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Sai Subhanjali Albums',
    url: 'https://www.saisubhanjali.com/bhajans',
    album: Array.from({ length: 6 }, (_, i) => ({
      '@type': 'MusicAlbum',
      name: `Sai Subhanjali – Album ${i + 1}`,
      url: `https://www.saisubhanjali.com/bhajans#cd${i + 1}`,
    })),
  };

  return (
    <>
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <Script
        id="ld-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(author) }}
      />
      <Script
        id="ld-series"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(series) }}
      />
    </>
  );
}
