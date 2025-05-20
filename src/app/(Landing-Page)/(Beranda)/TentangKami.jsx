"use client";
import React from "react";
import DOMPurify from "dompurify";
import Container from "@/components/Container";
import ScrollFadeIn from "@/components/ScrollAnimated";
import useGlobalStore from "@/lib/Zustand";

const TentangKami = () => {
  const { data } = useGlobalStore();
  const sambutan = data?.sambutan;

  if (!sambutan) return null;

  // Bersihkan HTML dan hilangkan watermark
  const cleanHTML = DOMPurify.sanitize(sambutan.konten, {
    FORBID_TAGS: ["script", "style"],
    FORBID_ATTR: ["style"], // Opsional, kalau mau lebih bersih
  });

  // Optional: hapus watermark dari Froala manual
  const cleanHTMLNoWatermark = cleanHTML.replace(
    /<p[^>]*>Powered by.*?<\/p>/gi,
    ""
  );

  return (
    <Container>
      <div className="py-16 bg-white">
        <ScrollFadeIn direction="left" amount={0.3}>
          <div className="flex flex-col md:flex-col items-start gap-10 md:gap-16 px-4 pb-24 w-full">
            <div className="flex justify-center w-full">
              <img
                src={sambutan.url_Image}
                alt=""
                className="lg:w-80 md:w-80 w-96 rounded-full shadow-xl border-4 border-green-700 p-1"
              />
            </div>

            <div className="flex-1 text-gray-700 leading-relaxed  prose max-w-none">
              <h2 className="text-green-800 font-extrabold text-xl lg:text-start md:text-start text-center">
                Yayasan Islamiyah
              </h2>
              <h2 className="text-green-800 font-extrabold text-xl lg:text-start md:text-start text-center mb-4">
                Al-Jihad Islamic Center Ketapang
              </h2>

              <div
                className="prose max-w-none text-justify "
                dangerouslySetInnerHTML={{ __html: cleanHTMLNoWatermark }}
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </Container>
  );
};

export default TentangKami;
