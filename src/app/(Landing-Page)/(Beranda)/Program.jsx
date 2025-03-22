"use client";
import React from "react";
import { FaQuran, FaChild, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Pembatas from "@/components/Pembatas";
import ScrollFadeIn from "@/components/ScrollAnimated";

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
  return (
    <div className="py-12 bg-gray-100">
      <ScrollFadeIn direction="bottom" amount={0.1}>
        <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
          Program Unggulan
        </h2>
        <Pembatas />

        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3   px-4">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition"
            >
              <CardHeader className="flex flex-col items-center">
                {program.icon}
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </ScrollFadeIn>
    </div>
  );
};

export default ProgramUnggulan;
