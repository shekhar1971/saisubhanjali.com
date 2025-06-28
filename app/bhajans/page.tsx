// app/bhajans/page.tsx
'use client';

import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

export default function BhajanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* ─────────── UNIVERSAL (mobile + desktop) SIDEBAR ─────────── */}
      <aside
        className="
          sticky top-20 w-full shrink-0 px-4 pt-6
          md:top-24 md:w-64 md:self-start md:p-6
        "
      >
        <nav className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
          <h2 className="mb-5 text-lg font-bold text-purple-800">
            Sai Subhanjali
          </h2>

          <ul className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="
                    flex items-center justify-center gap-2 rounded
                    bg-amber-600 px-3 py-2 text-sm font-semibold
                    text-white shadow transition hover:bg-amber-700
                  "
                >
                  🎵 CD {i + 1}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/bhajans/play-all"
                className="
                  flex items-center justify-center gap-2 rounded
                  bg-red-700 px-3 py-2 text-sm font-semibold
                  text-white shadow transition hover:bg-red-800
                "
              >
                ▶ Play All
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ─────────── MAIN CONTENT ─────────── */}
      <main className="flex-1 space-y-20 px-4 py-6 md:px-8">
        <section id="cd1">
          <CD1Display />
        </section>
        <section id="cd2">
          <CD2Display />
        </section>
        <section id="cd3">
          <CD3Display />
        </section>
        <section id="cd4">
          <CD4Display />
        </section>
        <section id="cd5">
          <CD5Display />
        </section>
        <section id="cd6">
          <CD6Display />
        </section>
      </main>
    </div>
  );
}
