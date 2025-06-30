/** @type {import('next-sitemap').IConfig} */
export default {
  /* ———————————————————————————————————————————
     Core                                     */
  siteUrl            : 'https://www.saisubhanjali.com',
  generateRobotsTxt  : false,          // we now ship our own /public/robots.txt
  changefreq         : 'weekly',
  priority           : 0.7,
  sitemapSize        : 7000,           // split if you ever exceed 7 000 URLs
  outDir             : 'public',       // emit XML straight into /public

  /* ———————————————————————————————————————————
     Extra sitemaps                           */
  additionalSitemaps : [
    // main sitemap is written automatically as  /sitemap.xml
    'https://www.saisubhanjali.com/image-sitemap.xml',
  ],

  /* ———————————————————————————————————————————
     Minimal transform that adds every <img>
     in the page-props as <image:image>        */
  transform: async (config, url) => {
    // by default we return just <loc>; this injects images found in
    // the `images` array that you pass in pageProps (optional enhancement)
    return {
      loc      : url,
      changefreq: config.changefreq,
      priority : config.priority,
      images   : (config.page?.images ?? []).map(src => ({ loc: src })),
    };
  },
};
