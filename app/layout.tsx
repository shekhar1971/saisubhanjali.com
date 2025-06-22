export const metadata = {
  title: "Sai Subhanjali | Devotional Songs of Subbalakshmi Sattiraju",
  description:
    "Listen to rare devotional bhajans composed by Late Smt. Subbalakshmi Sattiraju in honor of Shri Shirdi Sai Baba. Explore and download all 6 Sai Subhanjali CDs.",
  keywords: [
    "Sai Subhanjali",
    "Subbalakshmi Sattiraju",
    "Sai Baba Bhajans",
    "Shirdi Sai Bhakti Songs",
    "Telugu devotional songs",
    "spiritual music",
    "Sai Baba CD",
    "Indian devotional music",
    "Sai bhajans download",
  ],
  authors: [{ name: "Shekhar Sattiraju", url: "https://www.saisubhanjali.com" }],
  creator: "Shekhar Sattiraju",
  openGraph: {
    title: "Sai Subhanjali | Bhajans Composed by Subbalakshmi Sattiraju",
    description:
      "Immerse yourself in the divine bhakti of Sai Baba through heartfelt songs composed by Late Smt. Subbalakshmi Sattiraju. Free listening and downloads.",
    url: "https://www.saisubhanjali.com",
    siteName: "SaiSubhanjali.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.saisubhanjali.com/og-banner.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Sai Subhanjali Bhajans Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Subhanjali – Devotional Bhajans of Sai Baba",
    description:
      "A tribute to Late Smt. Subbalakshmi Sattiraju’s musical devotion to Shirdi Sai Baba. Stream or download free bhakti songs.",
    creator: "@saisubhanjali", // Optional if you register a Twitter account
    images: ["https://www.saisubhanjali.com/og-banner.jpg"],
  },
  metadataBase: new URL("https://www.saisubhanjali.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
