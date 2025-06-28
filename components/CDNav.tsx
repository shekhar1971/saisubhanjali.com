// components/CDNav.tsx
'use client';

/**
 * CDNav previously rendered the horizontal “🎵 CD 1 … ▶ Play All” bar.
 * We now return `null` so nothing is drawn, while keeping the
 * component in place to avoid build-time import errors.
 */
export default function CDNav() {
  return null;
}
