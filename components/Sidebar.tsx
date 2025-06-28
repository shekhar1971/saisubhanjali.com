'use client';

import Link from 'next/link';
import { Music } from 'lucide-react';

const CDs = ['CD 1', 'CD 2', 'CD 3', 'CD 4', 'CD 5', 'CD 6'];

export default function Sidebar() {
  return (
    <nav className="flex flex-wrap justify-center bg-[#FDF6EC] p-4 rounded shadow mb-4">
      {CDs.map(cd => (
        <Link
          key={cd}
          href={`/bhajans/${cd.toLowerCase().replace(' ', '-')}`}
          className="flex items-center mx-2 px-3 py-2 rounded bg-[#C28F2C] text-white hover:bg-[#B33A24] transition"
        >
          <Music className="w-4 h-4 mr-1" />
          {cd}
        </Link>
      ))}
      <Link
        href="/bhajans/play-all"
        className="flex items-center mx-2 px-3 py-2 rounded bg-[#D44A32] text-white hover:bg-[#B33A24] transition"
      >
        ▶️ Play All
      </Link>
    </nav>
  );
}
