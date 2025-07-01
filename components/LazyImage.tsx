/* components/LazyImage.tsx
   Drop-in replacement for next/image that defaults to loading="lazy"
   (unless you already pass priority).

   Because we’ll alias  next/image → this file  in webpack + TS,
   existing imports keep working unchanged.                             */

import LegacyImage, { ImageProps } from 'next/legacy/image';   
export * from 'next/legacy/image';                            

export default function LazyImage(props: ImageProps) {
  return (
    <LegacyImage
      /* hero images that already use `priority` stay eager-loaded */
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
