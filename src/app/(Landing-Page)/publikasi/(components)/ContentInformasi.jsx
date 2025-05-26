"use client";

import { GetBerita } from "@/Services/Berita.services";
import React, { useEffect, useState } from "react";
import truncateHTMLContent from "./Truncate";
import {
  FaThumbsDown,
  FaThumbsUp,
  FaTimesCircle,
  FaUser,
} from "react-icons/fa";

import showErrorToast, { formatDateWithDay, formatRibuan } from "@/lib/utils";
import { Clock, Search } from "lucide-react";
import { motion } from "framer-motion"; // 🔥 Import Framer Motion
import BacaJuga from "./BacaJuga";
import Link from "next/link";
import slugify from "slugify";
import { toast } from "sonner";
import ErrorMessage from "@/components/Error";
import SkeletonInformasi from "@/components/SkeletonInformasi";

const ContentInformasi = ({ type }) => {
  const [mainData, setMainData] = useState([]);
  const [bacaJuga, setBacaJuga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState(false);
  const oppositeType = type === "berita" ? "opini" : "berita";

  const fetchData = async () => {
    setLoading(true);
    try {
      const responseMain = await GetBerita(type);
      setMainData(responseMain.data);

      const responseBacaJuga = await GetBerita(`${oppositeType}?limit=5`);

      // Filter data yang bukan kategori "informasi"
      const filteredBacaJuga = responseBacaJuga.data.filter(
        (item) => item.kategori.toLowerCase() !== "informasi"
      );

      setBacaJuga(filteredBacaJuga);
    } catch (error) {
      showErrorToast();
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  if (error) {
    return <ErrorMessage style={"mt-32"} />;
  }

  if (loading) return <SkeletonInformasi />;

  const filteredData = mainData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gap-4 pb-8">
      {/* Konten Utama */}
      <div className="md:col-span-2 grid gap-8 self-start h-fit">
        {/* 🔍 Search Bar */}
        <div className="relative w-full max-w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <Search />
          </span>
          <input
            type="text"
            placeholder={`Cari ${type}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10 py-2 border w-full rounded focus:outline-none focus:ring-2 focus:ring-green-800"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-red-500"
            >
              <FaTimesCircle />
            </button>
          )}
        </div>

        {filteredData.length === 0 ? (
          <p className="lg:text-center text-center mb-4">
            {type} Tidak ditemukan
          </p>
        ) : (
          filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              className="lg:w-full md:w-full "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-row gap-4">
                <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-52 lg:h-40 rounded overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                <div>
                  <Link
                    href={`/publikasi/${item.slug}`}
                    className="lg:text-xl font-semibold hover:text-green-800 hover:cursor-pointer"
                  >
                    {item.title}
                  </Link>

                  <div className="flex mb-2 text-xs mt-1 lg:text-sm items-center gap-1 text-gray-500 ">
                    <FaUser />
                    <p className="">{item.author}</p>
                  </div>
                  <div className="text-xs flex items-center gap-2 text-gray-400 mb-2 italic ">
                    <Clock size={14} />
                    <p>{formatDateWithDay(item.createdAt)}</p>
                  </div>

                  <div className="flex text-xs text-gray-500 gap-2 items-center">
                    <div className="flex items-center gap-1">
                      <FaThumbsUp />
                      <p>({formatRibuan(item.analytics?.likes ?? 0)})</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaThumbsDown />
                      <p>({formatRibuan(item.analytics?.unlikes ?? 0)})</p>
                    </div>
                  </div>

                  <p
                    className="text-gray-700 text-sm hidden lg:block lg:w-[80%]"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTMLContent(item.content, 180),
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContentInformasi;
