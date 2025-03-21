import Slider from "@/components/Slider";
import React from "react";
import Container from "./(Landing-Page)/(components)/Container";
import ProgramUnggulan from "./(Landing-Page)/(Beranda)/Program";
import TentangKami from "./(Landing-Page)/(Beranda)/TentangKami";
import Pendaftaran from "./(Landing-Page)/(Beranda)/Pendaftaran";

const page = () => {
  return (
    <div>
      {" "}
      <Slider />
   
       <ProgramUnggulan />
       <TentangKami />
       <Pendaftaran />
 
    </div>
  );
};

export default page;
