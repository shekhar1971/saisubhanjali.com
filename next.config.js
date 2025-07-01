/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ①  Security header (unchanged) */
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

  /* ②  Serve AVIF / WebP automatically (unchanged) */
  images: {
    formats: ["image/avif", "image/webp"]
  },

  /* ③  Alias *only at build time*  next/image  →  LazyImage wrapper */
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
