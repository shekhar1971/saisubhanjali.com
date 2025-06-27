'use client';

import React, { useState } from 'react';
import { CDs, baseURL } from './CDsData';

type Track = {
  title: string;
  file: string;
};

export default function PlayAllBhajans() {
  const [currentPlaylist, setCurrentPlaylist] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const playAllCDs = () => {
    const allTracks = CDs.flatMap(cd =>
      cd.songs.map(song => ({
        title: song.title,
        file: `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`,
      }))
    );
    setCurrentPlaylist(allTracks);
    setCurrentIndex(0);
  };

  const playSingleCD = (cdNumber: string) => {
    const cd = CDs.find(cd => cd.cdNumber === cdNumber);
    if (!cd) return;
    const tracks = cd.songs.map(song => ({
      title: song.title,
      file: `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`,
    }));
    setCurrentPlaylist(tracks);
    setCurrentIndex(0);
  };

  const handleEnded = () => {
    if (currentIndex === null || currentPlaylist.length === 0) return;
    const nextIndex = currentIndex + 1;
    if (nextIndex < currentPlaylist.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(null); // finished
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali Bhajans
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={playAllCDs}
          className="rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
        >
          ▶️ Play All CDs
        </button>

        {CDs.map(cd => (
          <button
            key={cd.cdNumber}
            onClick={() => playSingleCD(cd.cdNumber)}
            className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            ▶️ Play {cd.cdNumber}
          </button>
        ))}
      </div>

      {currentIndex !== null && currentPlaylist.length > 0 && (
        <div className="mt-6">
          <div className="mb-2 text-lg font-medium text-gray-700">
            Now Playing: {currentPlaylist[currentIndex].title}
          </div>
          <audio
            controls
            autoPlay
            onEnded={handleEnded}
            className="w-full"
          >
            <source
              src={currentPlaylist[currentIndex].file}
              type="audio/mpeg"
            />
          </audio>
        </div>
      )}

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-semibold text-indigo-700">Playlist</h3>
        <ul className="space-y-2">
          {currentPlaylist.map((track, index) => (
            <li key={track.file} className="border-b pb-2">
              {index + 1}. {track.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
