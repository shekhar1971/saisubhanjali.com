import CD1Display from "../../components/CD1Display";
import CD2Display from "../../components/CD2Display";
import CD3Display from "../../components/CD3Display";
import CD4Display from "../../components/CD4Display";
import CD5Display from "../../components/CD5Display";
import CD6Display from "../../components/CD6Display";

export default function BhajanPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left nav on desktop */}
      <nav className="hidden md:flex md:w-1/5 bg-white border-r shadow-sm p-4 sticky top-0 h-fit z-10">
        <div>
          <h2 className="text-xl font-bold mb-4 text-purple-700">Sai Subhanjali</h2>
          <ul className="space-y-3">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>
                <a
                  href={`#cd${i + 1}`}
                  className="block text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  CD {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Horizontal nav on mobile */}
      <div className="md:hidden bg-white px-4 py-3 sticky top-0 z-10 shadow-sm overflow-x-auto whitespace-nowrap flex gap-4 border-b">
        {Array.from({ length: 6 }, (_, i) => (
          <a
            key={i}
            href={`#cd${i + 1}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium flex-shrink-0"
          >
            CD {i + 1}
          </a>
        ))}
      </div>

      {/* Main content */}
      <main className="flex-1 px-4 py-6 space-y-12">
        <section id="cd1"><CD1Display /></section>
        <section id="cd2"><CD2Display /></section>
        <section id="cd3"><CD3Display /></section>
        <section id="cd4"><CD4Display /></section>
        <section id="cd5"><CD5Display /></section>
        <section id="cd6"><CD6Display /></section>
      </main>
    </div>
  );
}
