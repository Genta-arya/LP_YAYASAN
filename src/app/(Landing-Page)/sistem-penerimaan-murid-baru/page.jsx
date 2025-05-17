import Slider from "@/components/Slider";
import React from "react";
import Spmb from "./(components)/Spmb";
import LokasiMap from "../(Beranda)/Maps";

// Metadata untuk SEO & OG
export const metadata = {
  title: "SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad",
  description:
    "Daftar sekarang untuk bergabung bersama Al-Jihad Islamic Center. Informasi lengkap tentang sistem penerimaan murid baru (SPMB) tersedia di sini.",
  metadataBase: new URL("https://al-jihad.center.mgentaarya.my.id"),
  openGraph: {
    title: "SPMB - Penerimaan Murid Baru | Yayasan Al-Jihad",
    description:
      "Temukan informasi terbaru tentang pendaftaran siswa baru di Yayasan Al-Jihad. Klik untuk lihat detail setiap jenjang.",
    url: "https://al-jihad.center.mgentaarya.my.id/sistem-penerimaan-murid-baru",
    type: "website",
    images: [
      {
        url: "https://al-jihad.center.mgentaarya.my.id/LOGO-SMP.jpg", // Ganti ke OG image resmi kalau udah ada
        width: 1200,
        height: 630,
        alt: "SPMB Yayasan Al-Jihad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPMB - Yayasan Al-Jihad",
    description: "Informasi lengkap penerimaan murid baru.",
    images: ["https://al-jihad.center.mgentaarya.my.id/LOGO-SMP.jpg"],
  },
};

const Page = () => {
  return (
    <div>
      <Slider />
      <Spmb />
      {/* Boleh aktifin kalau mau nampilin map juga */}
      {/* <LokasiMap /> */}
    </div>
  );
};

export default Page;
