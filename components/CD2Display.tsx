'use client';
export default function CD2Display() {
  const basePath =
    "https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD2/";

  const songs = [
    { file: "02 Track 1-Sai Nadhuni ki Vandanamu.mp3", title: "Sai Nadhuni ki Vandanamu" },
    { file: "02 Track 2-Sai Pada Seva.mp3", title: "Sai Pada Seva" },
    { file: "02 Track 3-Shirdi Sai.mp3", title: "Shirdi Sai" },
    { file: "02 Track 4-Dwarakamayini.mp3", title: "Dwarakamayini" },
    { file: "02 Track 5-Poovulu Koyandi.mp3", title: "Poovulu Koyandi" },
    { file: "02 Track 6-Sai Namamu.mp3", title: "Sai Namamu" },
    { file: "02 Track 7-Aadiyantaalu.mp3", title: "Aadiyantaalu" },
    { file: "02 Track 8-Kripa Drishtini.mp3", title: "Kripa Drishtini" },
    { file: "02 Track 9-Guruvarameeroju.mp3", title: "Guruvarameeroju" },
    { file: "02 Track 10-Raksha Raksha.mp3", title: "Raksha Raksha" },
    { file: "02 Track 11-Sai Nadhuni ki Managalam.mp3", title: "Sai Nadhuni ki Managalam" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Sai Subhanjali – CD 2
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

