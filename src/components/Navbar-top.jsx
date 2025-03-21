import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Navbartop = () => {
  const handleClickWa = () => {
    window.open("https://wa.me/6285347261750", "_blank");
  };
  const handleClickEmail = () => {
    window.open("mailto:yayasanaljihad10@gmail.com", "_blank");
  };
  return (
    <div className="bg-green-700 text-white text-xs md:text-sm py-2 fixed top-0 left-0 z-50 w-full ">
      <div className="flex-row flex  md:flex-row justify-center items-center px-4 gap-2 md:gap-6">
        <div
          className="flex items-center gap-2 cursor-pointer hover:underline"
          onClick={handleClickWa}
          id="wa"
        >
          <FiPhone className="inline-block" />
          <span>0853-4726-1750</span>
        </div>
        <p>|</p>
        <div
          className="flex items-center gap-2 cursor-pointer hover:underline"
          onClick={handleClickEmail}
        >
          <FiMail className="inline-block" />
          <span>yayasanaljihad10@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;
