// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'Sai Subhanjali',
  description: 'Devotional bhajans composed by Subbalakshmi Sattiraju in praise of Shri Shirdi Sai Baba',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isBhajansPage = pathname.startsWith('/bhajans');

  const CDs = ['CD 1', 'CD 2', 'CD 3', 'CD 4', 'CD 5', 'CD 6'];

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-emerald-50 to-white min-h-screen">
        <header className="bg-white border-b-2 border-yellow-400 shadow-sm p-4 flex flex-col md:flex-row md:justify-between md:items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#B33A24] hover:text-[#C28F2C]">Sai Subhanjali</h1>
          </Link>
          <nav className="space-x-4 mt-4 md:mt-0 flex flex-wrap items-center justify-center">
            <Link href="/about" className="hover:text-[#B33A24] px-2">About</Link>
            <Link href="/photos" className="hover:text-[#B33A24] px-2">Photos</Link>
            <Link href="/legacy" className="hover:text-[#B33A24] px-2">Legacy</Link>
            <Link href="/bhajans" className="hover:text-[#B33A24] px-2">Bhajans</Link>
            <Link href="/contact" className="hover:text-[#B33A24] px-2">Contact</Link>
          </nav>
        </header>

        {/* ───────────── CD TOP NAV (for bhajans page only) ───────────── */}
        {isBhajansPage && (
          <div className="bg-[#FDF6EC] py-2 flex flex-wrap justify-center gap-2 text-sm md:text-base">
            {CDs.map(cd => (
              <Link
                key={cd}
                href={`/bhajans/${cd.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-1 rounded bg-[#C28F2C] px-3 py-1 text-white hover:bg-[#B33A24] transition"
              >
                🎵 {cd}
              </Link>
            ))}
            <Link
              href="/bhajans/play-all"
              className="flex items-center gap-1 rounded bg-[#B33A24] px-3 py-1 text-white hover:bg-[#7B3F00] transition"
            >
              ▶️ Play All
            </Link>
          </div>
        )}

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
