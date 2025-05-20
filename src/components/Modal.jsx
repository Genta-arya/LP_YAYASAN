"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const Modal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Tampil otomatis
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 top-32 lg:top-32 bg-black/50 flex justify-center items-center z-100 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            <img
              src="/popup.jpg"
              alt="Pengumuman"
              className="md:max-w-[60vw] max-w-[90vw] 2xl:max-w-[80vw] lg:max-w-[90vw] max-h-[60vh] rounded-lg"
            />

            {/* Tombol Daftar */}
            <Link
              href="/sistem-penerimaan-murid-baru"
              className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-sm text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Daftar Sekarang
            </Link>

            {/* Tombol Close */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 px-2 cursor-pointer"
            >
              <FaTimes />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
