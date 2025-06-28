'use client';

const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD1/';

const songs = [
  { file: '01 Track 1-Monologue.mp3', title: 'Monologue' },
  { file: '01 Track 2-Manavinivinuma.mp3', title: 'Melukolupulu' }, // corrected title
  { file: '01 Track 3-Kolichiti Kolichiti.mp3', title: 'Kolichiti Kolichiti' },
  { file: '01 Track 4-Sharanantini Baba.mp3', title: 'Yentadaya' }, // corrected title
  { file: '01 Track 5-Shirdi Vasa.mp3', title: 'Sharanantini Baba' }, // corrected title
  { file: '01 Track 6-Yentadaya.mp3', title: 'Shirdi Vasa' }, // corrected title
  { file: '01 Track 7-Nitya Satyudu Sai.mp3', title: 'Baba Baba' }, // corrected title
  { file: '01 Track 8-Jai Sachitananda.mp3', title: 'Mahadeva Mahadeva' }, // corrected title
  { file: '01 Track 9-Jaya Jaya Haarati Baba.mp3', title: 'Nitya Satyudu Sai' }, // corrected title
  { file: '01 Track 10-Melukolupulu.mp3', title: 'Jai Sachitananda' }, // corrected title
  { file: '01 Track 11-Baba Baba.mp3', title: 'Manavinivinuma' }, // corrected title
  { file: '01 Track 12-Pataa Ne Padeda.mp3', title: 'Pataa Ne Padeda' },
  { file: '01 Track 13-Mahadeva Mahadeva.mp3', title: 'Neevichina Eespoortito' }, // corrected title
  { file: '01 Track 14-Neevichina Eespoortito.mp3', title: 'Jaya Jaya Haarati Baba' }, // corrected title
];


/* ---- exported for Play-All page ---- */
export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));
/* ----------------------------------- */

export default function CD1Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
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
