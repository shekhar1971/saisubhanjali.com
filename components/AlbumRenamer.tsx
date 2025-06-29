/* components/AlbumRenamer.tsx */
'use client';

import { useEffect } from 'react';

/** Swap every visible “CD 1…6” string for “Album 1…6” — and keep watching. */
export default function AlbumRenamer() {
  useEffect(() => {
    const cdToAlbum = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = walker.nextNode())) {
        if (n.nodeValue) {
          n.nodeValue = n.nodeValue.replace(/CD\s([1-6])/g, 'Album $1');
        }
      }
    };

    // initial pass (after first paint)
    cdToAlbum(document.body);

    // keep an eye on future DOM changes (e.g. route transitions)
    const observer = new MutationObserver(muts =>
      muts.forEach(m => cdToAlbum(m.target))
    );
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return null; // renders nothing
}
