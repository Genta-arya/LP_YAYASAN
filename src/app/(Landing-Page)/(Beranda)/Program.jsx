"use client";
import React from "react";
import {
  FaQuran,
  FaChild,
  FaGlobe,
  FaChalkboardTeacher,
  FaBook,
  FaHandsHelping,
} from "react-icons/fa";

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
    description: "Kelas bilingual untuk mengasah kemampuan global.",
  },
  {
    icon: <FaChalkboardTeacher size={40} className="text-purple-500 mb-3" />,
    title: "Belajar Bahasa Inggris & Bahasa Arab",
    description: "Pembelajaran berbasis teknologi untuk mendukung era digital.",
  },
];

const ProgramUnggulan = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Program Yayasan</h2>
      <div className="border-b-4 border-green-600 w-96 mx-auto mb-12"></div>

      {/* Grid 3 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-2 py-12 text-center hover:shadow-lg transition"
          >
            <p className="flex justify-center">{program.icon}</p>
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-gray-700">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramUnggulan;
