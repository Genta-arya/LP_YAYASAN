"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import useGlobalStore from "@/lib/Zustand";
import { usePathname } from "next/navigation";

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
    <div className="relative w-full overflow-hidden 2xl:h-[1000px]     lg:mt-0 md:mt-0 mt-32">
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
              className="w-full h-full object-cover object-[50%_65%] md:object-[50%_60%] transition-all duration-300"

              />

              <div className="absolute inset-0 top-0 md:top-32 lg:-top-80 bg-black/60 flex flex-col justify-center items-center text-center px-4"></div>
            </div>
          ))}
        </div>
      </div>
{/* md:bottom-5 bottom-3 lg:bottom-10 */}
      {/* Custom Dots */}
      <div className="absolute lg:top-40 bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`rounded-full cursor-pointer transition-all duration-300 ${
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
