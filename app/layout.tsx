// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'Devotional bhajans composed by Subbalakshmi Sattiraju in praise of Shri Shirdi Sai Baba',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-purple-50 to-white min-h-screen">
        <header className="bg-white border-b-2 border-yellow-400 shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">Sai Subhanjali</h1>
          <nav className="space-x-6">
            <Link href="/about" className="hover:text-purple-700">About</Link>
            <Link href="/photos" className="hover:text-purple-700">Photos</Link>
            <Link href="/legacy" className="hover:text-purple-700">Legacy</Link>
            <Link href="/bhajans" className="hover:text-purple-700">Bhajans</Link>
            <Link href="/contact" className="hover:text-purple-700">Contact</Link>
          </nav>
        </header>

        <main className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="flex-1 p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}

import Sidebar from '../components/Sidebar';
