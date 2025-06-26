'use client';
export default function CD3Display() {
  const basePath =
    "https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD3/";

  const songs = [
    { file: "03 Track 1-Monologue.mp3", title: "Monologue" },
    { file: "03 Track 2-Melukolupulu.mp3", title: "Melukolupulu" },
    { file: "03 Track 3-Varameeyava.mp3", title: "Varameeyava" },
    { file: "03 Track 4-Sharanam Sharanam.mp3", title: "Sharanam Sharanam" },
    { file: "03 Track 5-Deepalu Deepalu.mp3", title: "Deepalu Deepalu" },
    { file: '03-Track 6-Dakshina Dakshina.mp3',        title: 'Dakshina Dakshina' },
    { file: '03-Track 7-Sai Hasthamu.mp3',             title: 'Sai Hasthamu' },
    { file: "03 Track 8-Jaya Sainatha.mp3", title: "Jaya Sainatha" },
    { file: "03 Track 9-Madhuram Madhuram.mp3", title: "Madhuram Madhuram" },
    { file: "03 Track 10-Pallakarichevu Nannu.mp3", title: "Pallakarichevu Nannu" },
    { file: "03 Track 11-Karuna Sagara Sai.mp3", title: "Karuna Sagara Sai" },
    { file: "03 Track 12-Nee Kannulalo.mp3", title: "Nee Kannulalo" },
    { file: "03 Track 13-Sai Nathuniki Managalam.mp3", title: "Sai Nathuniki Managalam" },
    { file: "03 Track 14-Sayaninchu.mp3", title: "Sayaninchu" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Sai Subhanjali – CD 3
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
  /* -------------------------------------------------------------------- */
/*  paste this right after the songs[] array in each CD component file  */
/* -------------------------------------------------------------------- */
export const tracks = songs.map(({ file, title }) => ({
  title,
  // fully-qualified URL ready for <audio>
  file: `${basePath}${encodeURIComponent(file)}`,
}));

}
