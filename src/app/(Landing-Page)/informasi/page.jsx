import React, { Suspense } from "react";
import InformasiPage from "./InformasiPage";


export const metadata = {
  title: "Yayasan Al-Jihad - Informasi",
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
    title: "Yayasan Al-Jihad - Informasi",
    description:
      "Informasi resmi dan terbaru dari Yayasan Al-Jihad Ketapang.",
    url: "https://www.aljihadketapang.sch.id/informasi",
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
    title: "Yayasan Al-Jihad - Informasi",
    description:
      "Informasi resmi dan terbaru dari Yayasan Al-Jihad Ketapang.",
    images: ["https://www.aljihadketapang.sch.id/informasi.png"],
  },
};

const Page = () => {
  return (
   
      <InformasiPage />
  
  );
}

export default Page
