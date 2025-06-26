'use client';

const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD6/';

const songs = [
  { file: '06 Track 1-Akhanda Jyoti.mp3', title: 'Akhanda Jyoti' },
];

export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));

export default function CD6Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 6
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
