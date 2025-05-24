import Slider from "@/components/Slider";
import React from "react";
import Spmb from "./(components)/Spmb";
import LokasiMap from "../(Beranda)/Maps";
import useGlobalStore from "@/lib/Zustand";
import Head from "next/head"; // ⬅️ Tambahkan ini!

export const metadata = {
  title: "SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad Ketapang",
   keywords: [
    "Yayasan Al Jihad Ketapang",
    "SMP Islam Ketapang",
    "Yayasan ketapang",
    "aljihad ketapang",
    "aljihad",
    "al jihad",
    "Sekolah unggulan Kalimantan Barat",
    "Pendidikan Islam Ketapang",
    "Sekolah berbasis akhlak",
    "Sekolah berprestasi Ketapang",
    "Sekolah terbaik di Ketapang",
    "Yayasan Islamiyyah Al Jihad"
  ],
  description:
    "Daftar sekarang untuk bergabung bersama Al-Jihad Islamic Center. Informasi lengkap tentang sistem penerimaan murid baru (SPMB) tersedia di sini.",
  metadataBase: new URL("https://www.aljihadketapang.sch.id/"),
  openGraph: {
    title: "SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad Ketapang",
    description:
      "Temukan informasi terbaru tentang pendaftaran siswa baru di Yayasan Al-Jihad. Klik untuk lihat detail setiap jenjang.",
    url: "https://www.aljihadketapang.sch.id/sistem-penerimaan-murid-baru",
    type: "website",
    images: [
      {
        url: "https://www.aljihadketapang.sch.id/LOGO-SMP.jpg",
        width: 1200,
        height: 630,
        alt: "SPMB Yayasan Al-Jihad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPMB - Yayasan Al-Jihad Ketapang",
    description: "Informasi lengkap penerimaan murid baru.",
    images: ["https://www.aljihadketapang.sch.id/LOGO-SMP.jpg"],
  },
};

const Page = () => {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://www.aljihadketapang.sch.id",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SPMB",
        "item": "https://www.aljihadketapang.sch.id/sistem-penerimaan-murid-baru",
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad Ketapang",
    "url": "https://www.aljihadketapang.sch.id/sistem-penerimaan-murid-baru",
    "description": "Informasi lengkap penerimaan murid baru di Yayasan Al-Jihad Ketapang.",
  };

  return (
    <>
      <Head>
        <title>SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd),
          }}
        />
      </Head>

      <Slider />
      <div className="">
        <Spmb />
      </div>
    </>
  );
};

export default Page;
