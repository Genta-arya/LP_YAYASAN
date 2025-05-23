import { GetSpmb } from "@/Services/Spmb.service";
import { GetBerita } from "@/Services/Berita.services";

export default async function sitemap() {
  const baseUrl = "https://www.aljihadketapang.sch.id";

  // Spmb dynamic pages
  const spmbResult = await GetSpmb();
  const spmbUrls = spmbResult.data.map((item) => ({
    url: `${baseUrl}/spmb/${item.type}`,
    lastModified: item.updatedAt || new Date().toISOString(),
    changefreq: "daily",
    priority: 1.0,
  }));

  // Semua type berita yang tersedia
  const beritaTypes = ["berita", "informasi", "opini"]; // kamu bisa tambah sesuai type yang ada
  let beritaUrls = [];

  for (const type of beritaTypes) {
    const beritaResult = await GetBerita(type);

    const urls = beritaResult.data.map((item) => ({
      url: `${baseUrl}/informasi/${item.slug}`,
      lastModified: item.updatedAt || new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    }));

    beritaUrls = [...beritaUrls, ...urls];
  }

  // Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sistem-penerimaan-murid-baru`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/informasi`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
  ];

  return [...staticUrls, ...spmbUrls, ...beritaUrls];
}
