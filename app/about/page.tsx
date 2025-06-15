import Image from 'next/image';
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Amma</h1>
      <Image src={AmmaPhoto} alt="Smt Subbalakshmi & Shri Nageswara Rao" width={600} className="rounded-xl mb-4" />
      <p className="mb-2">Om Sairam! Sai Subhanjali is the result of love and devotion of Mrs. SubbaLakshmi Sattiraju to Sri Shirdi Sai Baba and his teachings...</p>
      <p className="text-blue-600 mt-4">A full tribute with photos and family contributions.</p>
    </div>
  );
}
