// app/about/page.tsx – full page
'use client';

import Image from 'next/image';

export const metadata = {
  title: 'About – Sai Subhanjali | Bhajans of Subbalakshmi Sattiraju',
  description:
    'Learn about the devotional journey of Subbalakshmi Sattiraju and the creation of Sai Subhanjali – a heartfelt collection of Sai Baba bhajans.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-12 text-gray-800 lg:py-16">
      {/* ---------- HERO IMAGE ---------- */}
      <Image
        src="/SubbaLakshmi_Sattiraju.png"
        alt="Subbalakshmi Sattiraju"
        width={800}
        height={500}
        className="mx-auto mb-8 rounded-xl shadow-md"
        priority
      />

      <h1 className="mb-4 text-center text-4xl font-extrabold text-brand-700">
        About Sai Subhanjali
      </h1>

      {/* ---------- NARRATIVE ---------- */}
      <article className="space-y-4 leading-relaxed">
        <p><strong>Om Sairam!</strong></p>
        <p>
          <strong>Sai Subhanjali</strong> is the result of love and devotion of Mrs. SubbaLakshmi Sattiraju
          (lovingly known as <strong>Subha Sattiraju</strong>) to Sri Shirdi Sai Baba and His teachings.
        </p>
        <p>
          Sai Subhanjali is a collection of bhajans on Sri Sai Baba written, composed, and sung by
          Mrs. Subbalakshmi Sattiraju. She released six albums with 10 – 14 bhajans in each album and authored two books
          (Telugu &amp; Hindi) sharing her spiritual experiences.
        </p>
        <p>
          The journey began when Mrs. Subha Sattiraju undertook a <em>Parayanam</em> of the <strong>Sai Satcharitra</strong>.
          Encouraged by Sri Sai Baba’s grace and the book <em>Sri Sai Leela Amritam</em>, she felt an inner calling to
          compose and sing her own bhajans.
        </p>
        <p>
          Mrs. Subha Sattiraju passed away in September 2024. A trained musician and devoted homemaker, she and her late
          husband Sri Nageswara Rao Sattiraju hailed from small villages in Andhra Pradesh and served their communities
          with humility and faith.
        </p>
        <p>
          <strong>Sai Subhanjali</strong> is a not‑for‑profit initiative, sustained by the family, to spread spirituality,
          peace and joy. Its realisation was possible through the selfless support of Sri Nageswara Rao Sattiraju, their
          late son‑in‑law Sri Mohana Krishna, extended family, countless volunteer musicians and, above all, the blessings
          of Sri Sai Baba.
        </p>
        <p>
          All recording and publishing expenses were borne entirely by Mrs. SubbaLakshmi &amp; Sri Nageswara Rao Sattiraju.
        </p>
        <p className="text-center font-semibold text-brand-700">OM SAI RAM</p>
      </article>

      {/* ---------- TRIBUTE SECTION ---------- */}
      <section className="pt-12 text-center">
        <Image
          src="/Shri_Mohan_Krishna.jpg"
          alt="Sri Mohana Krishna – pillar of recording"
          width={300}
          height={400}
          className="mx-auto rounded-full object-cover shadow-md mb-4"
        />
        <p className="max-w-md mx-auto text-sm text-gray-600">
          In loving memory of <strong>Sri Mohana Krishna</strong>, whose technical guidance made these recordings possible.
        </p>
      </section>
    </div>
  );
}
