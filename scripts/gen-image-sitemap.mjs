/**
 * scripts/gen-image-sitemap.mjs
 * ---------------------------------
 * Scans /public for .png | .jpg | .webp and writes
 *   public/image-sitemap.xml
 * Called automatically in “postbuild”.
 */
import { readdirSync, writeFileSync } from 'node:fs';
import { join }                       from 'node:path';

const SITE   = 'https://www.saisubhanjali.com';
const PUBLIC = 'public';                     // adjust only if your images live elsewhere

function walk(dir = PUBLIC) {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap(d => d.isDirectory()
      ? walk(join(dir, d.name))
      : join(dir, d.name));
}

const images = walk().filter(f => /\.(png|jpe?g|webp)$/i.test(f));

const body = images.map(src => {
  const loc = `${SITE}/${src.replace(/^public[\\/]/, '').replace(/\\/g,'/')}`;
  return `<url><loc>${loc}</loc></url>`;
}).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

writeFileSync(join(PUBLIC, 'image-sitemap.xml'), xml);
console.log(`✔  image-sitemap.xml generated with ${images.length} images`);
