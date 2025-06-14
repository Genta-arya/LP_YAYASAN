"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import SideBar from "./SideBar";
import { TextTitle } from "@/lib/utils";
import { motion } from "framer-motion";
import Info from "./info";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => pathname === path;
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white top-[41px] px-3 xl:px-8 pb-4 fixed  shadow-md w-full z-50"
      >
        <div className="flex justify-between items-center px-2">
          <div
          
            className="hover:cursor-pointer text-lg 2xl:text-3xl lg:text-xl md:text-2xl font-bold flex items-center gap-2"
          >
            <img
              onClick={() => (window.location.href = "/")}
              src="/Logoweb.png"
              alt="Logo"
              className="w-[60%] lg:w-[40%] mt-2 rounded-full"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                {/* Semua item */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`${TextTitle} font-semibold ${
                      isActive("/")
                        ? "text-green-800 border-b-4 hover:opacity-75 hover:text-green-800  border-green-600"
                        : "hover:opacity-75 hover:text-green-800 text-black"
                    }`}
                  >
                    <Link href="/">Beranda</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Dropdown Profil */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`bg-white font-semibold text-black  ${TextTitle}`}
                  >
                    Profil
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={`bg-white text-black p-2 ${TextTitle} rounded-md shadow-md`}
                  >
                    <ul className="flex flex-col space-y-2 w-64 font-bold">
                      <li>
                        <NavigationMenuLink
                          href="/tentang-kami"
                          className={`block px-4 py-2 rounded ${
                            isActive("/tentang-kami")
                              ? "bg-green-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Tentang Kami
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/sejarah"
                          className={`block px-4 py-2 rounded ${
                            isActive("/sejarah")
                              ? "bg-green-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Sejarah
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/#"
                          className={`block px-4 py-2 rounded ${
                            isActive("/arsip")
                              ? "bg-green-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Arsip
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/visi-misi"
                          className={`block px-4 py-2 rounded ${
                            isActive("/visi-misi")
                              ? "bg-green-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Visi Misi
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Item lainnya */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`${TextTitle} font-semibold ${
                      isActive("/publikasi")
                        ? "text-green-800 border-b-4 hover:opacity-75 hover:text-green-800  border-green-600"
                        : "hover:opacity-75 hover:text-green-800 text-black"
                    }`}
                  >
                    <Link href="/publikasi">Publikasi</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`${TextTitle} font-semibold ${
                      isActive("/sistem-penerimaan-murid-baru")
                        ? "text-green-800 border-b-4 hover:opacity-75 hover:text-green-800  border-green-600"
                        : "hover:opacity-75 hover:text-green-800 text-black"
                    }`}
                  >
                    <Link href="/sistem-penerimaan-murid-baru">SPMB</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/gallery"
                    className={`${TextTitle} font-semibold ${
                      isActive("/gallery")
                        ? "text-green-800 border-b-4 hover:opacity-75 hover:text-green-800  border-green-600"
                        : "hover:opacity-75 hover:text-green-800 text-black"
                    }`}
                  >
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/#"
                    className={`${TextTitle} font-semibold ${
                      isActive("/kontak") ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    Kontak
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden 2xl:hidden relative w-8 h-8 mt-4 mr-4 flex flex-col justify-center items-center z-50"
          >
            <span
              className={`absolute h-1 w-8 bg-green-800 rounded transition-transform duration-300 ${
                sidebarOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute h-1 w-8 bg-green-800 rounded transition-opacity duration-300 ${
                sidebarOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute h-1 w-8 bg-green-800 rounded transition-transform duration-300 ${
                sidebarOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>

          {/* Sidebar Mobile */}
          <SideBar
            isActive={isActive}
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />

          {/* Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>
      </motion.nav>

      <Info />
    </>
  );
};

export default Navbar;
