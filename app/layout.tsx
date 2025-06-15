// app/layout.tsx (global layout + metadata)
// -------------------------
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaiSubhanjali – Bhajans of Smt. Subbalakshmi Sattiraju',
  description: 'Listen to devotional Sai Baba bhajans and explore Amma\'s legacy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
