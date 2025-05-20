"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import useGlobalStore from "@/lib/Zustand";

const staticTexts = [
  {
    title: "Yayasan Islamiyyah Al Jihad Ketapang",
    description:
      "Lembaga pendidikan yang berkomitmen membentuk generasi unggul, berprestasi, dan berakhlak mulia.",
  },
  {
    title: "Fasilitas Lengkap & Pengajar Profesional",
    description:
      "Dengan lingkungan belajar yang nyaman dan guru-guru berpengalaman, kami siap mengantar siswa menuju masa depan cerah.",
  },
  {
    title: "Bersama Mewujudkan Generasi Emas",
    description:
      "Bergabunglah bersama kami dan jadilah bagian dari perubahan menuju generasi Islam yang cerdas dan berdaya saing.",
  },
];

const Slider = () => {
  const { data, fetchData } = useGlobalStore();
  const [shuffledTexts, setShuffledTexts] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // init langsung

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const shuffled = [...staticTexts];
    const lastText = shuffled.splice(2, 1)[0];
    const randomTexts = shuffled.sort(() => Math.random() - 0.5);
    setShuffledTexts([...randomTexts, lastText]);
  }, []);

  const images = data?.sliders?.[0]?.images || [];

  const slides = images.map((item, index) => ({
    id: item.id,
    title:
      shuffledTexts[index % shuffledTexts.length]?.title ||
      `Slide ${index + 1}`,
    description:
      shuffledTexts[index % shuffledTexts.length]?.description ||
      `Deskripsi untuk slide ${index + 1}`,
    image: item.url || "",
  }));

  if (!data) {
    return (
      <div className="relative w-full overflow-hidden 2xl:h-[840px] xl:h-[800px] md:h-[800px] h-[500px] bg-gray-200 animate-pulse">
        <div className="w-full h-full flex items-center justify-center">
        
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden  2xl:h-[840px] xl:h-[800px]   lg:mt-0 md:mt-0 mt-32">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_100%] relative"
              key={slide.id}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 top-0 md:top-32 lg:-top-80 bg-black/60 flex flex-col justify-center items-center text-center px-4">
                {/* <h2 className="mb-8 max-w-3xl text-white 2xl:text-5xl md:text-4xl font-extrabold">
                  {slide.title}
                </h2>
                <p className="2xl:max-w-3xl lg:max-w-2xl md:max-w-xl mb-6 text-white 2xl:text-2xl md:text-xl">
                  {slide.description}
                </p> */}
{/* 
                {index === slides.length - 1 && (
                  <Link
                    href="https://al-jihad.center.mgentaarya.my.id/sistem-penerimaan-murid-baru"
                    className="font-semibold rounded-lg bg-white text-black cursor-pointer transition px-8 py-3 hover:bg-white/80"
                  >
                    Daftar Sekarang
                  </Link>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Dots */}
      <div className="absolute md:bottom-5 bottom-3 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-yellow-500  opacity-100  w-12 h-3 "
                : "bg-white w-3 h-3 "
            } hover:opacity-80`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
