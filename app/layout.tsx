// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CDNav from '../components/CDNav'; // Ensure this path is correct

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'Devotional bhajans composed by Subbalakshmi Sattiraju in praise of Shri Shirdi Sai Baba',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#FDF6EC] via-white to-[#FDF6EC] min-h-screen">
        {/* ───────────── HEADER ───────────── */}
        <header className="bg-white border-b-2 border-[#C28F2C] shadow-sm p-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#7B3F00] hover:text-[#C28F2C]">Sai Subhanjali</h1>
          </Link>
          <nav className="space-x-6">
            <Link href="/about" className="hover:text-[#C28F2C]">About</Link>
            <Link href="/photos" className="hover:text-[#C28F2C]">Photos</Link>
            <Link href="/legacy" className="hover:text-[#C28F2C]">Legacy</Link>
            <Link href="/bhajans" className="hover:text-[#C28F2C]">Bhajans</Link>
            <Link href="/contact" className="hover:text-[#C28F2C]">Contact</Link>
          </nav>
        </header>

        {/* ───────────── TOP CD NAVIGATION ───────────── */}
        <div className="bg-[#FDF6EC]">
          <CDNav />
        </div>

        {/* ───────────── MAIN CONTENT ───────────── */}
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
