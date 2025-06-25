'use client';

import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

export const metadata = {
  title: 'Sai Subhanjali | Devotional Bhajans of Subbalakshmi Sattiraju',
  description:
    'A devotional treasury of Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. Listen online or download from all 6 Sai Subhanjali CDs.',
  keywords: [
    'Sai Subhanjali',
    'Subbalakshmi Sattiraju',
    'Sai Baba Bhajans',
    'Sai Bhakti Songs',
    'Shirdi Sai devotional',
    'Telugu bhakti songs',
    'devotional CDs',
    'spiritual music',
    'Sai Baba songs download',
  ],
  metadataBase: new URL('https://www.saisubhanjali.com'),
  openGraph: {
    title: 'Sai Subhanjali | Bhajans by Subbalakshmi Sattiraju',
    description:
      'A tribute to the musical devotion of Late Smt. Subbalakshmi Sattiraju to Shirdi Sai Baba. All 6 CDs available to listen and download.',
    url: 'https://www.saisubhanjali.com',
    siteName: 'SaiSubhanjali.com',
    images: [
      {
        url: 'https://www.saisubhanjali.com/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Sai Subhanjali banner',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Subhanjali – Bhajans by Smt. Subbalakshmi Sattiraju',
    description:
      'Stream or download rare Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. A timeless devotional tribute.',
    images: ['https://www.saisubhanjali.com/og-banner.jpg'],
  },
  authors: [{ name: 'Shekhar Sattiraju and family', url: 'https://www.saisubhanjali.com' }],
  creator: 'Shekhar Sattiraju and family',
  other: {
    copyright: '© 2025 Family of Subbalakshmi Sattiraju. All rights reserved.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* ——— SITE NAVIGATION ——— */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <Link href="/" className="text-xl font-bold text-brand-700 hover:text-brand-800">
              Sai Subhanjali
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden gap-6 text-sm font-medium text-gray-800 md:flex">
              <li><Link href="#about" scroll={false} className="hover:text-brand-600">About</Link></li>
              <li><Link href="#photos" scroll={false} className="hover:text-brand-600">Photos</Link></li>
              <li><Link href="#legacy" scroll={false} className="hover:text-brand-600">Legacy</Link></li>
              <li><Link href="/bhajans" className="hover:text-brand-600">Bhajans</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            </ul>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden px-6 pb-4">
              <ul className="space-y-2 text-sm font-medium text-gray-800">
                <li><Link href="#about" scroll={false} className="block hover:text-brand-600" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link href="#photos" scroll={false} className="block hover:text-brand-600" onClick={() => setMenuOpen(false)}>Photos</Link></li>
                <li><Link href="#legacy" scroll={false} className="block hover:text-brand-600" onClick={() => setMenuOpen(false)}>Legacy</Link></li>
                <li><Link href="/bhajans" className="block hover:text-brand-600" onClick={() => setMenuOpen(false)}>Bhajans</Link></li>
                <li><Link href="/contact" className="block hover:text-brand-600" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>

        {/* ——— MAIN CONTENT ——— */}
        <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">{children}</main>

        {/* ——— FOOTER COPYRIGHT ——— */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 px-4">
          © {new Date().getFullYear()} The Family of Late Smt. Subbalakshmi Sattiraju.
          <br />
          These bhajans are offered for devotional use only. Commercial use is strictly prohibited without written permission.
        </footer>
      </body>
    </html>
  );
}
