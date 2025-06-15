import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto text-center">
      <Image src="/SaiBaba2.png" alt="Sai Baba" width={400} height={400} className="mx-auto mb-6 rounded-xl shadow" />
      <h1 className="text-4xl font-bold mb-4">Sai Subhanjali</h1>
      <p className="mb-6 max-w-prose mx-auto">A devotional tribute by Smt. Subbalakshmi Sattiraju — singer, composer, and Sai devotee.</p>
      <div className="flex flex-col gap-4 md:flex-row justify-center">
        <Link href="/bhajans" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded">🎵 Bhajans</Link>
        <Link href="/about"   className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded">About Amma</Link>
        <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded">Contact</Link>
      </div>
    </main>
  );
}
