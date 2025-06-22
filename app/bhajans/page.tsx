'use client';
import CD1Display from '../../components/CD1Display';
import CD2Display from '../../components/CD2Display';
import CD3Display from '../../components/CD3Display';
import CD4Display from '../../components/CD4Display';
import CD5Display from '../../components/CD5Display';
import CD6Display from '../../components/CD6Display';

export default function BhajanPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left nav for desktop */}
      <nav className="hidden md:flex md:w-1/5 bg-white border-r shadow-sm p-6 sticky top-0 h-fit z-10">
        <div>
          <h2 className="text-xl font-bold text-purple-700 mb-6">Sai Subhanjali</h2>
          <ul className="space-y-4">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="block text-indigo-600 hover:text-indigo-900 transition-all duration-200 font-medium"
                >
                  CD {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Horizontal nav for mobile */}
      <div className="md:hidden bg-white px-4 py-3 sticky top-0 z-10 shadow-sm overflow-x-auto whitespace-nowrap flex gap-3 border-b">
        {Array.from({ length: 6 }, (_, i) => (
          <a
            key={i}
            href={`#cd${i + 1}`}
            className="text-sm text-indigo-600 hover:text-indigo-900 font-medium px-3 py-1 border border-indigo-200 rounded-full transition-colors duration-150"
          >
            CD {i + 1}
          </a>
        ))}
      </div>

      {/* Main content area */}
      <main className="flex-1 px-4 md:px-8 py-6 space-y-16">
        <section id="cd1">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 1</h2>
          <CD1Display />
        </section>
        <section id="cd2">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 2</h2>
          <CD2Display />
        </section>
        <section id="cd3">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 3</h2>
          <CD3Display />
        </section>
        <section id="cd4">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 4</h2>
          <CD4Display />
        </section>
        <section id="cd5">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 5</h2>
          <CD5Display />
        </section>
        <section id="cd6">
          <h2 className="text-center text-2xl font-bold text-purple-700 mb-4">Sai Subhanjali – CD 6</h2>
          <CD6Display />
        </section>
      </main>
    </div>
  );
}
