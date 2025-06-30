/* components/LazyImage.tsx
   Wrapper around next/image that defaults to `loading="lazy"`
   — EXCEPT when you already pass  priority   (hero / above-the-fold).

   Usage – just import it instead of Next.js’ Image:

     import Image from '@/components/LazyImage';

   No other props change – you can pass width/height/alt/className … exactly
   like before.                                                       */

import NextImage, { ImageProps } from 'next/image';

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      /* if <Image priority /> is set => keep eager load, else lazy */
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
