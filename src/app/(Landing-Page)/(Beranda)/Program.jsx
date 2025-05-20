"use client";
import React from "react";
import { FaQuran, FaChild, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import Pembatas from "@/components/Pembatas";
import ScrollFadeIn from "@/components/ScrollAnimated";
import SpotlightCard from "@/app/Components/SpotlightCard/SpotlightCard";

const programs = [
  {
    icon: <FaQuran size={40} className="text-yellow-500 mb-3" />,
    title: "Tahfidz Al-Qur'an",
    description: "Program hafalan Al-Qur'an intensif untuk generasi Qur'ani.",
  },
  {
    icon: <FaChild size={40} className="text-green-500 mb-3" />,
    title: "Pembinaan Akhlak",
    description: "Membentuk karakter dan moralitas siswa sejak dini.",
  },
  {
    icon: <FaBook size={40} className="text-blue-500 mb-3" />,
    title: "Baca Kitab",
    description: "Mempelajari kitab-kitab klasik untuk memperdalam ilmu agama.",
  },
  {
    icon: <FaChalkboardTeacher size={40} className="text-purple-500 mb-3" />,
    title: "Bahasa Inggris & Arab",
    description: "Pembelajaran bahasa asing untuk mendukung era globalisasi.",
  },
];

const ProgramUnggulan = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="py-12 bg-gray-100">
      <motion.div
        className="lg:hidden md:hidden -mt-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="lg:text-3xl md:text-3xl text-2xl font-bold text-center mb-10 text-green-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Program Unggulan
        </motion.h2>

        <Pembatas />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 pb-4"
          variants={containerVariants}
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SpotlightCard className="cursor-default">
                <div className="flex flex-col items-center">
                  {program.icon}
                  <h3 className="text-lg font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-center">{program.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="hidden md:block lg:block">
        <ScrollFadeIn direction="bottom" amount={0.1}>
          <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
            Program Unggulan
          </h2>
          <Pembatas />

          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3   px-4 pb-4">
            {programs.map((program, index) => (
              <SpotlightCard key={index} className="cursor-default">
                <div className="flex flex-col items-center">
                  {program.icon}
                  <h3 className="text-lg font-semibold mb-2">
                    {program.title}
                  </h3>
                  <p className=" text-center">{program.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
};

export default ProgramUnggulan;
