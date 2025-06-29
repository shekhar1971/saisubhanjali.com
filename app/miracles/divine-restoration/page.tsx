/* app/miracles/divine-restoration/page.tsx */
import Image from 'next/image';
import Link from 'next/link';

/* ---------- SEO metadata ---------- */
export const metadata = {
  title: 'Divine Restoration: Sai Baba’s Grace | Sai Subhanjali',
  description:
    'Read the true story of how Shirdi Sai Baba miraculously returned Smt. Subbalakshmi Sattiraju’s stolen notebook of 60+ divinely inspired bhajans.',
  openGraph: {
    title: 'Divine Restoration: Sai Baba’s Grace',
    description:
      'A miraculous incident demonstrating Sai Baba’s protection over Smt. Subbalakshmi Sattiraju’s cherished notebook of bhajans.',
    url: 'https://www.saisubhanjali.com/miracles/divine-restoration',
    siteName: 'Sai Subhanjali',
    images: [
      {
        url: '/SaiBaba1.png', // or a dedicated miracle thumbnail
        width: 1200,
        height: 630,
        alt: 'Sai Baba blessing Smt. Subbalakshmi Sattiraju',
      },
    ],
    type: 'article',
    locale: 'en_US',
  },
  keywords: [
    'Sai Baba miracle',
    'Subbalakshmi Sattiraju',
    'divine intervention',
    'stolen notebook returned',
    'Sai Baba bhajans story',
  ],
};

/* ---------- Page component ---------- */
export default function DivineRestoration() {
  return (
    <article className="mx-auto max-w-3xl space-y-8 rounded-xl bg-white/80 p-6 shadow-lg">
      <header className="text-center space-y-3">
        <h1 className="text-3xl font-extrabold text-brand-700">
          Divine Restoration: Sai Baba’s Grace
        </h1>
        <p className="text-sm text-gray-600">
          A true incident from the life of&nbsp;
          <strong>Smt. Subbalakshmi&nbsp;Sattiraju</strong>
        </p>
      </header>

      {/* Optional hero image */}
      <Image
        src="/SaiBaba4.png"
        alt="Shirdi Sai Baba blessing devotees"
        width={600}
        height={400}
        className="mx-auto rounded-xl shadow"
        priority
      />

      <section className="prose prose-lg max-w-none">
        <p>
          Throughout her lifetime, Smt. Subbalakshmi Sattiraju experienced many
          profound miracles that deepened her unwavering devotion to Shri Sai
          Baba. One remarkable incident—often recounted in our family—shows
          Baba’s loving intervention in the most practical of ways.
        </p>

        <h2>The Stolen Notebook</h2>
        <p>
          One afternoon in Delhi, Amma was travelling with a friend in a
          slow-moving cycle&nbsp;rickshaw. Tucked safely in her handbag was a
          precious notebook: <strong>over 60 bhajans</strong>—lyrics and
          melodies she received directly through Sai Baba’s divine inspiration
          and had never copied anywhere else.
        </p>
        <p>
          Suddenly, two thieves on a motorcycle snatched the handbag and sped
          away through the crowded lane. The loss was devastating—not for
          material belongings, but for the irreplaceable bhajans entrusted to
          her by Baba.
        </p>

        <h2>A Prayer of Surrender</h2>
        <p>
          Heartbroken, Amma returned home, knelt before Baba’s image, and
          prayed:
        </p>
        <blockquote>
          “Baba, all these songs are yours. If you wish them to live, please
          bring them back.”
        </blockquote>

        <h2>The Miraculous Return</h2>
        <p>
          That very evening, around 7 PM, a Delhi Police officer appeared at the
          door with the handbag—<em>untouched</em>. No complaint had been filed.
          The officer had found a doctor’s prescription inside, visited the
          nursing home shown on it, and there obtained Amma’s address.
        </p>
        <p>
          Such an outcome, especially in bustling Delhi, was nothing short of a
          miracle—Sai Baba safeguarding the devotional treasures He had
          bestowed.
        </p>

        <h2>Lasting Significance</h2>
        <p>
          This incident remains an unforgettable testament to Baba’s continual
          protection and a reminder that sincere devotion is always recognised
          by the divine.
        </p>
      </section>

      {/* Back-link to About or Miracles list */}
      <footer className="text-center">
        <Link
          href="/about"
          className="inline-block rounded bg-brand-700 px-4 py-2 font-semibold text-white hover:bg-brand-800"
        >
          ←&nbsp;Back to About
        </Link>
      </footer>
    </article>
  );
}
