// app/bhajans/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import CDNav from '../../components/CDNav';

import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

export default function BhajanPage() {
  const searchParams = useSearchParams();
  const cdParam = searchParams.get('cd') || 'cd1'; // default to cd1

  let CDComponent;
  switch (cdParam) {
    case 'cd1':
      CDComponent = <CD1Display />;
      break;
    case 'cd2':
      CDComponent = <CD2Display />;
      break;
    case 'cd3':
      CDComponent = <CD3Display />;
      break;
    case 'cd4':
      CDComponent = <CD4Display />;
      break;
    case 'cd5':
      CDComponent = <CD5Display />;
      break;
    case 'cd6':
      CDComponent = <CD6Display />;
      break;
    default:
      CDComponent = <CD1Display />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
      {/* -------------- DESKTOP LEFT NAV -------------- */}
      <aside className="sticky top-[64px] hidden w-64 self-start p-6 md:flex">
        <nav className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
          <h2 className="mb-5 text-lg font-bold text-purple-800">
            Sai Subhanjali
          </h2>
          <ul className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`/bhajans?cd=cd${i + 1}`}
                  className="block rounded px-4 py-2 font-medium text-purple-700 transition duration-200 hover:bg-purple-600 hover:text-white"
                >
                  CD {i + 1}
                </a>
              </li>
            ))}

            {/* NEW: Play-All link */}
            <li>
              <a
                href="/bhajans/play-all"
                className="block rounded px-4 py-2 font-medium text-teal-700 transition duration-200 hover:bg-teal-600 hover:text-white"
              >
                ▶ Play All
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* -------------- MOBILE TOP NAV (REPLACED WITH CDNav) -------------- */}
      <div className="sticky top-[56px] z-30 md:hidden">
        <CDNav />
      </div>

      {/* -------------- MAIN CONTENT -------------- */}
      <main className="flex-1 space-y-20 px-4 py-8 md:px-8">
        {CDComponent}
      </main>
    </div>
  );
}
