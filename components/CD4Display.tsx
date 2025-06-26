'use client'

const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD4/'

const songs = [
  { file: '04 Track 1-Akhianda Koti.mp3',            title: 'Akhianda Koti' },
  { file: '04 Track 2-Sairam Sairam.mp3',            title: 'Sairam Sairam' },
  { file: '04 Track 3-Aasanamu Vesaanu.mp3',         title: 'Aasanamu Vesaanu' },
  { file: '04 Track 4-Koluvai Vunavu.mp3',           title: 'Koluvai Vunavu' },
  { file: '04 Track 5-Kalaloki Rava.mp3',            title: 'Kalaloki Rava' },
  { file: '04 Track 6-Akhanda Vishwam.mp3',          title: 'Akhanda Vishwam' },
  { file: '04 Track 7-Amma Lalithambika.mp3',        title: 'Amma Lalithambika' },
  { file: '04 Track 8-Shamboo Shamboo.mp3',          title: 'Shamboo Shamboo' },
  { file: '04 Track 9-Mata Saraswati.mp3',           title: 'Mata Saraswati' },
  { file: '04 Track 10-Namastute.mp3',               title: 'Namastute' },
  { file: '04 Track 11-Govinda Govinda.mp3',         title: 'Govinda Govinda' },
  { file: '04 Track 12-Tallivi Neeve.mp3',           title: 'Tallivi Neeve' },
  { file: '04 Track 13-Aaraginchu.mp3',              title: 'Aaraginchu' },
  { file: '04 Track 14-Mangalam.mp3',                title: 'Mangalam' },
]

export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}))

export default function CD4Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 4
      </h2>
      <ul className="space-y-6">
        {songs.map((s, i) => (
          <li key={s.file} className="border-b pb-4">
            <p className="mb-2 text-xl font-semibold text-gray-800">
              {i + 1}. {s.title}
            </p>
            <audio controls className="w-full">
              <source src={`${basePath}${encodeURIComponent(s.file)}`} type="audio/mpeg" />
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
  )
}
