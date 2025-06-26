'use client';
export default function CD5Display() {
  const basePath =
    "https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD5/";

  const songs = [
    { file: "05 Track 1-Om Sai Vandanamu.mp3", title: "Om Sai Vandanamu" },
    { file: "05 Track 2- Vinayaka.mp3", title: "Vinayaka" },
    { file: "05 Track 3-Sai O Sai.mp3", title: "Sai O Sai" },
    { file: "05 Track 4-Hanumanthaiya.mp3", title: "Hanumanthaiya" },
    { file: "05 Track 5-Yanta Chusina.mp3", title: "Yanta Chusina" },
    { file: "05 Track 6-Tirupathi Venkata Ramana.mp3", title: "Tirupathi Venkata Ramana" },
    { file: "05 Track 7-Sai Neeve.mp3", title: "Sai Neeve" },
    { file: "05 Track 8-Sharanam Sharanam Aiyappa.mp3", title: "Sharanam Sharanam Aiyappa" },
    { file: "05 Track 9-Sheeladhi Anugramam.mp3", title: "Sheeladhi Anugramam" },
    { file: "05 Track 10-Managalam.mp3", title: "Managalam" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Sai Subhanjali – CD 5
      </h2>
      <ul className="space-y-6">
        {songs.map((song, index) => (
          <li key={index} className="border-b pb-4">
            <div className="text-xl font-semibold text-gray-800 mb-2">
              {index + 1}. {song.title}
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
    </div>
  );
}
/* -------------------------------------------------------------------- */
/*  paste this right after the songs[] array in each CD component file  */
/* -------------------------------------------------------------------- */
export const tracks = songs.map(({ file, title }) => ({
  title,
  // fully-qualified URL ready for <audio>
  file: `${basePath}${encodeURIComponent(file)}`,
}));

