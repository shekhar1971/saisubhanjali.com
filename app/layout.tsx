/* app/layout.tsx */
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

/* ── 1.  Tiny helper that rewrites “CD n” → “Album n” (client-side only) ── */
const AlbumRenamer = dynamic(
  () => import('../components/AlbumRenamer'),
  { ssr: false }
);

export const metadata = {
  title: 'Sai Subhanjali | Devotional Bhajans of Subbalakshmi Sattiraju',
  description:
    'A devotional treasury of Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. Listen online or download from all six Sai Subhanjali albums.',
  metadataBase: new URL('https://www.saisubhanjali.com'),
};

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
            {/* Brand */}
            <Link
              href="/"
              className="
                order-1 text-xl font-extrabold text-brand-700 hover:text-brand-800
                sm:order-none
              "
            >
              Sai Subhanjali
            </Link>

            {/* Top-level links */}
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:ml-auto">
              {[
                ['About',    '/about'   ],
                ['Photos',   '/photos'  ],
                ['Legacy',   '/legacy'  ],
                ['Bhajans',  '/bhajans' ],
                ['Miracles', '/miracles'],  // ← new page
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
          © {new Date().getFullYear()} The Family of Late&nbsp;Smt.&nbsp;Subbalakshmi&nbsp;Sattiraju.<br />
          These bhajans are offered for devotional use only. Commercial use is strictly
          prohibited without written permission.
        </footer>

        {/* ── 2.  Client-side “CD → Album” text swap ── */}
        <AlbumRenamer />
      </body>
    </html>
  );
}
