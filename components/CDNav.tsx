'use client';

import Link from 'next/link';
import { Music, Play } from 'lucide-react';

const CDs = ['CD 1', 'CD 2', 'CD 3', 'CD 4', 'CD 5', 'CD 6'];

export default function CDNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-4 bg-gradient-to-r from-yellow-100 to-yellow-50 p-4 shadow-inner rounded-xl">
      {CDs.map(cd => (
        <Link
          key={cd}
          href={`/bhajans/${cd.toLowerCase().replace(' ', '-')}`}
          className="flex items-center gap-2 rounded-md bg-yellow-600 px-4 py-2 text-white font-semibold hover:bg-yellow-700 transition"
        >
          <Music className="w-4 h-4" /> {cd}
        </Link>
      ))}
      <Link
        href="/bhajans/play-all"
        className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700 transition"
      >
        <Play className="w-4 h-4" /> Play All
      </Link>
    </nav>
  );
}
