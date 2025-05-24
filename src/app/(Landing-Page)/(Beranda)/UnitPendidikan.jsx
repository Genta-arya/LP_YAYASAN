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
import useGlobalStore from "@/lib/Zustand";

const UnitPendidikan = () => {
  const [api, setApi] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { data } = useGlobalStore();

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
  const units =
    data?.unit?.map((u) => ({
      title: u.judul,
      description: u.deskripsi,
      image: u.url_Image,
    })) || [];

  if (units.length === 0) return null;

  return (
    <section className="py-16 bg-gray-100">
      <ScrollFadeIn direction="right" amount={0.3}>
        <div className="  px-4 text-center">
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
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-4/5 basis-5/6 pb-8"
                    >
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
              </Carousel>

              <div className="flex justify-center mt-4 space-x-2">
                {units.map((_, idx) => (
                  <button
                    key={idx}
                    className={`rounded-full ${
                      idx === currentIndex
                        ? "bg-green-800 w-11  h-2 "
                        : "bg-gray-400 w-2 h-2 "
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
