import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col items-center">
        <FaExclamationTriangle size={60} className="text-green-800 mb-4" />
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          404 - Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-600">
          Ups! Sepertinya halaman yang kamu cari nggak tersedia.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
