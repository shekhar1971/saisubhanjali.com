// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { Music } from 'lucide-react';

/* ------------------------------------------------------------------
   We keep the canonical slug ('cd-1', …) for routing,
   but show “Album 1 … Album 6” in the button text.
   ----------------------------------------------------------------- */
const cdSlugs = Array.from({ length: 6 }, (_, i) => `cd-${i + 1}`);

export default function Sidebar() {
  return (
    <nav
      className="
        mb-4 flex flex-wrap justify-center rounded
        bg-[#FDF6EC] p-4 shadow
      "
    >
      {cdSlugs.map((slug, idx) => (
        <Link
          key={slug}
          href={`/bhajans/${slug}`}
          className="
            mx-2 flex items-center rounded
            bg-[#C28F2C] px-3 py-2 text-white transition
            hover:bg-[#B33A24]
          "
        >
          <Music className="mr-1 h-4 w-4" />
          Album&nbsp;{idx + 1}
        </Link>
      ))}

      {/* Play-All keeps its old route */}
      <Link
        href="/bhajans/play-all"
        className="
          mx-2 flex items-center rounded
          bg-[#D44A32] px-3 py-2 text-white transition
          hover:bg-[#B33A24]
        "
      >
        ▶️&nbsp;Play&nbsp;All
      </Link>
    </nav>
  );
}
