import React from "react";
import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({style}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${style} px-4`}>
      <AlertTriangle size={48} className="text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold">Oops! Gagal Memuat Informasi</h1>
      <p className="text-gray-500 mt-2 max-w-md">
        Maaf, Media yang kamu cari tidak dapat ditampilkan atau terjadi kesalahan saat memuat informasi.
      </p>
    </div>
  );
};

export default ErrorMessage;
