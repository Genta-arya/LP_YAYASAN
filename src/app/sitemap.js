import { GetSpmb } from "@/Services/Spmb.service";
import { GetBerita } from "@/Services/Berita.services";

export default async function sitemap() {
  const baseUrl = "https://www.aljihadketapang.sch.id";

  // ----------------------
  // Dynamic SPMB Pages
  // ----------------------
  const spmbResult = await GetSpmb();
  const spmbUrls = spmbResult.data.map((item) => ({
    url: `${baseUrl}/spmb/${item.type}`,
    lastModified: item.updatedAt || new Date().toISOString(),
    changefreq: "daily",
    priority: 1.0,
  }));

  // ----------------------
  // Dynamic Berita Pages
  // ----------------------
  const beritaTypes = ["berita", "informasi", "opini"];
  let beritaUrls = [];

  for (const type of beritaTypes) {
    const beritaResult = await GetBerita(type);

    const urls = beritaResult.data.map((item) => ({
      url: `${baseUrl}/publikasi/${item.slug}`,
      lastModified: item.updatedAt || new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    }));

    beritaUrls = [...beritaUrls, ...urls];
  }

  // ----------------------
  // Static Pages + Tab Query Variants
  // ----------------------
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
    // Tambahkan query ?q=informasi, berita, opini
    ...beritaTypes.map((tab) => ({
      url: `${baseUrl}/publikasi?q=${tab}`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    })),
  ];

  return [...staticUrls, ...spmbUrls, ...beritaUrls];
}
