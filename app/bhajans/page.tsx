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
      {/* Left Nav for Desktop */}
      <nav className="hidden md:flex md:w-1/5 px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-6 w-full sticky top-24">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 border-b pb-2">Sai Subhanjali</h2>
          <ul className="space-y-4">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="block px-3 py-2 rounded-lg text-indigo-700 hover:bg-purple-100 hover:text-purple-900 font-medium transition"
                >
                  CD {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pb-16">
        {/* Top title */}
        <div className="text-center pt-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 tracking-wide">Sai Subhanjali</h1>
        </div>

        {/* Mobile CD Navigation */}
        <div className="flex flex-wrap justify-center mt-6 gap-3 px-4 md:hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <a
              key={i}
              href={`#cd${i + 1}`}
              className="px-4 py-2 rounded-full text-purple-800 border border-purple-300 hover:bg-purple-100 hover:text-purple-900 font-semibold text-sm transition"
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
      </main>
    </div>
  );
}
