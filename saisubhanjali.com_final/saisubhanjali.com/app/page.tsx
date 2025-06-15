import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '@/public/SaiBaba2.png'; // placeholder

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto text-center">
      <Image src={HeroImage} alt="Sai Baba" width={400} className="mx-auto mb-6 rounded-xl" />
      <h1 className="text-4xl font-bold mb-4">Sai Subhanjali</h1>
      <p className="mb-4">A devotional tribute by Smt. Subbalakshmi Sattiraju — writer, singer, and Sai devotee.</p>
      <div className="flex flex-col gap-4 md:flex-row justify-center">
        <Link href="/bhajans" className="bg-indigo-600 text-white px-6 py-3 rounded-xl">Listen to Bhajans</Link>
        <Link href="/about" className="bg-gray-200 px-6 py-3 rounded-xl">About Amma</Link>
        <Link href="/book" className="bg-green-500 text-white px-6 py-3 rounded-xl">Sai Baba Book</Link>
      </div>
    </main>
  );
}
