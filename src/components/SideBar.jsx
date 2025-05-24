import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

// Komponen helper biar sidebar langsung close setelah klik link
const SidebarLink = ({ href, children, className, setSidebarOpen }) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => setSidebarOpen(false)}
    >
      {children}
    </Link>
  );
};

const SideBar = ({ sidebarOpen, toggleSidebar, isActive, setSidebarOpen }) => {
  const [profilOpen, setProfilOpen] = useState(false);

  const toggleProfil = () => setProfilOpen(!profilOpen);

  return (
    <div
      className={`fixed overflow-auto top-0 left-0 h-full w-60 md:w-80 z-50 bg-white shadow-xl transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-end mt-4 mr-4">
        <button onClick={toggleSidebar}>
          <FiX size={28} className="text-green-800 hover:text-green-600 transition" />
        </button>
      </div>
      <div className="flex justify-center items-center p-4 border-b">
        <div className="text-sm md:text-lg font-bold flex items-center flex-wrap gap-2 justify-center">
          <Image
            src="/LOGO-SMP.jpg"
            alt="Logo"
            width={160}
            height={160}
            className="rounded-full w-32 md:w-40 h-auto"
          />
        </div>
      </div>

      <ul className="p-4 space-y-4 text-gray-700">
        <li>
          <SidebarLink
            href="/"
            setSidebarOpen={setSidebarOpen}
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/") ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100"
            }`}
          >
            Beranda
          </SidebarLink>
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
              <SidebarLink
                href="/tentang-kami"
                setSidebarOpen={setSidebarOpen}
                className={`block px-3 py-2 rounded-md ${
                  isActive("/tentang-kami") ? "bg-green-50 text-green-800" : "hover:bg-gray-100"
                }`}
              >
                Tentang Kami
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                href="/sejarah"
                setSidebarOpen={setSidebarOpen}
                className={`block px-3 py-2 rounded-md ${
                  isActive("/sejarah") ? "bg-green-50 text-green-800" : "hover:bg-gray-100"
                }`}
              >
                Sejarah
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                href="/arsip"
                setSidebarOpen={setSidebarOpen}
                className={`block px-3 py-2 rounded-md ${
                  isActive("/arsip") ? "bg-green-50 text-green-800" : "hover:bg-gray-100"
                }`}
              >
                Arsip
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                href="/visi-misi"
                setSidebarOpen={setSidebarOpen}
                className={`block px-3 py-2 rounded-md ${
                  isActive("/visi-misi") ? "bg-green-50 text-green-800" : "hover:bg-gray-100"
                }`}
              >
                Visi Misi
              </SidebarLink>
            </li>
          </ul>
        </li>

        <li>
          <SidebarLink
            href="/publikasi"
            setSidebarOpen={setSidebarOpen}
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/publikasi") ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100"
            }`}
          >
            Publikasi
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/sistem-penerimaan-murid-baru"
            setSidebarOpen={setSidebarOpen}
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/sistem-penerimaan-murid-baru")
                ? "bg-green-100 text-green-800 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            SPMB
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/video-corner"
            setSidebarOpen={setSidebarOpen}
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/video-corner") ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100"
            }`}
          >
            Gallery
          </SidebarLink>
        </li>
        <li>
          <SidebarLink
            href="/kontak"
            setSidebarOpen={setSidebarOpen}
            className={`block px-3 py-2 rounded-lg transition ${
              isActive("/kontak") ? "bg-green-100 text-green-800 font-bold" : "hover:bg-gray-100"
            }`}
          >
            Kontak
          </SidebarLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
