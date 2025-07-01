/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ① Strict-Transport-Security header (your existing code) */
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

  /* ② Serve AVIF / WebP automatically (your existing code) */
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  /* ③ NEW — alias `next/image` → our LazyImage wrapper */
  webpack(config) {
    const path = require('path');
    config.resolve.alias['next/image'] = path.resolve(
      __dirname,
      'components/LazyImage.tsx'
    );
    return config;
  },
};

module.exports = nextConfig;
