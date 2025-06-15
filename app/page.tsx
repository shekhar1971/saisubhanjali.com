// SaiSubhanjali.com — Minimal working starter (Next.js App Router)

// -------------------------
// next.config.js  (root-level)
// -------------------------
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true // tell Next.js we are using /app directory
  }
};
module.exports = nextConfig;

// -------------------------
// app/layout.tsx (global layout + metadata)
// -------------------------
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaiSubhanjali – Bhajans of Smt. Subbalakshmi Sattiraju',
  description: 'Listen to devotional Sai Baba bhajans and explore Amma\'s legacy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// -------------------------
// app/page.tsx (Homepage)
// -------------------------
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto text-center">
      {/* hero image served from /public */}
      <Image src="/SaiBaba2.png" alt="Sai Baba" width={400} height={400} className="mx-auto mb-6 rounded-xl shadow" />

      <h1 className="text-4xl font-bold mb-4">Sai Subhanjali</h1>
      <p className="mb-6 max-w-prose mx-auto">A devotional tribute by Smt. Subbalakshmi Sattiraju — singer, composer, and Sai devotee.</p>

      <div className="flex flex-col gap-4 md:flex-row justify-center">
        <Link href="/bhajans" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded">🎵 Bhajans</Link>
        <Link href="/about" className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded">About Amma</Link>
        <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded">Contact</Link>
      </div>
    </main>
  );
}

// -------------------------
// app/about/page.tsx  (placeholder — no image yet)
// -------------------------
export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Amma</h1>
      <p>Om Sairam! Sai Subhanjali is the result of love and devotion of Mrs. Subbalakshmi Sattiraju to Sri Shirdi Sai Baba and his teachings…</p>
    </section>
  );
}

// -------------------------
// app/globals.css  (simple reset + font)
// -------------------------
/* Add any global styles you like here */
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
