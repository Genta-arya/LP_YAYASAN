import Slider from "@/components/Slider";
import React from "react";
import Container from "./(Landing-Page)/(components)/Container";
import ProgramUnggulan from "./(Landing-Page)/(Beranda)/Program";
import TentangKami from "./(Landing-Page)/(Beranda)/TentangKami";
import Pendaftaran from "./(Landing-Page)/(Beranda)/Pendaftaran";
import UnitPendidikan from "./(Landing-Page)/(Beranda)/UnitPendidikan";
import Modal from "@/components/Modal";
import ScrollFadeIn from "@/components/ScrollAnimated";
import JumlahPengajar from "./(Landing-Page)/(Beranda)/JumlahPengajar";
import LokasiMap from "./(Landing-Page)/(Beranda)/Maps";

const page = () => {
  return (
    <div>
      {" "}
      <Slider />
      <ScrollFadeIn direction="bottom">
        <ProgramUnggulan />
      </ScrollFadeIn>
      <ScrollFadeIn direction="right">
        <TentangKami />
      </ScrollFadeIn>
      <ScrollFadeIn direction="left">
        <UnitPendidikan />
      </ScrollFadeIn>
      <ScrollFadeIn direction="bottom">
        <JumlahPengajar />
      </ScrollFadeIn>
      <Pendaftaran />
      <ScrollFadeIn direction="bottom">
        <LokasiMap />
      </ScrollFadeIn>
      <Modal />
    </div>
  );
};

export default page;
