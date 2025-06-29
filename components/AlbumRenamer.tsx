'use client';

import { useEffect } from 'react';

export default function AlbumRenamer() {
  useEffect(() => {
    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.nodeValue = node.nodeValue?.replace(/CD\s([1-6])/g, 'Album $1') ?? '';
      } else {
        node.childNodes.forEach(walk);
      }
    };
    walk(document.body);
  }, []);

  return null;
}
