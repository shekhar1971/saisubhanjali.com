'use client';
export default function CD1Display() {
const basePath = "https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD1/";


  const songs = [
    { file: "01 Track 1-Monologue.mp3", title: "Monologue" },
    { file: "01 Track 2-Manavinivinuma.mp3", title: "Manavinivinuma" },
    { file: "01 Track 3-Kolichiti Kolichiti.mp3", title: "Kolichiti Kolichiti" },
    { file: "01 Track 4-Sharanantini Baba.mp3", title: "Sharanantini Baba" },
    { file: "01 Track 5-Shirdi Vasa.mp3", title: "Shirdi Vasa" },
    { file: "01 Track 6-Yentadaya.mp3", title: "Yentadaya" },
    { file: "01 Track 7-Nitya Satyudu Sai.mp3", title: "Nitya Satyudu Sai" },
    { file: "01 Track 8-Jai Sachitananda.mp3", title: "Jai Sachitananda" },
    { file: "01 Track 9-Jaya Jaya Haarati Baba.mp3", title: "Jaya Jaya Haarati Baba" },
    { file: "01 Track 10-Melukolupulu.mp3", title: "Melukolupulu" },
    { file: "01 Track 11-Baba Baba.mp3", title: "Baba Baba" },
    { file: "01 Track 12-Pataa Ne Padeda.mp3", title: "Pataa Ne Padeda" },
    { file: "01 Track 13-Mahadeva Mahadeva.mp3", title: "Mahadeva Mahadeva" },
    { file: "01 Track 14-Neevichina Eespoortito.mp3", title: "Neevichina Eespoortito" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Sai Subhanjali – CD 1
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
              Your browser does not support the audio element.
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

/* ------------------------------------------------------------------
   EXPORT the track list so the Play-All page can import it
   ------------------------------------------------------------------ */
export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}));
