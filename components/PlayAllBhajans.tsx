/* components/PlayAllBhajans.tsx */
'use client';

import React, { useState } from 'react';
import { CDs, baseURL } from './CDsData';

type Track = { title: string; file: string };

export default function PlayAllBhajans() {
  const [playlist, setPlaylist]   = useState<Track[]>([]);
  const [idx, setIdx]             = useState<number | null>(null);

  /* ---------- helpers ---------- */
  const toTracks = (c = CDs) =>
    c.flatMap(cd =>
      cd.songs.map(s => ({
        title: s.title,
        file : `${baseURL}${cd.cdNumber}/${encodeURIComponent(s.file)}`,
      })),
    );

  /* ---------- handlers ---------- */
  const playAllAlbums = () => { setPlaylist(toTracks()); setIdx(0); };

  const playSingleAlbum = (cdNumber: string) => {
    const cd = CDs.find(c => c.cdNumber === cdNumber);
    if (!cd) return;
    setPlaylist(toTracks([cd] as any));  // TypeScript happy-path
    setIdx(0);
  };

  const handleEnded = () => {
    if (idx === null) return;
    const next = idx + 1;
    next < playlist.length ? setIdx(next) : setIdx(null);
  };

  /* ---------- UI ---------- */
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali Bhajans
      </h2>

      {/* --- play buttons --- */}
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={playAllAlbums}
          className="rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
        >
          ▶️ Play All Albums
        </button>

        {CDs.map(cd => {
          const albumNo = cd.cdNumber.replace(/\D+/g, '') || '?';
          return (
            <button
              key={cd.cdNumber}
              onClick={() => playSingleAlbum(cd.cdNumber)}
              className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              ▶️ Play Album {albumNo}
            </button>
          );
        })}
      </div>

      {/* --- player --- */}
      {idx !== null && playlist[idx] && (
        <div className="mt-6">
          <div className="mb-2 text-lg font-medium text-gray-700">
            Now Playing: {playlist[idx].title}
          </div>
          <audio
            key={playlist[idx].file}           /* re-render on track change */
            controls autoPlay onEnded={handleEnded}
            className="w-full"
          >
            <source src={playlist[idx].file} type="audio/mpeg" />
          </audio>
        </div>
      )}

      {/* --- visible queue --- */}
      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-indigo-700">Playlist</h3>
        <ul className="space-y-2">
          {playlist.map((t, i) => (
            <li key={t.file} className="border-b pb-2">
              {i + 1}. {t.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
