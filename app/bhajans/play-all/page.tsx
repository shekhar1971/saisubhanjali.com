// app/bhajans/play-all/page.tsx
'use client';

import CD1 from '@/components/CD1Display';
import CD2 from '@/components/CD2Display';
import CD3 from '@/components/CD3Display';
import CD4 from '@/components/CD4Display';
import CD5 from '@/components/CD5Display';
import CD6 from '@/components/CD6Display';
import { useMemo } from 'react';

export const metadata = {
  title: 'Play all Sai Subhanjali Bhajans',
  description: 'Continuous playback of all six Sai Subhanjali albums.',
};

type Track = { file: string; title: string; };

export default function PlayAllBhajans() {
  /** Each CD component already exports its track list,
      so we can reuse them without duplicating arrays */
  const allTracks: Track[] = useMemo(
    () => [
      ...CD1.tracks,
      ...CD2.tracks,
      ...CD3.tracks,
      ...CD4.tracks,
      ...CD5.tracks,
      ...CD6.tracks,
    ],
    []
  );

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-8">
      <h1 className="text-center text-4xl font-extrabold text-brand-700">
        Play All Bhajans
      </h1>

      <p className="text-center text-gray-600">
        Enjoy the entire collection from CD 1 to CD 6 without interruption.
      </p>

      <ul className="space-y-6">
        {allTracks.map((track, i) => (
          <li key={i} className="border-b pb-4">
            <div className="mb-2 font-semibold text-gray-800">
              {i + 1}. {track.title}
            </div>

            <audio controls className="w-full">
              <source
                src={track.file /* already fully-qualified URLs in the track arrays */}
                type="audio/mpeg"
              />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
