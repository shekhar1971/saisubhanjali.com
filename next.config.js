/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ── 1.  your existing security header ── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  },

  /* ── 2.  serve AVIF / WebP automatically (unchanged) ── */
  images: { formats: ['image/avif', 'image/webp'] },

  /* ── 3.  runtime alias: every import "next/image" → wrapper ── */
  webpack(config) {
    const path = require('path');
    config.resolve.alias['next/image'] = path.join(
      __dirname,
      'components',
      'LazyImage.tsx'
    );
    return config;
  }
};

module.exports = nextConfig;
