// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { Music } from 'lucide-react';

/* ------------------------------------------------------------------
   •  We keep the                 ROUTES  exactly the same:  /bhajans/cd-1 …
   •  We only change the VISIBLE TEXT from “CD n” → “Album n”.
   ----------------------------------------------------------------- */

const albums = Array.from({ length: 6 }, (_, i) => ({
  slug: `cd-${i + 1}`,      // keeps your existing route
  label: `Album ${i + 1}`,  // what the visitor sees
}));

export default function Sidebar() {
  return (
    <nav className="mb-4 flex flex-wrap justify-center rounded bg-[#FDF6EC] p-4 shadow">
      {albums.map(({ slug, label }) => (
        <Link
          key={slug}
          href={`/bhajans/${slug}`}
          className="
            mx-2 flex items-center justify-center gap-1 rounded
            bg-amber-600 px-3 py-2 text-sm font-semibold text-white
            shadow transition hover:bg-amber-700
          "
        >
          <Music className="h-4 w-4" /> {label}
        </Link>
      ))}

      {/* Play-All keeps its old route and styling */}
      <Link
        href="/bhajans/play-all"
        className="
          mx-2 flex items-center justify-center gap-1 rounded
          bg-red-700 px-3 py-2 text-sm font-semibold text-white
          shadow transition hover:bg-red-800
        "
      >
        ▶ Play All
      </Link>
    </nav>
  );
}
