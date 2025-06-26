'use client'

/* ------------------------------------------------------------------ */
/* 1 •  STATIC DATA (re-exported so the “Play-all” page can import it) */
/* ------------------------------------------------------------------ */
const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD1/';

export const songs = [
  { file: '01 Track 1-Monologue.mp3',             title: 'Monologue' },
  { file: '01 Track 2-Manavinivinuma.mp3',        title: 'Manavinivinuma' },
  { file: '01 Track 3-Kolichiti Kolichiti.mp3',   title: 'Kolichiti Kolichiti' },
  { file: '01 Track 4-Sharanantini Baba.mp3',     title: 'Sharanantini Baba' },
  { file: '01 Track 5-Shirdi Vasa.mp3',           title: 'Shirdi Vasa' },
  { file: '01 Track 6-Yentadaya.mp3',             title: 'Yentadaya' },
  { file: '01 Track 7-Nitya Satyudu Sai.mp3',     title: 'Nitya Satyudu Sai' },
  { file: '01 Track 8-Jai Sachitananda.mp3',      title: 'Jai Sachitananda' },
  { file: '01 Track 9-Jaya Jaya Haarati Baba.mp3',title: 'Jaya Jaya Haarati Baba' },
  { file: '01 Track 10-Melukolupulu.mp3',         title: 'Melukolupulu' },
  { file: '01 Track 11-Baba Baba.mp3',            title: 'Baba Baba' },
  { file: '01 Track 12-Pataa Ne Padeda.mp3',      title: 'Pataa Ne Padeda' },
  { file: '01 Track 13-Mahadeva Mahadeva.mp3',    title: 'Mahadeva Mahadeva' },
  { file: '01 Track 14-Neevichina Eespoortito.mp3',title: 'Neevichina Eespoortito' },
];

/* fully-qualified URLs */
export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));

/* ------------------------------------------------------------------ */
/* 2 •  COMPONENT (uses the local `songs` array)                      */
/* ------------------------------------------------------------------ */
export default function CD1Display() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-12">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 1
      </h2>

      <ul className="space-y-6">
        {songs.map((s, i) => (
          <li key={s.file} className="border-b pb-4">
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
              className="mt-2 block text-sm text-blue-600 hover:underline"
            >
              Download this song
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
