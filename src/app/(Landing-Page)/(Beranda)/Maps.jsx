"use client";
import Pembatas from "@/components/Pembatas";
import React from "react";

const LokasiMap = () => {
  return (
    <section className="pt-16 bg-gray-100">
      <div className=" text-center">
        <h2 className="text-xl md:text-4xl font-bold mb-6 text-green-800">
          Lokasi
        </h2>
        <Pembatas />
        <p className="mb-8 text-gray-700">
          Yayasan Islamiyah Al-Jihad Ketapang di peta berikut.
        </p>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.6935569092625!2d109.98706487396109!3d-1.8699742981129548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0517bb491e0f8f%3A0x7ebeddc66452417e!2sYayasan%20Islamiyah%20Al-Jihad%20Ketapang!5e0!3m2!1sen!2sid!4v1742572946148!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LokasiMap;
