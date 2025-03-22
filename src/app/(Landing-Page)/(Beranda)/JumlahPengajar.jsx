"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollFadeIn from "@/components/ScrollAnimated";

const stats = [
  { label: "Pengajar", value: 35 },
  { label: "Siswa", value: 450 },
  { label: "Prestasi", value: 120 },
];

const JumlahPengajar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-white border-t-4 border-dashed border-green-800 py-20 text-green-900">
      <ScrollFadeIn direction="bottom" amount={0.3}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
            Mengukir Prestasi Bersama Kami
          </h2>
          <p className="mb-12 text-base md:text-lg max-w-2xl mx-auto">
            Yayasan Islamiyyah Al Jihad Ketapang terus berkembang dengan
            dukungan tenaga pengajar profesional, siswa berprestasi, dan
            pencapaian luar biasa.
          </p>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white border border-green-200 shadow-md hover:shadow-lg transition"
              >
                <CardHeader>
                  <CardTitle className="text-center text-5xl font-bold text-green-800">
                    {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
};

export default JumlahPengajar;
