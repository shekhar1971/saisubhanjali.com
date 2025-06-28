// app/layout.tsx — FINAL version with CDNav row, brand colors, and no Sidebar

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CDNav from '../components/CDNav';

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'Devotional bhajans composed by Subbalakshmi Sattiraju in praise of Shri Shirdi Sai Baba',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-[#FDF6EC] to-white min-h-screen">
        <header className="bg-white border-b-2 border-[#C28F2C] shadow-sm p-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#7B3F00] hover:text-[#B33A24]">Sai Subhanjali</h1>
          </Link>
          <nav className="space-x-6">
            <Link href="/about" className="hover:text-[#B33A24]">About</Link>
            <Link href="/photos" className="hover:text-[#B33A24]">Photos</Link>
            <Link href="/legacy" className="hover:text-[#B33A24]">Legacy</Link>
            <Link href="/bhajans" className="hover:text-[#B33A24]">Bhajans</Link>
            <Link href="/contact" className="hover:text-[#B33A24]">Contact</Link>
          </nav>
        </header>

        {/* ───────────── TOP CD NAV ROW (visible on all pages) ───────────── */}
        <div className="bg-[#FDF6EC]">
          <CDNav />
        </div>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
