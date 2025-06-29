// app/bhajans/page.tsx
'use client';

import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

const cds = Array.from({ length: 6 }, (_, i) => `cd${i + 1}`);

export default function BhajanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* ───────── DESKTOP LEFT SIDEBAR ───────── */}
      <aside className="sticky top-24 hidden w-64 self-start p-6 md:block">
        <nav className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
          <h2 className="mb-5 text-lg font-bold text-purple-800">
            Sai Subhanjali
          </h2>

          <ul className="space-y-3">
            {cds.map((cd, idx) => (
              <li key={cd}>
                <a
                  href={`#${cd}`}
                  className="flex items-center justify-center gap-2 rounded bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-700"
                >
                  🎵 CD {idx + 1}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/bhajans/play-all"
                className="flex items-center justify-center gap-2 rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow transition hover:bg-red-800"
              >
                ▶ Play All
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ───────── MOBILE TOP GRID NAV ───────── */}
      <nav
        className="
          sticky top-[64px] z-30 grid w-full grid-cols-3 gap-2
          bg-white/90 px-4 py-3 backdrop-blur shadow md:hidden
        "
      >
        {cds.map((cd, idx) => (
          <a
            key={cd}
            href={`#${cd}`}
            className="
              flex items-center justify-center gap-1 rounded
              bg-amber-600 px-2 py-1 text-xs font-semibold text-white
              shadow transition hover:bg-amber-700
            "
          >
            🎵 CD {idx + 1}
          </a>
        ))}

        {/* full-width Play-All spans the row */}
        <a
          href="/bhajans/play-all"
          className="
            col-span-3 flex items-center justify-center gap-1 rounded
            bg-red-700 px-2 py-1 text-xs font-semibold text-white
            shadow transition hover:bg-red-800
          "
        >
          ▶ Play All
        </a>
      </nav>

      {/* ───────── MAIN CONTENT ───────── */}
      <main className="flex-1 space-y-20 px-4 py-8 md:px-8">
        {/* Raised scroll-margin (≈120 px) so section tops clear sticky header + grid nav on mobile */}
        <section id="cd1" className="scroll-mt-[120px]">
          <CD1Display />
        </section>
        <section id="cd2" className="scroll-mt-[120px]">
          <CD2Display />
        </section>
        <section id="cd3" className="scroll-mt-[120px]">
          <CD3Display />
        </section>
        <section id="cd4" className="scroll-mt-[120px]">
          <CD4Display />
        </section>
        <section id="cd5" className="scroll-mt-[120px]">
          <CD5Display />
        </section>
        <section id="cd6" className="scroll-mt-[120px]">
          <CD6Display />
        </section>
      </main>
    </div>
  );
}
