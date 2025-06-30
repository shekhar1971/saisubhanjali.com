// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ①  Strict-Transport-Security header
  async headers() {
    return [
      {
        source: '/(.*)',              // every route
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // ②  Optional: serve AVIF / WebP automatically
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
