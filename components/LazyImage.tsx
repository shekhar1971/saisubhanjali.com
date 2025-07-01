/* components/LazyImage.tsx
   Drop-in replacement for Next.js <Image>.
   – If you pass  priority  it stays eager-loaded.
   – Otherwise it defaults to  loading="lazy".

   Usage (new or edited files):
     import Image from '@/components/LazyImage';
*/
'use client';

import Image, { type ImageProps } from 'next/image';

export default function LazyImage(props: ImageProps) {
  return (
    <Image
      loading={props.priority ? 'eager' : props.loading ?? 'lazy'}
      {...props}
    />
  );
}
