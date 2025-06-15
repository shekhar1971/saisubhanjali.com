// app/page.tsx — refined devotional grids & verified image paths
// -----------------------------------------------------------------
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  /*
    🔑 Heads‑up on file names
    ‑ /public/
      ├─ SubbaLakshmi_Sattiraju.png
      ├─ SubbaLakshmi_Performance.png              ⟵ NEW (first grid image)
      ├─ SubbaLakshmi_Singing_With_Sitar.png        ⟵ NEW (second grid image)
      ├─ SubbaLakshmi_Award_Felicitations.png       ⟵ NEW (third grid image)
      ├─ SubbaLakshmi_International_Womens_Day.jpg  ⟵ already used (big image)
      ├─ SaiBaba1/2/3/4/5.png … etc.
      ├─ GrandParents_Montage.png                   ⟵ merged montage (blue background)
      ├─ Parents_Portrait.jpg                       ⟵ smiling couple (no spaces!)
      ├─ MohanaKrishna.jpg                          ⟵ circular tribute
  */

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

      {/* AMMA DEVOTIONAL MOMENTS – own row so they stay aligned */}
      <section className="flex flex-wrap justify-center gap-6">
        {[
          '/SubbaLakshmi_Performance.png',
          '/SubbaLakshmi_Singing_With_Sitar.png',
          '/SubbaLakshmi_Award_Felicitations.png',
          '/SubbaLakshmi_International_Womens_Day.jpg',
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Amma devotional moments"
            width={320}
            height={220}
            className="rounded-xl object-cover shadow"
          />
        ))}
      </section>

      {/* FAMILY HERITAGE */}
      <section className="grid gap-8 md:grid-cols-3 md:items-center">
        <Image
          src="/GrandParents_Montage.png"
          alt="Parental roots of Amma & Ayyagaru"
          width={450}
          height={350}
          className="rounded-xl object-cover shadow"
        />

        <Image
          src="/Parents_Portrait.jpg"
          alt="Smt Subbalakshmi & Sri Nageswara Rao Garu"
          width={450}
          height={350}
          className="rounded-xl object-cover shadow"
        />

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-brand-700">A Legacy of Devotion</h2>
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
          src="/MohanaKrishna.jpg"
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
      <section className="grid gap-4 md:grid-cols-3">
        <Image src="/SaiBaba2.png" alt="Sai blessing" width={400} height={500} className="rounded-xl shadow" />
        <Image src="/SaiBaba3.png" alt="Sai in Dwarkamai" width={400} height={500} className="rounded-xl shadow" />
        <Image src="/SaiBaba5.png" alt="Rare photo of Sai Baba" width={400} height={500} className="rounded-xl shadow" />
      </section>
    </div>
  );
}
// -----------------------------------------------------------------
