app/bhajans/play-all/page.tsx
'use client';

import { tracks as cd1 } from '../../../components/CD1Display';
import { tracks as cd2 } from '../../../components/CD2Display';
import { tracks as cd3 } from '../../../components/CD3Display';
import { tracks as cd4 } from '../../../components/CD4Display';
import { tracks as cd5 } from '../../../components/CD5Display';
import { tracks as cd6 } from '../../../components/CD6Display';

const allTracks = [...cd1, ...cd2, ...cd3, ...cd4, ...cd5, ...cd6];

export default function PlayAllBhajans() {
  return (
    <div className="mx-auto max-w-4xl p-6 space-y-8">
      <h1 className="text-center text-4xl font-extrabold text-brand-700">
        Play All Bhajans
      </h1>

      <p className="text-center text-gray-600">
        Enjoy the entire collection from CD 1 to CD 6 without interruption.
      </p>

      <ul className="space-y-6">
        {allTracks.map((t, i) => (
          <li key={i} className="border-b pb-4">
            <div className="mb-2 font-semibold text-gray-800">
              {i + 1}. {t.title}
            </div>

            <audio controls className="w-full">
              <source src={t.file} type="audio/mpeg" />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
