/* app/layout.tsx */
import './globals.css';
import Link             from 'next/link';
import Script           from 'next/script';
import { usePathname }  from 'next/navigation';
import type { ReactNode } from 'react';
import dynamic          from 'next/dynamic';

/* ── 1.  Tiny helper that rewrites “CD n” → “Album n” (client-side only) ── */
const AlbumRenamer = dynamic(() => import('../components/AlbumRenamer'), { ssr: false });

export const metadata = {
  title: 'Sai Subhanjali | Devotional Bhajans of Subbalakshmi Sattiraju',
  description:
    'A devotional treasury of Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. Listen online or download from all six Sai Subhanjali albums.',
  metadataBase: new URL('https://www.saisubhanjali.com'),
};

/* ── 2.  One-file SEO booster (JSON-LD for Albums + Miracle article) ───── */
function SeoBooster() {
  const path = usePathname();

  // Album pages (hashes #cd1 … #cd6)
  if (path.startsWith('/bhajans')) {
    const match   = globalThis?.location?.hash?.match(/cd(\d)/);
    const albumNo = match ? Number(match[1]) : 1;

    const albumSchema = {
      '@context': 'https://schema.org',
      '@type':    'MusicAlbum',
      name:       `Sai Subhanjali – Album ${albumNo}`,
      byArtist:   { '@type': 'Person', name: 'Subbalakshmi Sattiraju' },
      genre:      'Devotional',
      url:        `https://www.saisubhanjali.com/bhajans#cd${albumNo}`,
    };

    const crumb = {
      '@context': 'https://schema.org',
      '@type':    'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://saisubhanjali.com' },
        { '@type': 'ListItem', position: 2, name: 'Bhajans', item: 'https://saisubhanjali.com/bhajans' },
        { '@type': 'ListItem', position: 3, name: `Album ${albumNo}`, item: `https://saisubhanjali.com/bhajans#cd${albumNo}` },
      ],
    };

    return (
      <>
        <Script id="album-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(albumSchema) }} />
        <Script id="album-breadcrumb" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }} />
      </>
    );
  }

  // Miracle article
  if (path === '/miracles/divine-restoration') {
    const crumb = {
      '@context': 'https://schema.org',
      '@type':    'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://saisubhanjali.com' },
        { '@type': 'ListItem', position: 2, name: 'Miracles',  item: 'https://saisubhanjali.com/miracles' },
        { '@type': 'ListItem', position: 3, name: 'Divine Restoration', item: 'https://saisubhanjali.com/miracles/divine-restoration' },
      ],
    };

    const article = {
      '@context': 'https://schema.org',
      '@type':    'Article',
      headline:   'Divine Restoration: Sai Baba’s Grace',
      author:     { '@type': 'Person', name: 'Subbalakshmi Sattiraju' },
      datePublished: '2024-09-01',
      mainEntityOfPage: 'https://saisubhanjali.com/miracles/divine-restoration',
    };

    return (
      <>
        <Script id="miracle-schema" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
        <Script id="miracle-breadcrumb" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(crumb) }} />
      </>
    );
  }

  return null; // other routes
}

/* ─────────────────────────────────────────────────────────────────── */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* ────────── SITE NAVIGATION ────────── */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow">
          <nav
            className="
              mx-auto flex max-w-7xl
              flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-800
              sm:flex-row sm:justify-between sm:gap-6 sm:px-6
            "
          >
            <Link
              href="/"
              className="
                order-1 text-xl font-extrabold text-brand-700 hover:text-brand-800
                sm:order-none
              "
            >
              Sai Subhanjali
            </Link>

            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:ml-auto">
              {[
                ['About',    '/about'   ],
                ['Photos',   '/photos'  ],
                ['Legacy',   '/legacy'  ],
                ['Bhajans',  '/bhajans' ],
                ['Miracles', '/miracles'],
                ['Contact',  '/contact' ],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand-600">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ────────── MAIN CONTENT ────────── */}
        <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          {children}
        </main>

        {/* ────────── FOOTER ────────── */}
        <footer className="border-t border-gray-200 px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Family of&nbsp;Late&nbsp;Smt.&nbsp;Subbalakshmi&nbsp;Sattiraju.<br />
          These bhajans are offered for devotional use only. Commercial use is
          strictly prohibited without written permission.
        </footer>

        {/* ── Client-side helpers ── */}
        <AlbumRenamer />
        <SeoBooster />
      </body>
    </html>
  );
}
