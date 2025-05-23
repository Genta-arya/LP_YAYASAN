"use client";

import { GetSpmb } from "@/Services/Spmb.service";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import LokasiMap from "../../(Beranda)/Maps";

const SkeletonCard = () => (
  <div className="border p-4  rounded-xl bg-white shadow-md animate-pulse ">
    <div className="lg:h-16 lg:w-16 w-32 h-32 bg-gray-300 rounded mx-auto mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
  </div>
);

const Spmb = () => {
  const [spmbData, setSpmbData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // ✅ state error
  const cardRef = useRef(null);
  const fetchData = async () => {
    try {
      const data = await GetSpmb();
      setSpmbData(data.data);
    } catch (error) {
      console.error("Gagal fetch data SPMB:", error);
      setError(true); // ✅ trigger error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!loading && !error && cardRef.current) {
      const yOffset = -400; // kamu bisa atur -50 atau -150 sesuai tampilanmu
      const y =
        cardRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [loading, error]);

  return (
    <>
      <div ref={cardRef} className="mt-8 text-center lg:px-4 px-1 pb-12">
        {!loading && (
          <>
            <div className="flex items-center justify-center text-green-800">
              <div className="flex-grow border-t-4 border-gray-400"></div>
              <span className="lg:px-4 px-1 font-extrabold text-base lg:text-3xl text-green-800">
                SISTEM PENERIMAAN MURID BARU
              </span>
              <div className="flex-grow border-t-4 border-gray-400"></div>
            </div>

            <p className="text-green-800 lg:text-lg text-sm font-semibold">
              Al-Jihad Islamic Center
            </p>
          </>
        )}

        {/* ✅ tampilkan error kalau fetch gagal */}
        {error ? (
          <div className="text-red-600 mt-6 text-sm font-semibold">
            Gagal memuat informasi SPMB. Silakan coba lagi nanti.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-4 gap-2 mt-6 px-2">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : spmbData.map((item, index) => {
                  const isLast = index === spmbData.length - 1;
                  const isOdd = spmbData.length % 2 === 1;

                  return (
                    <Link
                      href={`sistem-penerimaan-murid-baru/spmb/${item.type}`}
                      key={index}
                      className={`border p-4 rounded-xl bg-white shadow-md transition-all duration-300 transform hover:shadow-lg hover:shadow-green-300 ${
                        isLast && isOdd ? "col-span-2 md:col-span-1" : ""
                      }`}
                    >
                      <img
                        src={item.url_icon || "https://via.placeholder.com/150"}
                        alt={item.judul}
                        className="lg:h-32 lg:w-32 w-32 h-32 object-contain mx-auto mb-2 transition-transform duration-300"
                      />
                      <h2 className="font-bold lg:text-base text-sm text-gray-600 text-center">
                        {item.judul}
                      </h2>
                    </Link>
                  );
                })}
          </div>
        )}
      </div>
      <LokasiMap />
    </>
  );
};

export default Spmb;
