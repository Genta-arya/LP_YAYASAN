"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pembatas from "@/components/Pembatas";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRight, ArrowRightCircle } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollAnimated";
import SpotlightCard from "@/app/Components/SpotlightCard/SpotlightCard";

const units = [
  {
    title: "Paud Al-Jihad",
    description:
      "Membentuk karakter anak sejak dini dengan pendidikan Islami yang kreatif, penuh kasih, dan menyenangkan.",
    image: "/paud.jpg",
  },
  {
    title: "Pondok Pesantren Al-Jihad",
    description:
      "Menghafal dan memahami Al-Qur'an dengan metode interaktif, mencetak santri berakhlak mulia & berwawasan luas.",
    image: "/pondok.jpg",
  },
  {
    title: "Taman Pendidikan Al-Qur'an Al-Jihad",
    description:
      "Tempat terbaik untuk belajar membaca, menulis, dan mencintai Al-Qur'an dengan pendekatan yang ramah anak.",
    image: "/tqp.jpg",
  },
  {
    title: "Madrasah Diniyah Takmiliyah Al-Jihad",
    description:
      "Mendalami ilmu agama dan memperkuat pemahaman keislaman melalui pembelajaran terstruktur & menyenangkan.",
    image: "/mdt.jpg",
  },
  {
    title: "SMP Al-Jihad",
    description:
      "Mengasah potensi akademik & spiritual siswa, membentuk generasi berprestasi yang berlandaskan nilai-nilai Islami.",
    image: "/smp.jpg",
  },
  {
    title: "SMA Al-Jihad",
    description:
      "Mempersiapkan generasi Qurani yang unggul, siap melanjutkan ke jenjang perguruan tinggi atau terjun ke dunia kerja dengan percaya diri.",
    image: "/LOGO-SMA.jpg",
  },
];
const UnitPendidikan = () => {
  const [api, setApi] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16 bg-gray-100">
      <ScrollFadeIn direction="right" amount={0.3}>
        <div className=" lg:container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Unit Pendidikan
          </h2>
          <Pembatas />
          <p className="mb-10 max-w-xl mx-auto text-gray-600">
            Yayasan Islamiyyah Al Jihad Ketapang memiliki berbagai jenjang
            pendidikan dari usia dini hingga menengah atas.
          </p>

          {/* DESKTOP */}
          <div className="md:hidden lg:block hidden">
            <div className="grid gap-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
              {units.map((unit, index) => (
                <SpotlightCard
                  key={index}
                  className="flex flex-col cursor-default hover:scale-95 transition-all duration-300 items-center p-6 shadow-md hover:shadow-lg "
                >
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <Image
                      src={unit.image}
                      alt={unit.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {unit.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{unit.description}</p>
                    </div>
                  </CardContent>
                </SpotlightCard>
                // <Card
                //   key={index}
                //   className="flex flex-col hover:shadow-green-800 hover:scale-95 transition-all duration-300 items-center p-6 shadow-md hover:shadow-lg "
                // >
                //   <div className="w-20 h-20 flex items-center justify-center mb-4">
                //     <Image
                //       src={unit.image}
                //       alt={unit.title}
                //       width={100}
                //       height={100}
                //       className="object-contain"
                //     />
                //   </div>
                //   <CardContent className="text-center flex-1 flex flex-col justify-between">
                //     <div>
                //       <h3 className="text-xl font-semibold mb-2">
                //         {unit.title}
                //       </h3>
                //       <p className="text-gray-600 mb-4">{unit.description}</p>
                //     </div>
                //   </CardContent>
                // </Card>
              ))}
            </div>
          </div>

          {/* MOBILE CAROUSEL */}
          <div className="lg:hidden block mt-8 overflow-x-visible relative">
            <div className="relative  -mx-4 px-4">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{ loop: true }}
              >
            

                <CarouselContent className="-ml-4">
                  {units.map((unit, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-4/5 basis-5/6 pb-8">
                      {/* <SpotlightCard> */}

                      <SpotlightCard className="p-1 h-full flex  hover:scale-95  transition-all duration-300">
                        <div className="flex   flex-col items-center p-6 flex-1">
                          <div className="w-40 flex items-center justify-center mb-4">
                            <Image
                              src={unit.image}
                              alt={unit.title}
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                          </div>
                          <CardContent className="text-center flex-1 flex flex-col justify-between w-full">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2">
                                {unit.title}
                              </h3>
                              <p className="text-gray-600 text-sm text-center">
                                {unit.description}
                              </p>
                            </div>
                          </CardContent>
                        </div>
                      </SpotlightCard>
                      {/* </SpotlightCard> */}
                    </CarouselItem>
                  ))}
                </CarouselContent>
             

                {/* <button
                onClick={() => api?.scrollPrev()}
                className="absolute text-green-800 -left-5 top-1/2 -translate-y-1/2 z-10 px-3 py-1"
              >
                <ArrowLeftCircle size={30} />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="absolute text-green-800 -right-5 top-1/2 -translate-y-1/2 z-10 px-3 py-1"
              >
                <ArrowRightCircle size={30} />
              </button> */}
              </Carousel>

              <div className="flex justify-center mt-4 space-x-2">
                {units.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentIndex ? "bg-green-800" : "bg-gray-400"
                    }`}
                    onClick={() => api?.scrollTo(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default UnitPendidikan;
