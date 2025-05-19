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
  const { data, fetchData , loading } = useGlobalStore();
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // if (loading) {
  //   return null;
  // }
  if (!data ) return null;
  return (
    <div>
      {" "}
      <Slider data={data} />
      <ProgramUnggulan data={data} />
      <TentangKami data={data} />
      <UnitPendidikan data={data}  />
      <JumlahPengajar data={data} />
      <Pendaftaran data={data}/>
      <LokasiMap  />
      <Modal />
    </div>
  );
};

export default page;
