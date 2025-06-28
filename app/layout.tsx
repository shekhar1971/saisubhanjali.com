// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'Devotional bhajans composed by Subbalakshmi Sattiraju in praise of Shri Shirdi Sai Baba',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-emerald-50 to-white min-h-screen">
        <header className="bg-white border-b-2 border-yellow-400 shadow-sm p-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-emerald-800 hover:text-emerald-600">Sai Subhanjali</h1>
          </Link>
          <nav className="space-x-6">
            <Link href="/about" className="hover:text-emerald-700">About</Link>
            <Link href="/photos" className="hover:text-emerald-700">Photos</Link>
            <Link href="/legacy" className="hover:text-emerald-700">Legacy</Link>
            <Link href="/bhajans" className="hover:text-emerald-700">Bhajans</Link>
            <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
          </nav>
        </header>

        <main className="flex flex-col lg:flex-row">
          {/* Only show sidebar if NOT on home page */}
          {pathname !== '/' && <Sidebar />}
          <div className="flex-1 p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
