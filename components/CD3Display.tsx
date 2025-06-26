'use client';

const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD3/';

const songs = [
  { file: '03 Track 1-Monologue.mp3', title: 'Monologue' },
  { file: '03 Track 2-Melukolupulu.mp3', title: 'Melukolupulu' },
  { file: '03 Track 3-Varameeyava.mp3', title: 'Varameeyava' },
  { file: '03 Track 4-Sharanam Sharanam.mp3', title: 'Sharanam Sharanam' },
  { file: '03 Track 5-Deepalu Deepalu.mp3', title: 'Deepalu Deepalu' },
  { file: '03-Track 6-Dakshina Dakshina.mp3', title: 'Dakshina Dakshina' },
  { file: '03-Track 7-Sai Hasthamu.mp3', title: 'Sai Hasthamu' },
  { file: '03 Track 8-Jaya Sainatha.mp3', title: 'Jaya Sainatha' },
  { file: '03 Track 9-Madhuram Madhuram.mp3', title: 'Madhuram Madhuram' },
  { file: '03 Track 10-Pallakarichevu Nannu.mp3', title: 'Pallakarichevu Nannu' },
  { file: '03 Track 11-Karuna Sagara Sai.mp3', title: 'Karuna Sagara Sai' },
{ file: '03-Track 12-Nee Kannulalo.mp3', title: 'Nee Kannulalo' },
  { file: '03 Track 13-Sai Nathuniki Managalam.mp3', title: 'Sai Nathuniki Managalam' },
  { file: '03 Track 14-Sayaninchu.mp3', title: 'Sayaninchu' },
];

export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));

export default function CD3Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 3
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
