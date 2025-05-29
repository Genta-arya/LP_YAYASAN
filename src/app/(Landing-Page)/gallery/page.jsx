import React from "react";
import ItemGallery from "./(components)/ItemGallery";
import LokasiMap from "../(Beranda)/Maps";

export const metadata = {
  title: "Galeri Kegiatan | Yayasan Islamiyyah Al Jihad Ketapang",
  description:
    "Lihat dokumentasi kegiatan Yayasan Islamiyyah Al Jihad Ketapang, termasuk pendidikan, dakwah, dan aktivitas sosial Islami.",
  openGraph: {
    title: "Galeri Kegiatan | Yayasan Islamiyyah Al Jihad Ketapang",
    description:
      "Dokumentasi berbagai kegiatan Islami yang dilakukan oleh Yayasan Al Jihad Ketapang sejak tahun 2017.",
    type: "website",
    url: "https://aljihadketapang.sch.id/gallery",
    images: [
      {
        url: "https://aljihadketapang.sch.id/LOGO-SMP.jpg", // Ganti ini ke path OG image yang valid
        width: 1200,
        height: 630,
        alt: "Galeri Kegiatan Yayasan Al Jihad Ketapang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri Kegiatan | Yayasan Islamiyyah Al Jihad Ketapang",
    description:
      "Kumpulan foto kegiatan pendidikan, dakwah, dan sosial dari Yayasan Islamiyyah Al Jihad Ketapang.",
    images: ["https://aljihadketapang.sch.id/LOGO-SMP.jpg"], 
  },
};

const page = () => {
  return (
    <div className="lg:mt-40 mt-28 md:mt-32 lg:px-4">
      <ItemGallery />
      <LokasiMap />
    </div>
  );
};

export default page;
