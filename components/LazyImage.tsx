/* components/LazyImage.tsx
   Wrapper around next/image that defaults to loading="lazy"
   (unless you pass  priority  for hero images). */

import NextImage, { type ImageProps } from 'next/image';

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      /* hero images stay eager-loaded */
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
