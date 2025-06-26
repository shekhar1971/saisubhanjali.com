'use client';
export default function CD4Display() {
  const basePath =
    "https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD4/";

  const songs = [
    { file: "04 Track 1-Akhianda Koti.mp3", title: "Akhianda Koti" },
   { file: "04 Track 2- Sairam Sairam.mp3", title: "Sairam Sairam" },
    { file: "04 Track 3-Aasanamu Vesaanu.mp3", title: "Aasanamu Vesaanu" },
    { file: "04 Track 4-Koluvai Vunavu.mp3", title: "Koluvai Vunavu" },
    { file: "04 Track 5-Kalaloki Rava.mp3", title: "Kalaloki Rava" },
    { file: "04 Track 6-Akhanda Vishwam.mp3", title: "Akhanda Vishwam" },
    { file: "04 Track 7-Amma Lalithambika.mp3", title: "Amma Lalithambika" },
    { file: "04 Track 8-Shamboo Shamboo.mp3", title: "Shamboo Shamboo" },
    { file: "04 Track 9-Mata Saraswati.mp3", title: "Mata Saraswati" },
    { file: "04 Track 10-Namastute.mp3", title: "Namastute" },
    { file: "04 Track 11-Govinda Govinda.mp3", title: "Govinda Govinda" },
    { file: "04 Track 12-Tallivi Neeve.mp3", title: "Tallivi Neeve" },
    { file: "04 Track 13-Aaraginchu.mp3", title: "Aaraginchu" },
    { file: "04 Track 14-Mangalam.mp3", title: "Mangalam" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl mt-12">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Sai Subhanjali – CD 4
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

