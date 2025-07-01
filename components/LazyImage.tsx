/* components/LazyImage.tsx
   Drop-in replacement for next/image
   – defaults to loading="lazy" unless you pass priority.      */

import LegacyImage from 'next/legacy/image';
import type { LegacyImageProps as ImageProps } from 'next/legacy/image';

export default function LazyImage(props: ImageProps) {
  return (
    <LegacyImage
      loading={props.priority ? 'eager' : 'lazy'} // hero stays eager
      {...props}
    />
  );
}
