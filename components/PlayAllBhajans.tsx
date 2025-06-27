'use client';

import React, { useState } from 'react';
import { CDs, baseURL } from './CDsData';

const allTracks = CDs.flatMap(cd =>
  cd.songs.map(song => ({
    title: song.title,
    file: `${baseURL}${cd.cdNumber}/${encodeURIComponent(song.file)}`,
  }))
);

export default function PlayAllBhajans() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleEnded = () => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex + 1;
    if (nextIndex < allTracks.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(null); // playlist finished
    }
  };

  const startPlaylist = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Play All Sai Subhanjali Bhajans
      </h2>

      {currentIndex === null ? (
        <button
          onClick={startPlaylist}
          className="mb-4 rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
        >
          ▶️ Start Playlist
        </button>
      ) : (
        <div className="mb-4 text-lg font-medium text-gray-700">
          Now Playing: {allTracks[currentIndex].title}
        </div>
      )}

      {currentIndex !== null && (
        <audio
          controls
          autoPlay
          onEnded={handleEnded}
          className="w-full"
        >
          <source
            src={allTracks[currentIndex].file}
            type="audio/mpeg"
          />
        </audio>
      )}

      <ul className="mt-8 space-y-4">
        {allTracks.map((track, index) => (
          <li key={track.file} className="border-b pb-2">
            {index + 1}. {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
