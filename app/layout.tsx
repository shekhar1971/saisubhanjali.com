import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaiSubhanjali - Bhajans by Smt. Subbalakshmi Sattiraju',
  description: 'Listen to and download devotional Sai Baba songs written, composed, and sung by Smt. Subbalakshmi Sattiraju.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
