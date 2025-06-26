'use client'

const basePath =
  'https://juotvbuuyiisjjviqofc.supabase.co/storage/v1/object/public/sai-subhanjali-audio/CD2/'

const songs = [
  { file: '02 Track 1-Sai Nadhuni ki Vandanamu.mp3', title: 'Sai Nadhuni ki Vandanamu' },
  { file: '02 Track 2-Sai Pada Seva.mp3',            title: 'Sai Pada Seva' },
  { file: '02 Track 3-Shirdi Sai.mp3',               title: 'Shirdi Sai' },
  { file: '02 Track 4-Dwarakamayini.mp3',            title: 'Dwarakamayini' },
  { file: '02 Track 5-Poovulu Koyandi.mp3',          title: 'Poovulu Koyandi' },
  { file: '02 Track 6-Sai Namamu.mp3',               title: 'Sai Namamu' },
  { file: '02 Track 7-Aadiyantaalu.mp3',             title: 'Aadiyantaalu' },
  { file: '02 Track 8-Kripa Drishtini.mp3',          title: 'Kripa Drishtini' },
  { file: '02 Track 9-Guruvarameeroju.mp3',          title: 'Guruvarameeroju' },
  { file: '02 Track 10-Raksha Raksha.mp3',           title: 'Raksha Raksha' },
  { file: '02 Track 11-Sai Nadhuni ki Managalam.mp3',title: 'Sai Nadhuni ki Managalam' },
]

export const tracks = songs.map(({ file, title }) => ({
  title,
  file: `${basePath}${encodeURIComponent(file)}`,
}))

export default function CD2Display() {
  return (
    <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
        Sai Subhanjali – CD 2
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
