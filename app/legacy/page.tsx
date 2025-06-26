// app/legacy/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Legacy – Sai Subhanjali',
  description:
    'Honouring the devotional legacy of Late Shri Nageswara Rao & Subbalakshmi Sattiraju, whose faith and selfless service resonate through Sai Subhanjali.',
};

export default function LegacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16 text-gray-800 text-center">
      {/* ——— PORTRAIT ——— */}
      <Image
        src="/Shri_NageswaraRao_and_Smt_Subbalakshmi.jpg"
        alt="Late Shri Nageswara Rao & Smt Subbalakshmi Sattiraju"
        width={600}
        height={420}
        className="mx-auto mb-6 rounded-xl object-cover shadow-lg"
        priority
      />

      <figcaption className="mb-10 text-sm text-gray-600">
        <strong>Late Shri Nageswara Rao & Subbalakshmi Sattiraju</strong>
      </figcaption>

      {/* ——— LEGACY COPY ——— */}
      <h1 className="mb-4 text-4xl font-extrabold text-brand-700">
        A Legacy of Devotion
      </h1>

      <p className="mx-auto max-w-prose text-lg leading-relaxed">
        From humble roots in East and West Godavari Districts, the
        Sattiraju family passed down faith, music, and selfless service
        across generations. Their blessings echo through every note of <em>Sai Subhanjali</em>.
      </p>
    </div>
  );
}
