import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-50 to-white shadow-lg">
      {/* decorative corner blob */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rotate-45 bg-brand-50" />

      <div className="relative z-10 grid gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
        {/* Text side */}
        <div>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-brand-700 drop-shadow md:text-6xl">
            Sai Subhanjali
          </h1>
          <p className="mb-8 max-w-prose text-lg">
            A devotional collection of Sai Baba bhajans — written, composed & sung by
            <span className="font-semibold"> Smt. Subbalakshmi Sattiraju</span>.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/bhajans"
              className="rounded-xl bg-brand-700 px-8 py-3 text-center font-medium text-white shadow hover:bg-brand-600"
            >
              🎵 Listen to Bhajans
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-brand-700 px-8 py-3 text-center font-medium text-brand-700 hover:bg-brand-50"
            >
              About Amma
            </Link>
          </div>
        </div>

        {/* Image side */}
        <Image
          src="/SaiBaba2.png"
          alt="Sri Sai Baba"
          width={500}
          height={500}
          priority
          className="mx-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
