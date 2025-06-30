/* app/layout.tsx
   – Mounts four client-only helpers:
     ① AlbumRenamer ② SeoBooster ③ SocialMeta ④ StructuredData
   – Adds <link rel="alternate" type="application/rss+xml" …> for the new feed
-----------------------------------------------------------------*/
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

/* — client-only helpers — */
const AlbumRenamer   = dynamic(() => import('../components/AlbumRenamer'),   { ssr: false });
const SeoBooster     = dynamic(() => import('../components/SeoBooster'),     { ssr: false });
const SocialMeta     = dynamic(() => import('../components/SocialMeta'),     { ssr: false });
const StructuredData = dynamic(() => import('../components/StructuredData'), { ssr: false });

/* — site-wide <head> metadata — */
export const metadata = {
  title       : 'Sai Subhanjali | Devotional Bhajans of Subbalakshmi Sattiraju',
  description : 'A devotional treasury of Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. Listen online or download from all six Sai Subhanjali albums.',
  metadataBase: new URL('https://www.saisubhanjali.com'),

  /* 🔹 NEW: expose the RSS / podcast feed to crawlers & browsers */
  alternates  : {
    canonical : '/',
    types     : {
      'application/rss+xml' : '/podcast/feed.xml',
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">

        {/* —— NAV —— */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow">
          <nav className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-3 text-sm font-medium text-gray-800 sm:flex-row sm:justify-between sm:gap-6 sm:px-6">
            {/* Brand */}
            <Link href="/" className="order-1 text-xl font-extrabold text-brand-700 hover:text-brand-800 sm:order-none">
              Sai Subhanjali
            </Link>

            {/* Menu */}
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

        {/* —— MAIN —— */}
        <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
          {children}
        </main>

        {/* —— FOOTER —— */}
        <footer className="border-t border-gray-200 px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Family of&nbsp;Late&nbsp;Smt.&nbsp;Subbalakshmi&nbsp;Sattiraju.<br/>
          These bhajans are offered for devotional use only. Commercial use is strictly prohibited without written permission.
        </footer>

        {/* —— client helpers —— */}
        <AlbumRenamer   />
        <SeoBooster     />
        <SocialMeta     />
        <StructuredData />
      </body>
    </html>
  );
}
