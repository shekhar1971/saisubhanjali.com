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
      {/* -------------- DESKTOP LEFT NAV -------------- */}
      <aside className="sticky top-0 hidden w-64 self-start p-6 md:flex">
        <nav className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
          <h2 className="mb-5 text-lg font-bold text-purple-800">
            Sai Subhanjali
          </h2>
          <ul className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="flex items-center justify-center gap-2 rounded bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-amber-700 transition"
                >
                  🎵 CD {i + 1}
                </a>
              </li>
            ))}

            {/* Play-All link */}
            <li>
              <a
                href="/bhajans/play-all"
                className="flex items-center justify-center gap-2 rounded bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-red-800 transition"
              >
                ▶ Play All
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* -------------- MOBILE TOP NAV -------------- */}
      <div className="sticky top-0 z-30 flex flex-wrap justify-center gap-3 border-b bg-white px-4 py-3 shadow-sm md:hidden">
        {Array.from({ length: 6 }, (_, i) => (
          <a
            key={i}
            href={`#cd${i + 1}`}
            className="rounded-full border border-purple-300 px-3 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100"
          >
            CD{i + 1}
          </a>
        ))}

        {/* Play-All pill */}
        <a
          href="/bhajans/play-all"
          className="rounded-full border border-teal-300 px-3 py-2 text-sm font-medium text-teal-700 hover:bg-teal-100"
        >
          ▶ Play All
        </a>
      </div>

      {/* -------------- MAIN CONTENT -------------- */}
      <main className="flex-1 space-y-20 px-4 py-4 md:px-8">
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
