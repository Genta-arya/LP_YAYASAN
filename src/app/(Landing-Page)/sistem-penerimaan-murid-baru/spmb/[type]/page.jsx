import { GetDetailSpmb } from "@/Services/Spmb.service";
import React from "react";
import Detail from "../../(components)/Detail";

export async function generateMetadata({ params }) {
  const { type } = params;

  try {
    const detail = await GetDetailSpmb(type);
    const data = detail.data;

    return {
      title: `SPMB - ${data.judul}`,
      description: data.judul || `Informasi SPMB untuk ${type}`,
      metadataBase: new URL("https://yayasan-aljihad.com"), // ganti sesuai domain asli
      openGraph: {
        title: `SPMB - ${data.judul}`,
        description: data.judul || `Informasi SPMB untuk ${type}`,
        url: `https://yayasan-aljihad.com/spmb/${type}`,
        type: "article",
        images: [
          {
            url: data.header || "https://yayasan-aljihad.com/default-og.jpg", // fallback OG image
            width: 1200,
            height: 630,
            alt: `SPMB - ${data.judul}`,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: "Oops, terjadi kesalahan",
      description: "Terjadi kesalahan saat mengambil data berita.",
    };
  }
}

// ✅ Page component
const Page = async ({ params }) => {
  const { type } = params;

  try {
    const detail = await GetDetailSpmb(type);
    const data = detail.data;

    return <Detail data={data} />;
  } catch (error) {
    console.error("Gagal render halaman detail:", error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! 😢</h1>
        <p className="text-lg text-gray-700">
          Terjadi kesalahan saat memuat informasi SPMB.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Silakan cek kembali URL atau coba beberapa saat lagi.
        </p>
      </div>
    );
  }
};

export default Page;
