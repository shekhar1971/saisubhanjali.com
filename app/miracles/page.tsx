/* app/miracles/page.tsx
   — automatic jump to the first miracle story — */
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Miracles | Sai Subhanjali',
  description:
    'Faith-affirming incidents experienced by Smt. Subbalakshmi Sattiraju through the grace of Shirdi Sai Baba.',
};

export default function MiraclesHome() {
  // ⬇️ send visitor straight to the main story
  redirect('/miracles/divine-restoration');
}
