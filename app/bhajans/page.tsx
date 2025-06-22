import CD1Display from "../../components/CD1Display";
import CD2Display from "../../components/CD2Display";
import CD3Display from "../../components/CD3Display";
import CD4Display from "../../components/CD4Display";
import CD5Display from "../../components/CD5Display";
import CD6Display from "../../components/CD6Display";

export default function BhajanPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar navigation */}
      <nav className="md:w-1/5 w-full bg-white md:border-r shadow-sm p-4 sticky top-0 h-fit z-10">
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
      </nav>

      {/* Main content */}
      <main className="md:w-4/5 w-full bg-gray-50 py-10 px-4 space-y-10">
        <div id="cd1"><CD1Display /></div>
        <div id="cd2"><CD2Display /></div>
        <div id="cd3"><CD3Display /></div>
        <div id="cd4"><CD4Display /></div>
        <div id="cd5"><CD5Display /></div>
        <div id="cd6"><CD6Display /></div>
      </main>
    </div>
  );
}
