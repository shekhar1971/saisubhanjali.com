/** @type {import('next').NextConfig} */
const path = require('path');

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

  /* ③ Alias every  import Image from "next/image"  ➜  components/LazyImage  */
  webpack(config) {
    config.resolve.alias['next/image'] = path.resolve(
      __dirname,
      'components/LazyImage'          // ← no “.tsx” needed
    );
    return config;
  },
};

module.exports = nextConfig;
