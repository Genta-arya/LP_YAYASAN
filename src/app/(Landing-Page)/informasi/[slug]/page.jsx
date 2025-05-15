import React from "react";
import ContentDetail from "./(components)/ContentDetail";

import { getDetailBerita } from "@/Services/Berita.services";
import ErrorMessage from "@/components/Error";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// 🧠 Dynamic Metadata
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const response = await getDetailBerita(slug);
    const data = response?.data;

    if (!data) {
      return {
        title: "Informasi tidak ditemukan",
        description: "Berita atau opini yang kamu cari tidak ada.",
      };
    }

    const plainContent = data.content.replace(/<[^>]+>/g, "").slice(0, 160);

    return {
      title: `${data.title} - Yayasan Al-Jihad`,
      description: plainContent,
      openGraph: {
        title: data.title,
        description: plainContent,
        images: [
          {
            url: data.thumbnail,
            width: 800,
            height: 600,
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

const Page = async ({ params }) => {
  const { slug } = params;

  let data = null;

  try {
    const response = await getDetailBerita(slug);
    console.log(response);

    data = response.data;
  } catch (error) {
    console.error("Error fetching berita:", error);

    // 🛑 Kalau server mati (tidak ada response)
    if (error.message=== "Request failed with status code 404") {
      return <ErrorMessage style="mt-64" />;
    } else {
      console.log(error.message);
      if (error.message === "Request failed with status code 400") {
        return notFound();
      }
    }

    
  }

  // ✅ Render halaman kalau semua aman
  return (
    <div className="relative">
      <div className="mt-32 container mx-auto px-3 xl:px-8">
        <ContentDetail data={data} />
      </div>
    </div>
  );
};

export default Page;
