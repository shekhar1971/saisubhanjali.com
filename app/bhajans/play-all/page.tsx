// app/bhajans/play-all/page.tsx
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

// --- import ONLY the track arrays we exported from each CD component ---
import { tracks as cd1 } from '@/components/CD1Display';
import { tracks as cd2 } from '@/components/CD2Display';
import { tracks as cd3 } from '@/components/CD3Display';
import { tracks as cd4 } from '@/components/CD4Display';
import { tracks as cd5 } from '@/components/CD5Display';
import { tracks as cd6 } from '@/components/CD6Display';

export const metadata = {
  title: 'Play all Sai Subhanjali Bhajans',
  description: 'Continuous playback of all six Sai Subhanjali albums.',
};

type Track = { file: string; title: string };

export default function PlayAllBhajans() {
  /** 1️⃣ Build one big playlist */
  const playlist: Track[] = useMemo(
    () => [...cd1, ...cd2, ...cd3, ...cd4, ...cd5, ...cd6],
    []
  );

  /** 2️⃣ Playback state */
  const [index, setIndex] = useState(0);           // currently-playing track #
  const playerRef = useRef<HTMLAudioElement>(null); // reference to hidden <audio>

  /** 3️⃣ When index changes, load + play the new source            */
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;
    player.src = playlist[index].file;
    player.play().catch(() => {/* Autoplay restrictions – ignore */});
  }, [index, playlist]);

  /** 4️⃣ Handle “next” when a track ends                          */
  const handleEnded = () => {
    setIndex((i) => (i + 1 < playlist.length ? i + 1 : 0)); // loop to start
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <h1 className="text-center text-4xl font-extrabold text-brand-700">
        Play All Bhajans
      </h1>
      <p className="text-center text-gray-600">
        Enjoy the entire collection from CD 1 to CD 6 without interruption.
      </p>

      {/* ---------- PLAYLIST LIST ---------- */}
      <ul className="space-y-6">
        {playlist.map((t, i) => (
          <li
            key={t.file}
            className={`border-b pb-4 ${
              i === index ? 'bg-purple-50 border-purple-300' : ''
            }`}
          >
            <div className="mb-2 font-semibold text-gray-800">
              {i + 1}. {t.title}
            </div>

            {/* show a live progress bar for the active track only */}
            {i === index ? (
              <audio
                ref={playerRef}
                controls
                className="w-full"
                onEnded={handleEnded}
                /* src is set in the useEffect */
              />
            ) : (
              <div className="h-2 w-full rounded bg-gray-200" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
