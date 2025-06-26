// components/CD6Display.tsx
'use client';

import Link from 'next/link';

/* -------- paths & data -------- */
const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD6/';

const songs = [
  { file: '06 Track 1-Akhanda Jyoti.mp3', title: 'Akhanda Jyoti' },
  // add more as you upload:
  // { file: '06 Track 2-XXX.mp3', title: 'Song Title' },
];

/*  export list for “Play All”  */
export const tracks = songs.map((s) => ({
  title: s.title,
  file: `${basePath}${encodeURIComponent(s.file)}`,
}));

export default function CD6Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 6
      </h2>

      <ul className="space-y-6">
        {songs.map((song, i) => (
          <li key={song.file} className="border-b pb-4">
            <div className="mb-2 text-xl font-semibold text-gray-800">
              {i + 1}. {song.title}
            </div>

            <audio controls className="w-full">
              <source
                src={`${basePath}${encodeURIComponent(song.file)}`}
                type="audio/mpeg"
              />
            </audio>

            <a
              href={`${basePath}${encodeURIComponent(song.file)}`}
              download
              className="mt-2 block text-sm text-blue-600 hover:underline"
            >
              Download this song
            </a>
          </li>
        ))}
      </ul>

      {/* ---- play-all link ---- */}
      <div className="mt-10 text-center">
        <Link
          href="/bhajans/play-all"
          className="inline-block rounded-lg bg-brand-700 px-5 py-2.5 font-semibold text-white shadow hover:bg-brand-800 transition"
        >
          ▶️ Play all bhajans
        </Link>
      </div>
    </div>
  );
}
