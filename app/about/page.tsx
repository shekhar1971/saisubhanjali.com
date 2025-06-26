import Image from 'next/image';

export const metadata = {
  title: 'About – Sai Subhanjali | Bhajans of Subbalakshmi Sattiraju',
  description:
    'Learn about the devotional journey of Subbalakshmi Sattiraju and the creation of Sai Subhanjali – a heartfelt collection of Sai Baba bhajans.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16 space-y-6 text-gray-800">
      <Image
        src="/SubbaLakshmi_Sattiraju.png"
        alt="Subbalakshmi Sattiraju"
        width={800}
        height={500}
        className="mx-auto rounded-xl shadow-md mb-8"
      />

      <h1 className="text-4xl font-extrabold text-brand-700 mb-4 text-center">
        About Sai Subhanjali
      </h1>

      <p><strong>Om Sairam!</strong></p>

      <p>
        Sai Subhanjali is the result of love and devotion of Mrs. SubbaLakshmi Sattiraju (lovingly known as Subha Sattiraju) to Sri Shirdi Sai Baba and his teachings.
      </p>

      <p>
        Sai Subhanjali is a collection of bhajans on Sri Sai Baba written, composed, and sung by Mrs. Subbalakshmi Sattiraju. She has released six albums with 10 to 14 bhajans in each album. She has also written two books – one in Telugu and one in Hindi. These books give detailed insights on experience on this spiritual path.
      </p>

      <p>
        This journey started when Mrs. Subha Sattiraju decided to do <em>Parayanam</em> of Sai Satcharitra. Initially, she was not sure if she had the courage to go on this path. With Sri Sai Baba's blessings she came across the book – Sri Sai Leela Amritam and started reading it. She felt instant peace and joy while reading the book.
      </p>

      <p>
        This experience set the foundations of her following the path towards Sri Sai Baba and spirituality. Soon she had the Divine awakening to write, compose, and sing her own bhajans on Sai Baba. Inspiration, lyrics and music composition continue to come to her with divine blessings of Sri Sai Baba.
      </p>

      <p>
        Mrs. Subha Sattiraju passed away in September 2024. She was a trained musician and a home maker. Mrs. Late Subha Sattiraju & her late husband Late Nageswara Rao Sattiraju were born in small villages in Andhra Pradesh (Sidhantam & Kattunga Village, in West & East Godavari district). Mrs. Sattiraju has performed at various spiritual events for many years, throughout the city.
      </p>

      <p>
        Sai Subhanjali is a not‑for‑profit initiative with the sole purpose of promoting spirituality, peace, and joy. This initiative was made possible by encouragement and unflinching support of her husband Late Sri Nageswara Rao Sattiraju, a civil engineer, who spent 40+ years helping build dams in India. Many of the key water projects in India have his signature on them. He was always humble, a <em>Karma Yogi</em>, who gave a lot more to the world than we will ever know. We all miss him dearly.
      </p>

      <p>
        All music recordings were facilitated by her late son‑in‑law Sri Mohana Krishna (husband of Smt Lalita — second eldest among 5 siblings). Without Sri Mohan&apos;s encouragement, know‑how & support, this would not have been possible. We miss Sri Mohan immensely and see him smiling and blessing us as more & more devotees can now hear these soulful bhajans.
      </p>

      <p>
        This endeavour was possible only with divine blessings from Sri Sai Baba, selfless dedication from Late Sri Nageswara Rao & Subha Sattiraju, their late son‑in‑law Sri Mohana Krishna, their immediate/extended family along with numerous voluntary musicians & friends over the years.
      </p>

      <p>
        All expenses for recording and publishing these songs and books are borne completely by Mrs. Subha Sattiraju & her late husband Sri Nageswara Rao Sattiraju.
      </p>

      <p className="text-center font-semibold mt-10 text-brand-700">OM SAI RAM</p>
    </div>
  );
}
