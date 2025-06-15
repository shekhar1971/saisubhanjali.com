// app/layout.tsx – adds Navbar + Footer, uses Tailwind container
// -------------------------------------------------------------
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaiSubhanjali – Devotional Bhajans by Subbalakshmi Sattiraju',
  description: 'Listen to soulful Sai Baba bhajans and explore Amma’s spiritual legacy.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ------------ NAVBAR ------------- */}
        <header className="bg-brand-700 text-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-xl font-semibold tracking-wide">Sai Subhanjali</Link>
            <ul className="flex gap-4 text-sm md:text-base">
              <li><Link href="/bhajans" className="hover:text-brand-50">Bhajans</Link></li>
              <li><Link href="/about" className="hover:text-brand-50">About Amma</Link></li>
              <li><Link href="/contact" className="hover:text-brand-50">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* ------------ MAIN ------------- */}
        <main className="container mx-auto min-h-[75vh] px-4 py-8">{children}</main>

        {/* ------------ FOOTER ------------- */}
        <footer className="bg-gray-100 border-t mt-12 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} SaiSubhanjali • Built with 🤍 in devotion to Sri Sai Baba
        </footer>
      </body>
    </html>
  );
}

// -------------------------------------------------------------
