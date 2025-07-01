/* components/LazyImage.tsx
   Drop-in replacement for next/image.  Defaults to loading="lazy"
   unless you pass  priority  (heroes stay eager). */

import NextImage, { type ImageProps } from "next/image";

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      loading={props.priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
