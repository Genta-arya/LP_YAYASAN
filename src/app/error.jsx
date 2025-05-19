// app/error.js
"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("🔥 Global Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center p-8 bg-white rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600">Terjadi Kesalahan</h2>
        <p className="mt-2 text-gray-700">
          Oops! Ada yang salah di sisi server.
        </p>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
