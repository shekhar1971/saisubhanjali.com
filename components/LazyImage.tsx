/* components/LazyImage.tsx
   Wrapper around next/image that defaults to loading="lazy"
   (unless you pass  priority  for hero / above-the-fold images).

   Use it only where you want lazy-by-default images:

     import Image from '@/components/LazyImage';
*/

import NextImage, { type ImageProps } from "next/image";

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      /* hero images that already use `priority` stay eager-loaded */
      loading={props.priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
