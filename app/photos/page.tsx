// app/photos/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Photos – Sai Subhanjali',
  description:
    'A photo gallery of Subbalakshmi Sattiraju, Sri Nageswara Rao, and family moments that inspired the Sai Subhanjali bhajans.',
};

export default function PhotosPage() {
  const photos = [
    { src: '/SubbaLakshmi_Sattiraju.png',               alt: 'Subbalakshmi Sattiraju holding Sai Subhanjali CDs' },
    { src: '/Shri_NageswaraRao_and_Smt_Subbalakshmi.jpg', alt: 'Sri Nageswara Rao and Smt Subbalakshmi together' },
    { src: '/SmtSubbalakshmi_International_Womans_Day_Award_inDelhi.jpg', alt: 'International Women’s Day award ceremony' },
    { src: '/Shri_Mohan_Krishna.jpg',                   alt: 'Sri Mohana Krishna – pillar of recording' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-brand-700">Photo Gallery</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map(({ src, alt }) => (
          <div key={src} className="overflow-hidden rounded-xl shadow-md">
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
