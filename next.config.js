/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ① security header – your original code */
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

  /* ② automatic AVIF / WebP – your original code */
  images: {
    formats: ['image/avif', 'image/webp']
  },

  /* ③ alias  next/image → LazyImage  at build time  */
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
