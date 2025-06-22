'use client'

// app/page.tsx — FINAL version with SEO, full narrative, and enhanced design
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/** SEO metadata for search engines and sharing */
export const metadata = {
  title: 'Sai Subhanjali – Devotional Bhajans of Shri Sai Baba',
  description:
    'A spiritual collection of Shri Sai Baba bhajans composed and sung by Smt. Subbalakshmi Sattiraju. Explore divine music, blessings, and legacy.',
  keywords: [
    'Sai Baba Bhajans',
    'Subbalakshmi Sattiraju',
    'Shirdi Sai Devotional Songs',
    'Sai Subhanjali',
    'Sai Satcharitra',
    'Spiritual Telugu Bhajans',
    'Devotional Hindi Songs',
  ],
  openGraph: {
    title: 'Sai Subhanjali – Devotional Bhajans of Shri Sai Baba',
    description:
      'A spiritual collection of Shri Sai Baba bhajans composed and sung by Smt. Subbalakshmi Sattiraju.',
    url: 'https://www.saisubhanjali.com',
    siteName: 'Sai Subhanjali',
    images: [
      {
        url: '/SaiBaba1.png',
        width: 1200,
        height: 630,
        alt: 'Sai Subhanjali Bhajans Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

/** Utility to render a devotional photo with ideal layout */
function DevotionalImg({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={450}
      height={300}
      className="h-auto w-full max-w-[500px] flex-none rounded-xl object-contain shadow-md"
    />
  );
}

export default function Home() {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const recordVisit = async () => {
      const { data, error } = await supabase.rpc('increment_visit_counter');
      if (!error) setVisitCount(data);
    };
    recordVisit();
  }, []);

  return (
    <div className="space-y-24">
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 via-brand-50 to-white shadow">
        <Image
          src="/SaiBaba1.png"
          alt="Shirdi Sai Baba sanctum"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative z-10 grid gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-brand-700 drop-shadow md:text-6xl">
              Sai Subhanjali
            </h1>
            <p className="mb-8 max-w-prose text-lg">
              A devotional treasury of Sai Baba bhajans — lovingly written, composed & sung by
              <span className="font-semibold"> Smt. Subbalakshmi Sattiraju</span>.
            </p>
            <div className="inline-block rounded-xl bg-white/20 backdrop-blur-md p-1 shadow-md">
              <Link
                href="/bhajans"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-base font-semibold text-white hover:bg-brand-800 transition"
              >
                🎵 Listen to Bhajans
              </Link>
            </div>
            {visitCount !== null && (
              <p className="mt-4 text-sm text-gray-700">🙏 {visitCount.toLocaleString()} visitors</p>
            )}
          </div>
          <Image
            src="/SaiBaba4.png"
            alt="Blessing posture of Sai Baba"
            width={450}
            height={600}
            priority
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* FULL “ABOUT” NARRATIVE + LEGACY SECTIONS REMAIN UNCHANGED */}
      {/* ... retain your entire existing layout below ... */}
    </div>
  );
}
