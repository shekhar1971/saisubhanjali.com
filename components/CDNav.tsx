'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Music, Play } from 'lucide-react';

// Define CDs with correct paths matching your sidebar routing setup
const CDs = [
  { label: 'CD 1', path: '/bhajans/cd1' },
  { label: 'CD 2', path: '/bhajans/cd2' },
  { label: 'CD 3', path: '/bhajans/cd3' },
  { label: 'CD 4', path: '/bhajans/cd4' },
  { label: 'CD 5', path: '/bhajans/cd5' },
  { label: 'CD 6', path: '/bhajans/cd6' },
];

export default function CDNav() {
  const pathname = usePathname();

  // Show CDNav only on /bhajans page and its child routes
  if (!pathname.startsWith('/bhajans')) return null;

  return (
    <nav className="flex flex-wrap justify-center gap-2 bg-gradient-to-r from-[#FDF6EC] to-white px-2 py-3 shadow-inner rounded-xl">
      {CDs.map(cd => (
        <Link
          key={cd.label}
          href={cd.path}
          passHref
          className="flex items-center gap-1 rounded bg-[#C28F2C] px-3 py-1 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-[#B33A24] transition"
        >
          <Music className="w-4 h-4" /> {cd.label}
        </Link>
      ))}
      <Link
        href="/bhajans/play-all"
        passHref
        className="flex items-center gap-1 rounded bg-[#B33A24] px-3 py-1 text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-[#7B3F00] transition"
      >
        <Play className="w-4 h-4" /> Play All
      </Link>
    </nav>
  );
}
