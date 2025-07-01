/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ①  Security header (unchanged) */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  /* ②  Serve AVIF / WebP automatically (unchanged) */
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  /* ③  ⬅︎ NO alias for `next/image` here any more – prevents the import loop */
};

module.exports = nextConfig;
