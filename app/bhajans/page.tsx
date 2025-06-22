'use client';
import { useState } from 'react';

const cdData = {
  CD1: [
    { title: 'Monologue', file: '01%20Track%201-Monologue.mp3' },
    { title: 'Manavinivunuma', file: '01%20Track%202-Manavinivunuma.mp3' },
    { title: 'Kolichiti Kolichiti', file: '01%20Track%203-Kolichiti Kolichiti.mp3' },
    // Add all CD1 songs here
  ],
  CD2: [
    { title: 'Sai Nadhuni ki Vandanamu', file: '02%20Track%201-Sai Nadhuni ki Vandanamu.mp3' },
    { title: 'Sai Pada Seva', file: '02%20Track%202-Sai Pada Seva.mp3' },
    // Add all CD2 songs here
  ],
  CD3: [
    { title: 'Monologue', file: '03%20Track%201-Monologue.mp3' },
    { title: 'Melukolupulu', file: '03%20Track%202-Melukolupulu.mp3' },
    // Add all CD3 songs here
  ],
  CD4: [
    { title: 'Akhilanda Koti', file: '04%20Track%201-Akhilanda Koti.mp3' },
    { title: 'Sairam Sairam', file: '04%20Track%202-Sairam Sairam.mp3' },
    // Add all CD4 songs here
  ],
  CD5: [
    { title: 'Om Sai Vandanamu', file: '05%20Track%201-Om Sai Vandanamu.mp3' },
    { title: 'Vinayaka', file: '05%20Track%202- Vinayaka.mp3' },
    // Add all CD5 songs here
  ],
  CD6: [
    { title: 'Akhanda Jyoti', file: '06%20Track%201-Akhanda Jyoti.mp3' },
  ],
};

export default function BhajansPage() {
  const [selectedCD, setSelectedCD] = useState('CD1');
  const songs = cdData[selectedCD];
  const baseURL = 'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio';

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Sai Subhanjali</h1>

        {/* CD selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(cdData).map((cd) => (
            <button
              key={cd}
              onClick={() => setSelectedCD(cd)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCD === cd ? 'bg-purple-700 text-white' : 'bg-white border border-purple-200 text-purple-700'
              }`}
            >
              {cd}
            </button>
          ))}
        </div>

        {/* Songs list */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
            Sai Subhanjali – {selectedCD}
          </h2>
          <ul className="space-y-6">
            {songs.map((song, index) => (
              <li key={index}>
                <h3 className="text-lg font-medium text-gray-800 mb-1">{index + 1}. {song.title}</h3>
                <audio controls className="w-full rounded">
                  <source src={`${baseURL}/${selectedCD}/${song.file}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <a
                  href={`${baseURL}/${selectedCD}/${song.file}`}
                  download
                  className="text-sm text-blue-600 hover:underline mt-1 block"
                >
                  Download this song
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
