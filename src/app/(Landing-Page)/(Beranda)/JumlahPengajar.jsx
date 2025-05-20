"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollFadeIn from "@/components/ScrollAnimated";
import { GraduationCap, Users, Award } from "lucide-react";
import SpotlightCard from "@/app/Components/SpotlightCard/SpotlightCard";

const stats = [
  { label: "Pengajar", value: 35, icon: GraduationCap },
  { label: "Siswa", value: 450, icon: Users },
  { label: "Prestasi", value: 120, icon: Award },
];

const JumlahPengajar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-white border-t-4 border border-green-800 py-20 text-green-900">
      <ScrollFadeIn direction="bottom" amount={0.3}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            Mengukir Prestasi Bersama Kami
          </h2>
          <p className="mb-12 text-base md:text-lg max-w-2xl mx-auto">
            Yayasan Islamiyah Al-Jihad Ketapang terus berkembang dengan dukungan
            tenaga pengajar profesional, siswa berprestasi, dan pencapaian luar
            biasa.
          </p>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-default">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <SpotlightCard key={index}>
                  <div className=" flex flex-col items-center">
                    <Icon className="w-12 h-12 text-green-700 mb-4" />
                    <div className="lg:text-5xl text-3xl font-bold text-yellow-600 mb-2">
                      {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                    </div>
                    <p className="text-lg font-semibold text-gray-600">{stat.label}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default JumlahPengajar;
