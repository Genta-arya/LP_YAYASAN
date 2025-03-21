"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Navbartop from "./Navbar-top";
import SideBar from "./SideBar";
import { TextTitle } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Top Info Bar */}
      <Navbartop />

      {/* Navbar */}
      <nav className="bg-white px-3 xl:px-8   py-4 shadow-md w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg 2xl:text-3xl lg:text-xl md:text-2xl font-bold flex items-center gap-2">
            <img
              src="/LOGO-SMP.jpg"
              alt="Logo"
              className="w-20 md:w-20 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-green-800">Yayasan Islamiyyah</h1>
              <p className="text-green-800 border-b-4 2xl:text-xl lg:text-base md:text-xl text-sm ">Al Jihad Ketapang</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={`${TextTitle} font-semibold ${
                      isActive("/")
                        ? "text-green-800 border-b-4 border-green-600"
                        : "text-black "
                    }`}
                  >
                    Beranda
                  </NavigationMenuLink>
                </NavigationMenuItem>
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
                              ? "bg-gray-200"
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
                              ? "bg-gray-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Sejarah
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          href="/arsip"
                          className={`block px-4 py-2 rounded ${
                            isActive("/arsip")
                              ? "bg-gray-200"
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
                              ? "bg-gray-200"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          Visi Misi
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/artikel"
                    className={`${TextTitle} font-semibold ${
                      isActive("/artikel")
                        ? "text-green-800 border-b-4 border-green-600"
                        : "text-black "
                    }`}
                  >
                    Artikel
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/video-corner"
                    className={`${TextTitle} font-semibold ${
                      isActive("/video-corner")
                        ? "text-blue-600 underline"
                        : "text-black hover:underline"
                    }`}
                  >
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/kontak"
                    className={`${TextTitle} font-semibold ${
                      isActive("/kontak")
                        ? "text-blue-600 underline"
                        : "text-black hover:underline"
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
            className="lg:hidden 2xl:hidden text-2xl"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Sidebar Mobile */}
          <SideBar
            isActive={isActive}
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
      </nav>
    </>
  );
};

export default Navbar;
