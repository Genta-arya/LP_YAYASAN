"use client";

import Slider from "@/components/Slider";
import React, { useEffect } from "react";
import ProgramUnggulan from "./(Landing-Page)/(Beranda)/Program";
import TentangKami from "./(Landing-Page)/(Beranda)/TentangKami";
import Pendaftaran from "./(Landing-Page)/(Beranda)/Pendaftaran";
import UnitPendidikan from "./(Landing-Page)/(Beranda)/UnitPendidikan";
import Modal from "@/components/Modal";
import ScrollFadeIn from "@/components/ScrollAnimated";
import JumlahPengajar from "./(Landing-Page)/(Beranda)/JumlahPengajar";
import LokasiMap from "./(Landing-Page)/(Beranda)/Maps";
import ShinyText from "./TextAnimations/ShinyText/ShinyText";
import { getDataGlobal } from "@/Services/Global.Services";
import useGlobalStore from "@/lib/Zustand";

const page = () => {
  const { data, fetchData, loading } = useGlobalStore();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data)
    return (
      <>
        {" "}
        <div className="w-full flex flex-col items-center justify-center  h-screen">
          <div className="w-1/2 h-2 bg-green-300 rounded-full overflow-hidden relative">
            <div className="absolute h-full bg-green-600 rounded-full animate-progress w-1/3"></div>
          </div>
          <p className="mt-4 text-green-700 font-semibold text-sm">
            Tunggu sebentar...
          </p>

          {/* Animation CSS */}
          <style jsx>{`
            @keyframes progress {
              0% {
                left: -33%;
              }
              50% {
                left: 50%;
              }
              100% {
                left: 100%;
              }
            }
            .animate-progress {
              animation: progress 1.5s infinite ease-in-out;
            }
          `}</style>
        </div>
      </>
    );
  return (
    <div>
      {" "}
      <Slider data={data} />
      <ProgramUnggulan data={data} />
      <TentangKami data={data} />
      <UnitPendidikan data={data} />
      <JumlahPengajar data={data} />
      <Pendaftaran data={data} />
      <LokasiMap />
      <Modal />
    </div>
  );
};

export default page;
