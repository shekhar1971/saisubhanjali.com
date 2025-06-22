// app/layout.tsx — removed “About Amma” nav item
// ------------------------------------------------------------------
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'A devotional treasury of Sai Baba bhajans by Smt. Subbalakshmi Sattiraju',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* ——— SITE NAV ——— */}
        <header className="sticky top-0 z-20 bg-brand-700 py-3 text-white shadow">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-semibold hover:text-brand-100">
              Sai Subhanjali
            </Link>
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <Link href="/bhajans" className="hover:text-brand-100">
                  Bhajans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-100">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* ——— MAIN CONTENT ——— */}
        <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">{children}</main>
      </body>
    </html>
  );
}
export const metadata = {
  title: 'Sai Subhanjali – Devotional Bhajans by Subbalakshmi Sattiraju',
  description: 'Listen to and download devotional songs composed by Late Smt. Subbalakshmi Sattiraju in tribute to Shri Shirdi Sai Baba.',
  openGraph: {
    title: 'Sai Subhanjali',
    description: 'Tribute site for Subbalakshmi Sattiraju’s Sai Baba bhajans',
    url: 'https://www.saisubhanjali.com',
    type: 'website',
  },
};
