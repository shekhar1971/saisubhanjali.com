'use client';
import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

export default function BhajanPage() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">

      {/* Desktop Left Navigation */}
      <aside className="hidden md:flex flex-col w-64 p-6 sticky top-[64px] self-start z-20">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5">
          <h2 className="text-lg font-bold text-purple-800 mb-5">Sai Subhanjali</h2>
          <ul className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="block text-purple-700 hover:text-white hover:bg-purple-600 px-4 py-2 rounded transition duration-200 font-medium"
                >
                  CD {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Top CD Navigation */}
      <div className="md:hidden sticky top-[56px] z-30 bg-white border-b px-4 py-3 shadow-sm flex flex-wrap justify-center gap-3">
        {Array.from({ length: 6 }, (_, i) => (
          <a
            key={i}
            href={`#cd${i + 1}`}
            className="px-3 py-2 rounded-full text-sm font-medium text-purple-700 border border-purple-300 hover:bg-purple-100 transition"
          >
            CD{i + 1}
          </a>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-8 space-y-20">
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
      </main>
    </div>
  );
}
