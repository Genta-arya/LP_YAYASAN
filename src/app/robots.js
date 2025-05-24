export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // semua halaman boleh di-crawl
    },
    sitemap: 'https://www.aljihadketapang.sch.id/sitemap.xml',
  };
}
