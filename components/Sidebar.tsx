'use client';

import Link from 'next/link';
import { Music } from 'lucide-react';

const CDs = ['CD 1', 'CD 2', 'CD 3', 'CD 4', 'CD 5', 'CD 6'];

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 bg-emerald-50 rounded-r-xl shadow-md p-4 mb-4 lg:mb-0">
      <h2 className="text-xl font-semibold text-emerald-700 mb-4">Sai Subhanjali</h2>
      <ul className="space-y-2">
        {CDs.map(cd => (
          <li key={cd}>
            <Link
              href={`/bhajans/${cd.toLowerCase().replace(' ', '-')}`}
              className="flex items-center p-2 rounded-lg hover:bg-emerald-100"
            >
              <Music className="w-5 h-5 mr-2 text-emerald-600" />
              {cd}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/bhajans/play-all"
            className="flex items-center p-2 rounded-lg bg-green-100 hover:bg-green-200 mt-4"
          >
            <span className="mr-2">▶️</span> Play All
          </Link>
        </li>
      </ul>
    </aside>
  );
}
