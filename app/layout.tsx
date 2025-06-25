'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import type { ReactNode } from 'react';

export const metadata = {
  // (same as before, omitted for brevity)
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* ——— SITE NAVIGATION ——— */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow">
          <nav className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-brand-700 hover:text-brand-800">
              Sai Subhanjali
            </Link>

            {/* — Toggle Button (Mobile only) — */}
            <button
              className="md:hidden text-2xl text-brand-700"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>

            {/* — Menu (Desktop) — */}
            <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
              <li><Link href="#about" scroll={false} className="hover:text-brand-600">About</Link></li>
              <li><Link href="#photos" scroll={false} className="hover:text-brand-600">Photos</Link></li>
              <li><Link href="#legacy" scroll={false} className="hover:text-brand-600">Legacy</Link></li>
              <li><Link href="/bhajans" className="hover:text-brand-600">Bhajans</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            </ul>
          </nav>

          {/* — Mobile Menu Dropdown — */}
          {menuOpen && (
            <ul className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium text-gray-800">
              <li><Link href="#about" scroll={false} className="block hover:text-brand-600">About</Link></li>
              <li><Link href="#photos" scroll={false} className="block hover:text-brand-600">Photos</Link></li>
              <li><Link href="#legacy" scroll={false} className="block hover:text-brand-600">Legacy</Link></li>
              <li><Link href="/bhajans" className="block hover:text-brand-600">Bhajans</Link></li>
              <li><Link href="/contact" className="block hover:text-brand-600">Contact</Link></li>
            </ul>
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
