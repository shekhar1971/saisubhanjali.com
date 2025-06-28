// app/page.tsx — FINAL version with Sidebar row, SEO, and brand-inspired colors

import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar'; // Ensure correct path

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
  return (
    <div className="space-y-24">

      {/* ───────────── SIDEBAR ROW ───────────── */}
      <div className="bg-[#FDF6EC]">
        <Sidebar />
      </div>

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FDF6EC] via-white to-[#FDF6EC] shadow">
        <Image
          src="/SaiBaba1.png"
          alt="Shirdi Sai Baba sanctum"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="relative z-10 grid gap-8 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-[#7B3F00] drop-shadow md:text-6xl">
              Sai Subhanjali
            </h1>
            <p className="mb-8 max-w-prose text-lg text-[#7B3F00]">
              A devotional treasury of Sai Baba bhajans — lovingly written, composed & sung by
              <span className="font-semibold"> Smt. Subbalakshmi Sattiraju</span>.
            </p>
            <div className="inline-block rounded-xl bg-white/20 backdrop-blur-md p-1 shadow-md">
              <Link
                href="/bhajans"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C28F2C] px-5 py-2.5 text-base font-semibold text-white hover:bg-[#B33A24] transition"
              >
                🎵 Listen to Bhajans
              </Link>
            </div>
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

      {/* ───────────── FULL “ABOUT” NARRATIVE ───────────── */}
      <section className="mx-auto max-w-6xl space-y-6 rounded-xl bg-white/60 p-8 shadow lg:max-w-7xl">
        <h2 className="text-center text-3xl font-bold text-[#7B3F00]">Om Sairam!</h2>
        <p> Sai Subhanjali is the result of love and devotion of Mrs. SubbaLakshmi Sattiraju (lovingly known as Subha Sattiraju) to Sri Shirdi Sai Baba and his teachings.</p>
        <p> Sai Subhanjali is a collection of bhajans on Sri Sai Baba written, composed, and sung by Mrs. Subbalakshmi Sattiraju. She has released six albums with 10 to 14 bhajans in each album. She has also written two books – one in Telugu and one in Hindi. These books give detailed insights on experience on this spiritual path.</p>
        <p> This journey started when Mrs. Subha Sattiraju decided to do <em>Parayanam</em> of Sai Satcharitra. Initially, she was not sure if she had the courage to go on this path. With Sri Sai Baba's blessings she came across the book – Sri Sai Leela Amritam and started reading it. She felt instant peace and joy while reading the book.</p>
        <p> This experience set the foundations of her following the path towards Sri Sai Baba and spirituality. Soon she had the Divine awakening to write, compose, and sing her own bhajans on Sai Baba. Inspiration, lyrics and music composition continue to come to her with divine blessings of Sri Sai Baba.</p>
        <p> Mrs. Subha Sattiraju passed away in September 2024. She was a trained musician and a home maker. Mrs. Late Subha Sattiraju & her late husband Late Nageswara Rao Sattiraju were born in small villages in Andhra Pradesh (Sidhantam & Kattunga Village, in West & East Godavari district). Mrs. Sattiraju has performed at various spiritual events for many years, throughout the city.</p>
        <p> Sai Subhanjali is a not‑for‑profit initiative with the sole purpose of promoting spirituality, peace, and joy. This initiative was made possible by encouragement and unflinching support of her husband Late Sri Nageswara Rao Sattiraju, a civil engineer, who spent 40+ years helping build dams in India. Many of the key water projects in India have his signature on them. He was always humble, a <em>Karma Yogi</em>, who gave a lot more to the world than we will ever know. We all miss him dearly.</p>
        <p> All music recordings were facilitated by her late son‑in‑law Sri Mohana Krishna (husband of Smt Lalita — second eldest among 5 siblings). Without Sri Mohan's encouragement, know‑how & support, this would not have been possible. We miss Sri Mohan immensely and see him smiling and blessing us as more & more devotees can now hear these soulful bhajans.</p>
        <p> This endeavour was possible only with divine blessings from Sri Sai Baba, selfless dedication from Late Sri Nageswara Rao & Subha Sattiraju, their late son‑in‑law Sri Mohana Krishna, their immediate/extended family along with numerous voluntary musicians & friends over the years.</p>
        <p> All expenses for recording and publishing these songs and books are borne completely by Mrs. Subha Sattiraju & her late husband Sri Nageswara Rao Sattiraju.</p>
        <p className="text-center font-semibold">OM SAI RAM</p>
      </section>

      {/* ───── INDIVIDUAL DEVOTIONAL PHOTOS ───── */}
      <section className="flex justify-center px-4">
        <DevotionalImg src="/SubbaLakshmi_Sattiraju.png" alt="Amma devotional moments montage" />
      </section>
      <section className="flex justify-center px-4">
        <DevotionalImg src="/SmtSubbalakshmi_International_Womans_Day_Award_inDelhi.jpg" alt="International Women’s Day award in Delhi" />
      </section>

      {/* ───── LEGACY ───── */}
      <section className="px-4 text-center">
        <Image
          src="/Shri_NageswaraRao_and_Smt_Subbalakshmi.jpg"
          alt="Smt Subbalakshmi & Sri Nageswara Rao Garu"
          width={400}
          height={350}
          className="mx-auto rounded-xl object-cover shadow mb-6"
        />
        <h2 className="text-3xl font-bold text-[#7B3F00] mb-2">A Legacy of Devotion</h2>
        <p className="max-w-3xl mx-auto text-lg">
          From humble roots in East and West Godavari Districts, the Sattiraju family passed down faith, music, and
          selfless service across generations. Their blessings echo through every note of <em>Sai Subhanjali</em>.
        </p>
      </section>

      {/* ───── SON‑IN‑LAW TRIBUTE ───── */}
      <section className="mx-auto max-w-md text-center">
        <Image
          src="/Shri_Mohan_Krishna.jpg"
          alt="Sri Mohana Krishna — son‑in‑law & recording pillar"
          width={300}
          height={400}
          className="mx-auto rounded-full object-cover shadow-md"
        />
        <p className="mt-4 text-sm text-gray-600">
          In loving memory of <strong>Sri Mohana Krishna</strong>, whose technical guidance made these recordings possible.
        </p>
      </section>

      {/* ───── SAI BABA HISTORIC IMAGE STRIP ───── */}
      <section className="flex flex-wrap justify-center gap-6">
        {['/SaiBaba2.png', '/SaiBaba3.png', '/SaiBaba5.png'].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Historic Sai Baba photograph"
            width={400}
            height={500}
            className="h-72 w-auto rounded-xl object-cover shadow"
          />
        ))}
      </section>
    </div>
  );
}
