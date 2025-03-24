"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Yayasan Islamiyah Al-Jihad Ketapang",
    description: "Membangun Generasi Qurani, Berprestasi, dan Berakhlak Mulia.",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Fasilitas Lengkap & Modern",
    description:
      "Mendukung proses belajar terbaik dengan sarana lengkap & lingkungan nyaman.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Bersama Raih Masa Depan Gemilang",
    description:
      "Bergabunglah bersama kami di Yayasan Islamiyah Al-Jihad Ketapang. Bersama, kita wujudkan impian Anda.",
    image: "/logo.jpg",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      prevSlide();
    } else if (info.offset.x < -100) {
      nextSlide();
    }
  };

  return (
    <div className="relative w-full 2xl:h-[840px] xl:h-[800px] h-[620px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
         <img
  src={slides[current].image}
  alt="slide"
  className="w-full h-full object-cover"
  style={{ objectPosition: "center 60px" }}
/>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-3xl text-white 2xl:text-5xl md:text-4xl font-extrabold"
            >
              {slides[current].title}
            </motion.h2>

            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="2xl:max-w-3xl lgl:max-w-2xl md:max-w-xl mb-6 text-white 2xl:text-2xl md:text-xl"
            >
              {slides[current].description}
            </motion.p>

            {current === slides.length - 1 && (
              <button className="font-semibold rounded-lg  bg-white text-black cursor-pointer transition px-8 py-3 hover:bg-white/80 ">
                Daftar Sekarang
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
