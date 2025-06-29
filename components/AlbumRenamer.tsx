'use client';

import { useEffect } from 'react';

/**
 * Convert every “CD1 … CD 6” (with or without spaces or NBSP) to
 * “Album 1 … Album 6” — and keep watching for new nodes.
 */
export default function AlbumRenamer() {
  useEffect(() => {
    const swap = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = walker.nextNode())) {
        if (n.nodeValue) {
          // match “CD” followed by any spaces / non-breaking spaces and 1-6
          n.nodeValue = n.nodeValue.replace(/CD[\u00A0\s]*([1-6])/g, 'Album $1');
        }
      }
    };

    // initial pass
    swap(document.body);

    // watch for future mutations (client-side routing, lazy components, etc.)
    const obs = new MutationObserver(muts => muts.forEach(m => swap(m.target)));
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });

    return () => obs.disconnect();
  }, []);

  return null; // renders nothing
}
