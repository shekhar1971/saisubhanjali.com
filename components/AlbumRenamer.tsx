'use client';

import { useEffect } from 'react';

/**
 * Walks the DOM once, finds literal text “CD n” (1-6) inside
 * links / headings / buttons, and swaps it to “Album n”.
 * Runs only on the client, does not mutate React state,
 * so it cannot break existing component logic.
 */
export default function AlbumRenamer() {
  useEffect(() => {
    const walk = (node: Node) => {
      // text node?
      if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = node.nodeValue?.replace(/CD\s([1-6])/g, 'Album $1') ?? '';
      } else {
        node.childNodes.forEach(walk);
      }
    };
    walk(document.body);
  }, []);

  return null; // renders nothing
}
