import Image from "next/image";
import React from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 border-t-8 border-yellow-400  ">
      <div className="px-3 xl:px-8  ">
       
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} Yayasan AL-JIHAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
