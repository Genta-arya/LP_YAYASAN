"use client";
import ShinyText from "@/app/TextAnimations/ShinyText/ShinyText";
import Link from "next/link";
import React from "react";

const Pendaftaran = () => {
  return (
    <div
      className="relative bg-fixed 2xl:bg-[center_top_1100px] md:bg-[center_top_360px] bg-[center_top_100px] pt-5  lg:bg-[center_top_1050px]
  bg-cover w-full 2xl:h-[400px] h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: "url(/Sample.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          PENDAFTARAN PESERTA DIDIK BARU
        </h2>
        <p className="text-base md:text-lg mb-6">
          Kami mengundang putra terbaik Negeri untuk bergabung bersama Yayasan
          Islamiyyah Al Jihad Ketapang.
        </p>

        <button className="button-shine bg-yellow-400 cursor-pointer hover:opacity-80 text-black w-40 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          <Link href="/sistem-penerimaan-murid-baru">
            Daftar Sekarang
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Pendaftaran;
