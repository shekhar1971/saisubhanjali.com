'use client'

/* ------------------------------------------------------------------ */
/* 1 •  DATA  (exported so the “Play-all” page can import it)          */
/* ------------------------------------------------------------------ */
const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD5/';

export const songs = [
  { file: '05 Track 1-Om Sai Vandanamu.mp3',              title: 'Om Sai Vandanamu' },
  { file: '05 Track 2-Vinayaka.mp3',                      title: 'Vinayaka' },
  { file: '05 Track 3-Sai O Sai.mp3',                     title: 'Sai O Sai' },
  { file: '05 Track 4-Hanumanthaiya.mp3',                 title: 'Hanumanthaiya' },
  { file: '05 Track 5-Yanta Chusina.mp3',                 title: 'Yanta Chusina' },
  { file: '05 Track 6-Tirupathi Venkata Ramana.mp3',      title: 'Tirupathi Venkata Ramana' },
  { file: '05 Track 7-Sai Neeve.mp3',                     title: 'Sai Neeve' },
  { file: '05 Track 8-Sharanam Sharanam Aiyappa.mp3',     title: 'Sharanam Sharanam Aiyappa' },
  { file: '05 Track 9-Sheeladhi Anugramam.mp3',           title: 'Sheeladhi Anugramam' },
  { file: '05 Track 10-Managalam.mp3',                    title: 'Managalam' },
];

/* fully-qualified URLs */
export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));

/* ------------------------------------------------------------------ */
/* 2 •  COMPONENT                                                      */
/* ------------------------------------------------------------------ */
export default function CD5Display() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 bg-white rounded-xl shadow-xl">
      <h2 className="mb-6 text-3xl font-bold text-center text-indigo-700">
        Sai Subhanjali – CD 5
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
