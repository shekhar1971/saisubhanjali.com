/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ①  HSTS header (unchanged) */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  },

  /* ②  Serve AVIF / WebP (unchanged) */
  images: { formats: ["image/avif", "image/webp"] },

  /* ③  Tell **webpack** that next/image == your wrapper */
  webpack(config) {
    const path = require("path");
    config.resolve.alias["next/image"] = path.join(
      __dirname,
      "components",
      "LazyImage.tsx"
    );
    return config;
  }
};

module.exports = nextConfig;
