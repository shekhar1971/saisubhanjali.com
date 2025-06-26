'use client'

/* ------------------------------------------------------------------ */
/* 1 •  DATA  (exported so the “Play-all” page can import it)          */
/* ------------------------------------------------------------------ */
const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD6/';

export const songs = [
  { file: '06 Track 1-Akhanda Jyoti.mp3', title: 'Akhanda Jyoti' },
];

/* fully-qualified URLs */
export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));

/* ------------------------------------------------------------------ */
/* 2 •  COMPONENT                                                      */
/* ------------------------------------------------------------------ */
export default function CD6Display() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 bg-white rounded-xl shadow-xl">
      <h2 className="mb-6 text-3xl font-bold text-center text-indigo-700">
        Sai Subhanjali – CD 6
      </h2>

      <ul className="space-y-6">
        {songs.map((s, i) => (
          <li key={s.file} className="pb-4 border-b">
            <div className="mb-2 text-xl font-semibold text-gray-800">
              {i + 1}. {s.title}
            </div>

            <audio controls className="w-full">
              <source
                src={`${basePath}${encodeURIComponent(s.file)}`}
                type="audio/mpeg"
              />
            </audio>

            <a
              href={`${basePath}${encodeURIComponent(s.file)}`}
              download
              className="block mt-2 text-sm text-blue-600 hover:underline"
            >
              Download this song
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
