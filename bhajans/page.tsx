const albums = [
  {
    title: 'Sai Subhanjali – 1',
    tracks: ["Manavinivinuma", "Kolichiti Kolichiti", "Sharanantini Baba", "Shirdi Vasa", "Yentadaya"]
  },
  {
    title: 'Sai Subhanjali – 2',
    tracks: ["Sai Nadhuni ki Vandanamu", "Sai Pada Seva", "Shirdi Sai", "Dwarakamayini", "Sai Namamu"]
  }
];

export default function BhajansPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bhajan Albums</h1>
      {albums.map((album, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{album.title}</h2>
          <ul className="list-disc ml-6">
            {album.tracks.map((track, j) => (
              <li key={j}>{track} — <span className="text-gray-400">[Audio coming soon]</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
