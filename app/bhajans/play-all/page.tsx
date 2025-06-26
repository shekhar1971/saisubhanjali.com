'use client';

import CD1Display, { tracks as cd1 } from '../../components/CD1Display';
import CD2Display, { tracks as cd2 } from '../../components/CD2Display';
import CD3Display, { tracks as cd3 } from '../../components/CD3Display';
import CD4Display, { tracks as cd4 } from '../../components/CD4Display';
import CD5Display, { tracks as cd5 } from '../../components/CD5Display';
import CD6Display, { tracks as cd6 } from '../../components/CD6Display';

import { useMemo } from 'react';

type Track = { file: string; title: string };

export default function PlayAllBhajans() {
  /* one flat list of every track */
  const allTracks: Track[] = useMemo(
    () => [...cd1, ...cd2, ...cd3, ...cd4, ...cd5, ...cd6],
    []
  );

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <h1 className="text-center text-4xl font-extrabold text-brand-700">
        Play All Bhajans
      </h1>

      <p className="text-center text-gray-600">
        Enjoy the entire collection from CD 1 to CD 6 without interruption.
      </p>

      <ul className="space-y-6">
        {allTracks.map((t, i) => (
          <li key={t.file} className="border-b pb-4">
            <p className="mb-2 font-semibold text-gray-800">
              {i + 1}. {t.title}
            </p>

            <audio controls className="w-full">
              <source src={t.file} type="audio/mpeg" />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
