"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import useGlobalStore from "@/lib/Zustand";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

const Slider = ({ datas }) => {
  const pathname = usePathname();
  const { data, fetchData } = useGlobalStore();
  const [shuffledTexts, setShuffledTexts] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isBeranda = pathname === "/";
  useEffect(() => {
    if (!isBeranda) {
      fetchData();
    }
  }, [isBeranda]);

  const sliderData = isBeranda ? datas : data;
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // inisialisasi pertama

    // Auto-slide tiap 5 detik
    const autoSlide = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Balik ke awal kalau udah mentok
      }
    }, 15000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoSlide);
    };
  }, [emblaApi]);

  useEffect(() => {
    const shuffled = [...staticTexts];
    const lastText = shuffled.splice(2, 1)[0];
    const randomTexts = shuffled.sort(() => Math.random() - 0.5);
    setShuffledTexts([...randomTexts, lastText]);
  }, []);

  const images = sliderData?.sliders?.[0]?.images || [];

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

  if (!sliderData) {
    return (
      <div className="relative w-full overflow-hidden 2xl:h-[840px] xl:h-[800px] md:h-[800px] h-[700px] bg-gray-200 animate-pulse">
        <div className="w-full h-full flex items-center justify-center"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden  lg:mt-24 md:mt-36 mt-26">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_100%]   relative"
              key={slide.id}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1920}
                height={840}
                priority={index === 0}
                className="w-full h-full object-cover transition-all duration-300"
              />

              <div className="absolute inset-0 top-0 md:top-0 lg:-top-80 bg-black/30 flex flex-col justify-center items-center text-center px-4"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute lg:bottom-10 bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`rounded-full cursor-pointer transition-all duration-300 ${
              selectedIndex === index
                ? "bg-yellow-500  opacity-100  w-12 lg:h-3 h-2 "
                : "bg-white w-3 lg:h-3 h-2"
            } hover:opacity-80`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
