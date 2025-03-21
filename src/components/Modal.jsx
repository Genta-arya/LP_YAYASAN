"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Tampil otomatis
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <img
              src="/popup.jpg"
              alt="Pengumuman"
              className="md:max-w-[90vw] max-w-[90vw] 2xl:max-w-[80vw] lg:max-w-[90vw]  max-h-[70vh] rounded-lg"
            />
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
