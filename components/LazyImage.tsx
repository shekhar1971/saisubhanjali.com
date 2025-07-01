/* components/LazyImage.tsx
   Drop-in replacement for next/image – now with default lazy-loading.
   (Hero images that pass `priority` stay eager.)                        */

import React from 'react';
import LegacyImage from 'next/legacy/image';

type ImageProps = React.ComponentProps<typeof LegacyImage>;

export default function LazyImage(props: ImageProps) {
  return (
    <LegacyImage
      loading={props.priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
