import React, { Suspense } from "react";
import InformasiPage from "./InformasiPage";
import Script from "next/script"; // ini dari Next.js

export const metadata = {
  title: "Yayasan Al-Jihad Ketapang - Publikasi",
  description:
    "Dapatkan informasi terbaru seputar kegiatan, pengumuman, dan berita dari Yayasan Al-Jihad Ketapang.",
  keywords: [
    "Yayasan Al-Jihad",
    "Informasi Sekolah",
    "Berita Al-Jihad",
    "Ketapang",
    "SMP Islam Ketapang",
  ],
  authors: [{ name: "Yayasan Al-Jihad Ketapang" }],
  openGraph: {
    title: "Yayasan Al-Jihad Ketapang - Publikasi",
    description: "Informasi resmi dan terbaru dari Yayasan Al-Jihad Ketapang.",
    url: "https://www.aljihadketapang.sch.id/publikasi",
    siteName: "Yayasan Al-Jihad Ketapang",
    images: [
      {
        url: "https://www.aljihadketapang.sch.id/informasi.png",
        width: 1200,
        height: 630,
        alt: "Yayasan Al-Jihad Ketapang",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yayasan Al-Jihad Ketapang - Publikasi",
    description: "Informasi resmi dan terbaru dari Yayasan Al-Jihad Ketapang.",
    images: ["https://www.aljihadketapang.sch.id/informasi.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://www.aljihadketapang.sch.id"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Publikasi",
      "item": "https://www.aljihadketapang.sch.id/publikasi"
    }
  ]
};

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <InformasiPage />
      </Suspense>
    </>
  );
};

export default Page;
export { breadcrumbJsonLd }; // Ekspor jika perlu digunakan di tempat lain