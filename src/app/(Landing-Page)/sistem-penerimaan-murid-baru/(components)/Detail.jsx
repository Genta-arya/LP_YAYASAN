"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LokasiMap from "../../(Beranda)/Maps";
import Download from "yet-another-react-lightbox/plugins/download";
const Detail = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  console.log(data);

  const images =
    data.images
      ?.filter((img) => img.url)
      .map((img) => ({
        src: img.url,
        width: img.width || 1200,
        height: img.height || 800,
      })) || [];

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="text-green-900 lg:mt-28 md:mt-32 mt-32 bg-gray-100">
      {data.header && (
        <div className=" overflow-hidden mb-8">
          <img
            src={data.header}
            alt="Header SPMB"
            className="w-full h-auto object-cover transition-all duration-300"
          />
        </div>
      )}

      <div className="bg-gray-100 rounded-2xl p-2 lg:p-6 md:p-6 max-w-screen-lg mx-auto">
        <p className="lg:text-3xl md:text-3xl text-green-800 font-bold leading-relaxed mb-6 text-center">
          Informasi Pendaftaran
        </p>

        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            {images.map((img, i) => {
              const isLast = i === images.length - 1;
              const isOdd = images.length % 2 !== 0;

              return (
                <div
                  key={i}
                  className={`group rounded-xl overflow-hidden shadow-md cursor-pointer ${
                    isOdd && isLast
                      ? "sm:col-span-2 lg:col-span-1 col-span-2"
                      : ""
                  }`}
                  onClick={() => handleImageClick(i)}
                >
                  <img
                    src={img.src}
                    alt={`Image ${i + 1}`}
                    className="w-full object-cover group-hover:opacity-90 transition-all duration-300"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      {data.konten && (
        <div
          className="prose lg:prose-lg max-w-none text-left md:ml-0 lg:px-8 px-4 ml-4 mb-8 mt-8 md:px-8 font-bold text-gray-500"
          dangerouslySetInnerHTML={{
            __html: (() => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(data.konten, "text/html");

              // Cari elemen yang mengandung "Powered by Froala Editor"
              [...doc.body.querySelectorAll("*")].forEach((el) => {
                if (
                  el.textContent
                    ?.toLowerCase()
                    .includes("powered by froala editor")
                ) {
                  el.remove(); // langsung hapus elemennya
                }
              });

              return doc.body.innerHTML;
            })(),
          }}
        />
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        carousel={{ finite: true }}
        plugins={[Zoom, Download, Thumbnails]} // tambahin ini
        animation={{ duration: 300 }}
        zoom={{
          maxZoomPixelRatio: 2,
          scrollToZoom: true,
        }}
      />

      <LokasiMap />
    </div>
  );
};

export default Detail;
