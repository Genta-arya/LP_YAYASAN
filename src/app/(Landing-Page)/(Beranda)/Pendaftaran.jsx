"use client";
import React from "react";

const Pendaftaran = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-[300px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4">
          PENDAFTARAN PESERTA DIDIK BARU
        </h2>
        <p className="text-lg mb-6">
          Kami mengundang putra terbaik Negeri untuk bergabung bersama SMA
          Integral Luqman al Hakim, Surabaya
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Pendaftaran;
