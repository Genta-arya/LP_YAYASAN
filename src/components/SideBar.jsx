import Image from "next/image";
import React, { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const SideBar = ({ sidebarOpen, toggleSidebar, isActive }) => {
  const [profilOpen, setProfilOpen] = useState(false);

  const toggleProfil = () => setProfilOpen(!profilOpen);

  return (
    <div
      className={`fixed overflow-auto  top-0 left-0 h-full w-60 md:w-80 bg-white shadow-xl transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-end mt-4 mr-4">
        <button onClick={toggleSidebar} className="">
          <FiX
            size={28}
            className="text-green-800 hover:text-green-600 transition"
          />
        </button>
      </div>
      <div className="flex justify-center items-center p-4 border-b">
        <div className="text-sm md:text-lg font-bold flex items-center flex-wrap gap-2 justify-center ">
          <img
            src="/LOGO-SMP.jpg"
            alt="Logo"
            className="w-32 md:w-40 rounded-full"
          />
        </div>
      </div>

      <ul className="p-4 space-y-4 text-gray-700">
        <li>
          <a
            href="/"
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/")
                ? "bg-green-100 text-green-800 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            Beranda
          </a>
        </li>
        <li className="border-t border-b pb-4 pt-4">
          <button
            onClick={toggleProfil}
            className="flex justify-between items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <span className="font-semibold">Profil</span>
            {profilOpen ? (
              <FiChevronUp className="text-green-800" />
            ) : (
              <FiChevronDown className="text-green-800" />
            )}
          </button>

          {/* Submenu Profil */}
          <ul
            className={`pl-4 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${
              profilOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <li>
              <a
                href="/tentang-kami"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/tentang-kami")
                    ? "bg-green-50 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="/sejarah"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/sejarah")
                    ? "bg-green-50 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                Sejarah
              </a>
            </li>
            <li>
              <a
                href="/arsip"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/arsip")
                    ? "bg-green-50 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                Arsip
              </a>
            </li>
            <li>
              <a
                href="/visi-misi"
                className={`block px-3 py-2 rounded-md ${
                  isActive("/visi-misi")
                    ? "bg-green-50 text-green-800"
                    : "hover:bg-gray-100"
                }`}
              >
                Visi Misi
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/artikel"
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/artikel")
                ? "bg-green-100 text-green-800 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            Artikel
          </a>
        </li>

        {/* Profil Toggle */}

        <li>
          <a
            href="/video-corner"
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/video-corner")
                ? "bg-green-100 text-green-800 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            href="/kontak"
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/kontak")
                ? "bg-green-100 text-green-800 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
