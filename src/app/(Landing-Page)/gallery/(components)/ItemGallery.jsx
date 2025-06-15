"use client";

import { GetGallery } from "@/Services/Gallery.services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ItemGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await GetGallery();
      if (response && response.data) {
        const sorted = response.data.sort((a, b) => a.order - b.order);
        setImages(sorted);
      }
    } catch (error) {
      console.error("Gagal fetch galeri:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const renderSkeletons = (count = 6) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="w-full h-48 bg-gray-200 rounded-xl animate-pulse"
      />
    ));

  return (
    <section className="px-4 sm:px-8 py-10">
      <div className="flex items-center justify-center text-green-800 mb-12">
        <div className="flex-grow border-t-4 border-gray-400"></div>
        <span className="lg:px-4 px-1 font-extrabold text-base lg:text-3xl text-green-800">
          Gallery Foto
        </span>
        <div className="flex-grow border-t-4 border-gray-400"></div>
      </div>

      {images.length === 0 && !isLoading && (
        <p className="text-center text-gray-500">Belum ada gambar di galeri.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {isLoading
          ? renderSkeletons(8)
          : images.map((img, index) => (
              <motion.div
                key={img.id}
                className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Image
                  width={1000}
                  height={1000}
                  src={img.url_image}
                  alt={`Galeri ${img.order}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={images.map((img, idx) => ({ src: img.url_image, index: idx }))}
        plugins={[Thumbnails, Zoom, Download]}
        thumbnails={{ width: 100, height: 100 }}
        carousel={{ finite: true }}
        render={{
          thumbnail: ({ slide, active }) => (
            <img
              src={slide.src}
              style={{
                width: active ? "110px" : "90px",
                height: active ? "110px" : "90px",
                objectFit: "cover",
                borderRadius: "8px",
                transform: active ? "scale(1.1)" : "scale(1)",
                transition:
                  "transform 0.3s ease, width 0.3s ease, height 0.3s ease",
                border: active ? "3px solid #22c55e" : "2px solid transparent",
              }}
              alt={`thumb-${slide.index}`}
            />
          ),
        }}
      />
    </section>
  );
};

export default ItemGallery;
