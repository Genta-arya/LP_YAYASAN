"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, BookOpen, Baby, Book } from "lucide-react";
import Pembatas from "@/components/Pembatas";
import Image from "next/image";

const units = [
  {
    title: "PAUD Al Jihad",
    description: "Pendidikan usia dini dengan pendekatan Islami & kreatif.",
    icon: <Baby className="w-16 h-16 text-pink-500" />,
  },
  {
    title: "TPQ Al Jihad",
    description: "Belajar Al-Qur'an dengan metode yang menyenangkan.",
    icon: <BookOpen className="w-16 h-16 text-green-500" />,
  },
  {
    title: "SMP Islamiyyah Al Jihad",
    description: "Membangun karakter dan prestasi di tingkat menengah.",
    image: "/LOGO-SMP.jpg",
  },
  {
    title: "SMA Islamiyyah Al Jihad",
    description: "Menyiapkan generasi Qurani, berprestasi, siap kuliah & kerja.",
    image: "/LOGO-SMA.jpg",
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
            <Card key={index} className="flex flex-col items-center p-6 shadow-md hover:shadow-lg transition min-h-[350px]">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                {unit.icon ? (
                  unit.icon
                ) : (
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                )}
              </div>
              <CardContent className="text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                  <p className="text-gray-600 mb-4">{unit.description}</p>
                </div>
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
