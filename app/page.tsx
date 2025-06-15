import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 via-brand-50 to-white shadow">
        {/* subtle backdrop */}
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
              A devotional treasury of Sai Baba bhajans — lovingly written, composed &amp; sung
              by<strong> Subbalakshmi Sattiraju</strong>.
            </p>
            <Link
              href="/bhajans"
              className="inline-block rounded-xl bg-brand-600 px-8 py-3 font-medium text-white shadow hover:bg-brand-700"
            >
              🎵 Listen to Bhajans
            </Link>
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

      {/* DEVOTIONAL PHOTO GRID */}
      <section className="grid gap-6 md:grid-cols-3">
        <Image
          src="/SubbaLakshmi_Sattiraju.png"
          alt="Amma performing Sai bhajans"
          width={600}
          height={400}
          className="h-64 w-full rounded-xl object-cover shadow"
        />
        <Image
          src="/SmtSubbalakshmi_International_Womans_Day_Award_inDelhi.jpg"
          alt="International Women’s Day award in Delhi"
          width={600}
          height={400}
          className="h-64 w-full rounded-xl object-cover shadow"
        />
        <Image
          src="/Shri_NageswaraRao and Smt Subbalakshmi.jpg"
          alt="Sri Nageswara Rao & Smt Subbalakshmi"
          width={600}
          height={400}
          className="h-64 w-full rounded-xl object-cover shadow"
        />
      </section>

      {/* FAMILY HERITAGE */}
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <Image
          src="/Smt Subbalakshi and Shri Nageswara Rao Parents.png"
          alt="Amma & Ayyagaru’s parents"
          width={700}
          height={450}
          className="rounded-xl object-cover shadow"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-brand-700">A Legacy of Devotion</h2>
          <p>
            From humble roots in East and West Godavari Districts, the Sattiraju family passed down
            faith, music, and selfless service across generations. Their blessings echo through every
            note of <em>Sai Subhanjali</em>.
          </p>
        </div>
      </section>

      {/* SON-IN-LAW TRIBUTE */}
      <section className="mx-auto max-w-md text-center">
        <Image
          src="/f66151a5-091e-4fec-9ac0-49e45e5c5cd9.jpg"
          alt="Sri Mohana Krishna — son-in-law & recording pillar"
          width={300}
          height={400}
          className="mx-auto rounded-full object-cover shadow-md"
        />
        <p className="mt-4 text-sm text-gray-600">
          In loving memory of <strong>Sri Mohana Krishna</strong>, whose technical guidance made
          these recordings possible.
        </p>
      </section>

      {/* HISTORIC SAI IMAGE STRIP */}
      <section className="grid gap-4 md:grid-cols-3">
        <Image
          src="/SaiBaba2.png"
          alt="Sai blessing"
          width={400}
          height={500}
          className="rounded-xl shadow"
        />
        <Image
          src="/SaiBaba3.png"
          alt="Sai in Dwarkamai"
          width={400}
          height={500}
          className="rounded-xl shadow"
        />
        <Image
          src="/SaiBaba5.png"
          alt="Rare photo of Sai Baba"
          width={400}
          height={500}
          className="rounded-xl shadow"
        />
      </section>
    </div>
  );
}
