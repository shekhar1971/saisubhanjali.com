// app/photos/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Photos – Sai Subhanjali',
  description:
    'A gallery of cherished photographs of Subbalakshmi Sattiraju and her family who helped bring the Sai Subhanjali bhajans to life.',
};

type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export default function PhotosPage() {
  const photos: Photo[] = [
    {
      src: '/SubbaLakshmi_Sattiraju.png',
      alt: 'Subbalakshmi Sattiraju holding Sai Subhanjali CDs',
    },
    {
      src: '/Shri_NageswaraRao_and_Smt_Subbalakshmi.jpg',
      alt: 'Late Shri Nageswara Rao & Smt Subbalakshmi Sattiraju',
      caption: 'Late Shri Nageswara Rao & Subbalakshmi Sattiraju',
    },
    {
      src: '/SmtSubbalakshmi_International_Womans_Day_Award_inDelhi.jpg',
      alt: "Smt Subbalakshmi receiving Women's Day award in Delhi",
      caption:
        "Smt Subbalakshmi receiving an award on International Women's Day, Delhi – India",
    },
    {
      src: '/Shri_Mohan_Krishna.jpg',
      alt: 'Sri Mohana Krishna – pillar of recording',
      caption:
        'In loving memory of Sri Mohana Krishna, whose technical guidance made these recordings possible',
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-brand-700">
        Photo&nbsp;Gallery
      </h1>

      {/* --- RESPONSIVE GRID (auto rows on desktop) --- */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map(({ src, alt, caption }) => (
          <figure
            key={src}
            className="flex flex-col overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={src}
              alt={alt}
              width={900}
              height={700}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width:1024px) 50vw, 25vw"
              priority
            />
            {caption && (
              <figcaption className="mt-3 px-3 pb-4 text-center text-sm text-gray-700">
                {caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

