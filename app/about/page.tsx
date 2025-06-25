'use client';

import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Sai Subhanjali | Devotional Bhajans of Subbalakshmi Sattiraju',
  description:
    'A devotional treasury of Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. Listen online or download from all 6 Sai Subhanjali CDs.',
  keywords: [
    'Sai Subhanjali',
    'Subbalakshmi Sattiraju',
    'Sai Baba Bhajans',
    'Sai Bhakti Songs',
    'Shirdi Sai devotional',
    'Telugu bhakti songs',
    'devotional CDs',
    'spiritual music',
    'Sai Baba songs download',
  ],
  metadataBase: new URL('https://www.saisubhanjali.com'),
  openGraph: {
    title: 'Sai Subhanjali | Bhajans by Subbalakshmi Sattiraju',
    description:
      'A tribute to the musical devotion of Late Smt. Subbalakshmi Sattiraju to Shirdi Sai Baba. All 6 CDs available to listen and download.',
    url: 'https://www.saisubhanjali.com',
    siteName: 'SaiSubhanjali.com',
    images: [
      {
        url: 'https://www.saisubhanjali.com/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Sai Subhanjali banner',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Subhanjali – Bhajans by Smt. Subbalakshmi Sattiraju',
    description:
      'Stream or download rare Sai Baba bhajans composed by Late Smt. Subbalakshmi Sattiraju. A timeless devotional tribute.',
    images: ['https://www.saisubhanjali.com/og-banner.jpg'],
  },
  authors: [{ name: 'Shekhar Sattiraju and family', url: 'https://www.saisubhanjali.com' }],
  creator: 'Shekhar Sattiraju and family',
  other: {
    copyright: '© 2025 Family of Subbalakshmi Sattiraju. All rights reserved.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-800 antialiased">
        {/* ——— SITE NAVIGATION ——— */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm font-medium text-gray-800 md:justify-between">
            <Link href="/" className="w-full text-center text-xl font-bold text-brand-700 hover:text-brand-800 md:w-auto md:text-left">
              Sai Subhanjali
            </Link>
            <ul className="flex flex-wrap justify-center gap-4 w-full md:w-auto md:justify-end">
              <li><Link href="/about" className="hover:text-brand-600">About</Link></li>
              <li><Link href="#photos" scroll={false} className="hover:text-brand-600">Photos</Link></li>
              <li><Link href="#legacy" scroll={false} className="hover:text-brand-600">Legacy</Link></li>
              <li><Link href="/bhajans" className="hover:text-brand-600">Bhajans</Link></li>
              <li><Link href="/contact" className="hover:text-brand-600">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* ——— MAIN CONTENT ——— */}
        <main className="mx-auto max-w-3xl px-6 py-12 lg:py-16 space-y-6">
          <Image
            src="/SubbaLakshmi_Sattiraju.png"
            alt="Subbalakshmi Sattiraju"
            width={800}
            height={500}
            className="mx-auto rounded shadow mb-6"
          />
          <h1 className="text-3xl font-bold text-center text-brand-700 mb-4">About Us</h1>
          <p>Om Sairam!</p>
          <p><strong>Sai Subhanjali</strong> is the result of love and devotion of Mrs. SubbaLakshmi Sattiraju (lovingly known as Subha Sattiraju) to Sri Shirdi Sai Baba and his teachings.</p>
          <p>Sai Subhanjali is a collection of bhajans on Sri Sai Baba written, composed, and sung by Mrs. Subbalakshmi Sattiraju. She has released six albums with 10 to 14 bhajans in each album. She has also written two books – one in Telugu and one in Hindi. These books give detailed insights on experience on this spiritual path.</p>
          <p>This journey started when Mrs. Subha Sattiraju decided to do Parayanam of Sai Satcharitra. Initially, she was not sure if she had the courage to go on this path. With Sri Sai Baba's blessings she came across the book – Sri Sai Leela Amritam and started reading it. She felt instant peace and joy while reading the book.</p>
          <p>This experience set the foundations of her following the path towards Sri Sai Baba and spirituality. Soon she had the Divine awakening to write, compose, and sing her own bhajans on Sai Baba. Inspiration, lyrics and music composition continue to come to her with divine blessings of Sri Sai Baba.</p>
          <p>Mrs. Subha Sattiraju passed away in September 2024. She was a trained musician and a home maker. Mrs. Late Subha Sattiraju & her late husband Late Nageswara Rao Sattiraju were born in small villages in Andhra Pradesh (Sidhantam & Kattunga Village, in West & East Godavari district). Mrs. Sattiraju has performed at various spiritual events for many years, throughout the city.</p>
          <p><strong>Sai Subhanjali</strong> is a not‑for‑profit initiative with the sole purpose of promoting spirituality, peace, and joy. This initiative was made possible by encouragement and unflinching support of her husband Late Sri Nageswara Rao Sattiraju, a civil engineer, who spent 40+ years helping build dams in India. Many of the key water projects in India have his signature on them. He was always humble, a Karma Yogi, who gave a lot more to the world than we will ever know. We all miss him dearly.</p>
          <p>All music recordings were facilitated by her late son‑in‑law Sri Mohana Krishna (husband of Smt Lalita — second eldest among 5 siblings). Without Sri Mohan's encouragement, know‑how & support, this would not have been possible. We miss Sri Mohan immensely and see him smiling and blessing us as more & more devotees can now hear these soulful bhajans.</p>
          <p>This endeavour was possible only with divine blessings from Sri Sai Baba, selfless dedication from Late Sri Nageswara Rao & Subha Sattiraju, their late son‑in‑law Sri Mohana Krishna, their immediate/extended family along with numerous voluntary musicians & friends over the years.</p>
          <p>All expenses for recording and publishing these songs and books are borne completely by Mrs. Subha Sattiraju & her late husband Sri Nageswara Rao Sattiraju.</p>
          <p className="text-center font-semibold">OM SAI RAM</p>
        </main>

        {/* ——— FOOTER COPYRIGHT ——— */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200 px-4">
          © {new Date().getFullYear()} The Family of Late Smt. Subbalakshmi Sattiraju.
          <br />
          These bhajans are offered for devotional use only. Commercial use is strictly prohibited without written permission.
        </footer>
      </body>
    </html>
  );
}
