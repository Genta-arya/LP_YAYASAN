import React from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8  ">
      <div className="px-3 xl:px-8 container mx-auto ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo or Title */}
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-2xl font-bold mb-2">
              Yayasan AL-JIHAD
            </h1>
            <p className="text-sm">Mendidik Generasi Berakhlak & Berilmu</p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-6">
           
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FiYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} Yayasan AL-JIHAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
