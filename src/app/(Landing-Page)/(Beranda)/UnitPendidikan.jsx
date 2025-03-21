"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, BookOpen, Baby, Book } from "lucide-react";
import Pembatas from "@/components/Pembatas";

const units = [
  {
    title: "PAUD Al Jihad",
    description: "Pendidikan usia dini dengan pendekatan Islami & kreatif.",
    icon: <Baby className="w-12 h-12 text-pink-500 mb-4" />,
  },
  {
    title: "TPQ Al Jihad",
    description: "Belajar Al-Qur'an dengan metode yang menyenangkan.",
    icon: <BookOpen className="w-12 h-12 text-green-500 mb-4" />,
  },
  {
    title: "SMP Islamiyyah Al Jihad",
    description: "Membangun karakter dan prestasi di tingkat menengah.",
    icon: <School className="w-12 h-12 text-blue-500 mb-4" />,
  },
  {
    title: "SMA Islamiyyah Al Jihad",
    description: "Menyiapkan generasi Qurani, berprestasi, siap kuliah & kerja.",
    icon: <Book className="w-12 h-12 text-yellow-500 mb-4" />,
  },
];

const UnitPendidikan = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-800">Unit Pendidikan</h2>
        <Pembatas />
        <p className="mb-10 max-w-xl mx-auto text-gray-600">
          Yayasan Islamiyyah Al Jihad Ketapang memiliki berbagai jenjang pendidikan dari usia dini hingga menengah atas.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {units.map((unit, index) => (
            <Card key={index} className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition">
              {unit.icon}
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                <p className="text-gray-600 mb-4">{unit.description}</p>
                <Button variant="outline">Lihat Detail</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitPendidikan;
