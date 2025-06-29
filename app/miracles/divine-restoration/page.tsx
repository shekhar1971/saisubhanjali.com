/* app/miracles/divine-restoration/page.tsx */
import Image from 'next/image';
import Link from 'next/link';

/* ───────── SEO metadata ───────── */
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
        url: '/SaiBaba1.png',
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

/* ───────── Page ───────── */
export default function DivineRestoration() {
  return (
    <article className="mx-auto max-w-3xl rounded-xl bg-white/90 p-8 shadow-lg">
      {/* heading */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-brand-700">
          Divine Restoration: Sai Baba’s Grace
        </h1>
        <p className="text-sm text-gray-600">
          A true incident from the life of&nbsp;
          <strong>Smt.&nbsp;Subbalakshmi&nbsp;Sattiraju</strong>
        </p>
      </header>

      {/* hero image (smaller & centred) */}
      <div className="my-6 flex justify-center">
        <Image
          src="/SaiBaba4.png"
          alt="Shirdi Sai Baba blessing devotees"
          width={420}
          height={280}
          className="rounded-xl shadow"
          priority
        />
      </div>

      {/* story */}
      <section className="prose prose-lg max-w-none prose-headings:text-brand-700">
        <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-extrabold first-letter:text-brand-700">
          Throughout her lifetime, Smt. Subbalakshmi Sattiraju experienced many
          profound miracles that deepened her unwavering devotion to Shri Sai
          Baba. One remarkable incident—often recounted in our family—shows
          Baba’s loving intervention in the most practical of ways.
        </p>

        <h2>The stolen notebook</h2>
        <p>
          One afternoon in Delhi, Amma was travelling with a friend in a
          slow-moving cycle rickshaw. Tucked safely in her handbag was a
          precious notebook: <strong>over&nbsp;60 bhajans</strong>—lyrics and
          melodies she received directly through Sai Baba’s divine inspiration,
          and <em>never</em> copied anywhere else.
        </p>
        <p>
          Suddenly, two thieves on a motorcycle snatched the handbag and sped
          away through the crowded lane. The loss was devastating—not for
          material belongings, but for the irreplaceable bhajans entrusted to
          her by Baba.
        </p>

        {/* pull-quote */}
        <div className="my-8 rounded-lg border-l-4 border-brand-700 bg-brand-50/50 p-4 italic">
          “Baba, all these songs are yours. If you wish them to live, please
          bring them back.”
        </div>

        <h2>The miraculous return</h2>
        <p>
          That very evening, around&nbsp;7 PM, a Delhi Police officer arrived at
          her door with the handbag—<em>completely untouched</em>. No police
          complaint had ever been filed. The officer explained that he found a
          doctor’s prescription inside, visited the nursing home listed on it,
          and there obtained Amma’s address.
        </p>
        <p>
          Such an outcome, especially in bustling Delhi, was nothing short of a
          miracle—Sai Baba safeguarding the devotional treasures He had
          bestowed.
        </p>

        <h2>Lasting significance</h2>
        <p>
          This incident remains an unforgettable testament to Baba’s continual
          protection and a reminder that sincere devotion is always recognised
          by the divine.
        </p>
      </section>

      {/* back-link */}
      <footer className="mt-10 text-center">
        <Link
          href="/miracles"
          className="inline-block rounded bg-brand-700 px-5 py-2 font-semibold text-white shadow hover:bg-brand-800"
        >
          ←&nbsp;All Miracles
        </Link>
      </footer>
    </article>
  );
}
