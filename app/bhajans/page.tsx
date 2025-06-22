import CD1Display from "../../components/CD1Display";
import CD2Display from "../../components/CD2Display";

export default function BhajanPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <CD1Display />
      <CD2Display />
    </main>
  );
}
