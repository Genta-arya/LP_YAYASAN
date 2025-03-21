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

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {" "}
      <Slider />
      <ScrollFadeIn direction="bottom" amount={0.1}>
        <ProgramUnggulan />
      </ScrollFadeIn>
      <ScrollFadeIn direction="right" amount={0.2}>
        <TentangKami />
      </ScrollFadeIn>
      <ScrollFadeIn direction="left" amount={0.2}>
        <UnitPendidikan />
      </ScrollFadeIn>
      <ScrollFadeIn direction="bottom" amount={0.2}>
        <JumlahPengajar />
      </ScrollFadeIn>
      <Pendaftaran />
      <ScrollFadeIn direction="bottom" amount={0.2}>
        <LokasiMap />
      </ScrollFadeIn>
      <Modal />
    </div>
  );
};

export default page;
