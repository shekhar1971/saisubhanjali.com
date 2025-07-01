/* components/LazyImage.tsx
   Wrapper around Next 13/14 <Image>.
   • If you set  priority  the image stays eager-loaded.
   • Otherwise it defaults to loading="lazy".

   No other props change, so `fill`, `sizes`, `placeholder` … all work.
*/
import NextImage, { ImageProps } from 'next/image';

export default function LazyImage(props: ImageProps) {
  return (
    <NextImage
      /* keep heroes eager, everything else lazy */
      loading={props.priority ? 'eager' : props.loading ?? 'lazy'}
      {...props}
    />
  );
}
