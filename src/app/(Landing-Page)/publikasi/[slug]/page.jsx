import React from "react";
import ContentDetail from "./(components)/ContentDetail";
import { getDetailBerita } from "@/Services/Berita.services";
import ErrorMessage from "@/components/Error";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Script from "next/script"; // 👈 Tambahkan ini
import Breadcumb from "./(components)/Breadcumb";

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
        "Yayasan Islamiyyah Al Jihad",
      ],
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
    data = response.data;
  } catch (error) {
    console.error("Error fetching berita:", error);

    if (error.message === "Request failed with status code 404") {
      return <ErrorMessage style="mt-64" />;
    } else {
      if (error.message === "Request failed with status code 400") {
        return notFound();
      }
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://aljihadketapang.sch.id"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Publikasi",
        "item": "https://aljihadketapang.sch.id/publikasi"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data?.title || "Detail Informasi",
        "item": `https://aljihadketapang.sch.id/publikasi/${slug}`
      }
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="relative lg:mt-46 mt-32 md:mt-36">
        {/* <Breadcumb data={data} /> */}
        <div className="mt-3 lg:mt-7 lg:container mx-auto xl:px-8">
          <ContentDetail data={data} />
        </div>
      </div>
    </>
  );
};

export default Page;
