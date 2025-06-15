import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Amma – Sai Subhanjali',
};

export default function AboutPage() {
  return (
    <article className="prose prose-lg mx-auto">
      <h1 className="text-brand-700">Smt. Subbalakshmi Sattiraju (Subha Amma)</h1>

      <Image
        src="/Shri_NageswaraRao%20and%20Smt%20Subbalakshmi.jpg"
        alt="Amma with Sri Nageswara Rao Garu"
        width={800}
        height={550}
        className="rounded-xl shadow"
      />

      <p>
        <strong>Om Sairam!</strong> Subbalakshmi Sattiraju was a classically trained singer whose life
        revolved around devotion to <strong>Sri Shirdi Sai Baba</strong>. After experiencing deep
        peace while reading <em>Sai Leela Amritam</em>, she felt divinely inspired to write her own
        bhajans. Over three decades she released six albums, each filled with heartfelt melodies and
        lyrics that have touched devotees worldwide.
      </p>

      <h2>The Pillars Behind the Music</h2>

      <ul>
        <li>
          <strong>Sri Nageswara Rao Garu</strong> – husband, civil-engineer, and Amma’s steadfast
          supporter.
        </li>
        <li>
          <strong>Sri Mohana Krishna</strong> – son-in-law and recording engineer whose guidance
          brought the bhajans to life.
        </li>
        <li>
          A circle of selfless musicians and friends who volunteered their time and talent.
        </li>
      </ul>

      <Image
        src="/Smt%20Subbalakshi%20and%20Shri%20Nageswara%20Rao%20Parents.png"
        alt="Family roots in Andhra Pradesh"
        width={800}
        height={350}
        className="rounded-xl shadow-md"
      />

      <p>
        Amma’s parents and in-laws instilled the values of <em>shraddha</em> (faith) and
        <em> saburi</em> (patience) that guided her spiritual journey.
      </p>

      <p className="italic text-gray-600">
        “May every bhajan kindle devotion in your heart and bring Sai’s grace to your home.” —
        Subbalakshmi Sattiraju
      </p>

      <Link href="/" className="text-brand-600 no-underline hover:underline">
        ← Back to Home
      </Link>
    </article>
  );
}
