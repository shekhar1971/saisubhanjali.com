/* components/LazyImage.tsx
   Drop-in replacement for next/image that defaults to loading="lazy"
   (heroes with `priority` stay eager). */

import NextImage from "next/legacy/image";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextImage>;

export default function LazyImage(props: Props) {
  return (
    <NextImage
      /* keep hero images eager, everything else lazy */
      loading={props.priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
