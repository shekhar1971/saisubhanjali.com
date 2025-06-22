import CD1Display from "../../components/CD1Display";
import CD2Display from "../../components/CD2Display";
import CD3Display from "../../components/CD3Display";
import CD4Display from "../../components/CD4Display";
import CD5Display from "../../components/CD5Display";

export default function BhajanPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <CD1Display />
      <CD2Display />
      <CD3Display />
      <CD4Display />
      <CD5Display />
    </main>
  );
}
