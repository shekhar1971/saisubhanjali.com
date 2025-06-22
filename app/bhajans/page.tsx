'use client';
import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

export default function BhajanPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Top title */}
      <div className="text-center pt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-800 tracking-wide">Sai Subhanjali</h1>
      </div>

      {/* Mobile + desktop CD navigation */}
      <div className="flex flex-wrap justify-center mt-6 gap-4 px-4">
        {Array.from({ length: 6 }, (_, i) => (
          <a
            key={i}
            href={`#cd${i + 1}`}
            className="px-4 py-2 rounded-full text-purple-800 border border-purple-300 hover:bg-purple-100 hover:text-purple-900 font-semibold text-sm md:text-base transition"
          >
            CD{i + 1}
          </a>
        ))}
      </div>

      {/* CD Sections */}
      <div className="mt-10 space-y-16 px-4 md:px-8">
        <section id="cd1">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD1</h2>
          <CD1Display />
        </section>
        <section id="cd2">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD2</h2>
          <CD2Display />
        </section>
        <section id="cd3">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD3</h2>
          <CD3Display />
        </section>
        <section id="cd4">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD4</h2>
          <CD4Display />
        </section>
        <section id="cd5">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD5</h2>
          <CD5Display />
        </section>
        <section id="cd6">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD6</h2>
          <CD6Display />
        </section>
      </div>
    </div>
  );
}
