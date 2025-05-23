import React from "react";
import Head from "next/head"; // <- Penting!
import Tabs from "./(components)/Tabs";

export const metadata = {
  title: "Yayasan Al-Jihad - Informasi",
};

const page = () => {
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
        "name": "Informasi",
        "item": "https://www.aljihadketapang.sch.id/informasi"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Yayasan Al-Jihad - Informasi</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>

      <div className="mt-36 px-3 xl:px-8">
        <Tabs />
      </div>
    </>
  );
};

export default page;
