'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Play } from 'lucide-react';

const CDs = ['CD 1', 'CD 2', 'CD 3', 'CD 4', 'CD 5', 'CD 6'];

export default function CDNav() {
  const pathname = usePathname();

  // Only render on /bhajans pages
  if (!pathname.startsWith('/bhajans')) return null;

  return (
    <nav className="flex flex-wrap justify-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-50 p-2 shadow-inner">
      {CDs.map(cd => (
        <Link
          key={cd}
          href={`/bhajans/${cd.toLowerCase().replace(' ', '-')}`}
          className="flex items-center gap-1 rounded bg-[#C28F2C] px-3 py-1 text-white text-sm md:text-base font-semibold hover:bg-[#B33A24] transition"
        >
          <Music className="w-4 h-4" /> {cd}
        </Link>
      ))}
      <Link
        href="/bhajans/play-all"
        className="flex items-center gap-1 rounded bg-[#B33A24] px-3 py-1 text-white text-sm md:text-base font-semibold hover:bg-[#7B3F00] transition"
      >
        <Play className="w-4 h-4" /> Play All
      </Link>
    </nav>
  );
}
