import Image from "next/image";
import React from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 border-t-8 border-yellow-400  ">
      <div className="px-3 xl:px-8  ">
       
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo or Title */}
          <Image
          src="/Logoweb.png"
          alt="Logo"
          width={300}
          height={300}
          className="mb-2 bg-white"
        />
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
