/* components/LazyImage.tsx
   Drop-in replacement for next/image that defaults to loading="lazy"
   (unless you pass  priority  ➜  hero / above-the-fold stays eager).

   Use in any file via:
     import Image from "@/components/LazyImage";
*/

import NextImage, { type ImageProps } from "next/image";

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      loading={props.priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
