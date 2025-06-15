// app/page.tsx — image fit tweak for grandparents montage (rev 6)
// ------------------------------------------------------------
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  /** Helper to render a responsive devotional photo */
  const DevotionalImg = ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={260}
      className="h-48 w-auto rounded-xl object-cover shadow lg:h-60"
    />
  );

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 via-brand-50 to-white shadow">
        <Image
          src="/SaiBaba1.png"
          alt="Shirdi Sai Baba sanctum"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="relative z-10 grid gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-brand-700 drop-shadow md:text-6xl">
              Sai Subhanjali
            </h1>
            <p className="mb-8 max-w-prose text-lg">
              A devotional treasury of Sai Baba bhajans — lovingly written, composed &amp; sung by
              <span className="font-semibold"> Smt. Subbalakshmi Sattiraju</span>.
            </p>
            <Link
              href="/bhajans"
              className="inline-block rounded-xl bg-brand-600 px-8 py-3 font-medium text-white shadow hover:bg-brand-700"
            >
              🎵 Listen to Bhajans
            </Link>
          </div>

          <Image
            src="/SaiBaba4.png"
            alt="Blessing posture of Sai Baba"
            width={450}
            height={600}
            priority
            className="mx-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* AMMA DEVOTIONAL MOMENTS */}
      <section className="flex flex-wrap justify-center gap-6">
        <DevotionalImg src="/SubbaLakshmi_Sattiraju.png" alt="Amma devotional moments" />
        <DevotionalImg
          src="/SmtSubbalakshmi_International_Womans_Day_Award_inDelhi.jpg"
          alt="International Women’s Day award in Delhi"
        />
      </section>

      {/* FAMILY HERITAGE */}
      <section className="grid gap-8 md:grid-cols-3 md:items-center">
        {/* Grandparents montage – use object‑contain so the full collage is visible */}
        <Image
          src="/Smt%20Subbalakshi%20and%20Shri%20Nageswara%20Rao%20Parents.png"
          alt="Parental roots of Amma & Ayyagaru"
          width={400}
          height={260}
          className="h-48 w-auto rounded-xl object-contain shadow lg:h-60"
        />

        {/* Parents’ portrait */}
        <DevotionalImg
          src="/Shri_NageswaraRao_and_Smt_Subbalakshmi.jpg"
          alt="Smt Subbalakshmi & Sri Nageswara Rao Garu"
        />

        {/* Heritage blurb */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-brand-700">A Legacy of Devotion</h2>
          <p>
            From humble roots in East and West Godavari Districts, the Sattiraju family passed down
            faith, music, and selfless service across generations. Their blessings echo through
            every note of <em>Sai Subhanjali</em>.
          </p>
        </div>
      </section>

      {/* SON‑IN‑LAW TRIBUTE */}
      <section className="mx-auto max-w-md text-center">
        <Image
          src="/Shri_Mohan_Krishna.jpg"
          alt="Sri Mohana Krishna — son‑in‑law &amp; recording pillar"
          width={300}
          height={400}
          className="mx-auto rounded-full object-cover shadow-md"
        />
        <p className="mt-4 text-sm text-gray-600">
          In loving memory of <strong>Sri Mohana Krishna</strong>, whose technical guidance made these
          recordings possible.
        </p>
      </section>

      {/* HISTORIC SAI IMAGE STRIP */}
      <section className="flex flex-wrap justify-center gap-6">
        {['/SaiBaba2.png', '/SaiBaba3.png', '/SaiBaba5.png'].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Historic Sai Baba photograph"
            width={350}
            height={500}
            className="h-96 w-auto rounded-xl object-cover shadow"
          />
        ))}
      </section>
    </div>
  );
}
