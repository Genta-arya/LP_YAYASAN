"use client";
import React, { useEffect, useState } from "react";
import { GetRandomBerita } from "@/Services/Berita.services";
import BacaJuga from "../../(components)/BacaJuga";
import Lainya from "../../(components)/Lainya";
import { FiFacebook, FiLink, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { FaArrowLeft, FaTelegram, FaWhatsapp } from "react-icons/fa";
import showErrorToast, { formatRibuan } from "@/lib/utils";
import { CreateAnalytic, LikeHandler } from "@/Services/Analytic.services";
import { toast } from "sonner";
import Link from "next/link";

const ContentDetailClient = ({ data }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true); // <-- Tambah state loading
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [unlikesCount, setUnlikesCount] = useState(0);
  const [isUnliked, setIsUnliked] = useState(false);
  useEffect(() => {
    setCurrentUrl(window.location.href);

    const fetchRelatedPosts = async () => {
      try {
        const res = await GetRandomBerita();

        const filtered = res.data.filter(
          (post) =>
            post.slug !== data.slug && // hindarin artikel sekarang
            post.kategori.toLowerCase() !== "pengumuman" // hindarin kategori informasi
        );

        const shuffled = filtered.sort(() => 0.5 - Math.random());
        const randomFive = shuffled.slice(0, 5);

        setRelatedPosts(randomFive);
      } catch (err) {
        showErrorToast();
      } finally {
        setIsLoading(false); // <-- Set loading ke false setelah fetch selesai
      }
    };

    fetchRelatedPosts();
  }, [data.slug]);

  const create = async () => {
    try {
      const response = await CreateAnalytic({ postingId: data.id });
      console.log(response);
      const analytic = response?.data?.analytic;

      if (analytic) {
        setLikesCount(analytic.likes || 0);
        setUnlikesCount(analytic.unlikes || 0);
      }
    } catch (err) {
      console.error("Gagal kirim analytic", err);
    }
  };
  useEffect(() => {
    if (!currentUrl || !data?.id) return;

    create();
  }, [currentUrl, data?.id]);

  const handleLike = async () => {
    try {
      const res = await LikeHandler({ postingId: data.id, type: "like" });

      if (!isLiked) {
        setLikesCount((prev) => prev + 1);
        if (isUnliked) setUnlikesCount((prev) => prev - 1);
      }
      setLikesCount(res.analytic.likes || 0);
      setUnlikesCount(res.analytic.unlikes || 0);
      setIsLiked(true);
      setIsUnliked(false);
    } catch (error) {
      const status = error?.response?.status;
      if (status === 400) {
        toast.info("Udah maksimal like hari ini.");
      } else {
        toast.error("Gagal simpan like.");
      }
    }
  };

  const handleUnlike = async () => {
    try {
      const res = await LikeHandler({ postingId: data.id, type: "unlike" });

      if (!isUnliked) {
        setUnlikesCount((prev) => prev + 1);
        if (isLiked) setLikesCount((prev) => prev - 1);
      }
      setLikesCount(res.analytic.likes || 0);
      setUnlikesCount(res.analytic.unlikes || 0);
      setIsUnliked(true);
      setIsLiked(false);
    } catch (error) {
      const status = error?.response?.status;
      if (status === 400) {
        toast.info("Udah maksimal unlike hari ini.");
      } else {
        toast.error("Gagal simpan unlike.");
      }
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => toast.success("Url berhasil disalin 📋"))
      .catch(() => toast.error("Gagal menyalin link 😢"));
  };

  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center  h-screen">
        <div className="w-1/2 h-2 bg-green-300 rounded-full overflow-hidden relative">
          <div className="absolute h-full bg-green-600 rounded-full animate-progress w-1/3"></div>
        </div>
        <p className="mt-4 text-green-700 font-semibold text-sm">
          Memuat Informasi...
        </p>

        {/* Animation CSS */}
        <style jsx>{`
          @keyframes progress {
            0% {
              left: -33%;
            }
            50% {
              left: 50%;
            }
            100% {
              left: 100%;
            }
          }
          .animate-progress {
            animation: progress 1.5s infinite ease-in-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      
      <div className="mx-auto py-4 px-8  flex flex-col lg:flex-row gap-8 cursor-default  lg:px-4">
        <div className="lg:w-[100%]">
          {/* breadcumb */}

          <h1 className="text-2xl lg:text-4xl text-green-800 md:text-3xl font-bold mb-4">
            {data.title}
          </h1>
          <p className="text-sm text-gray-600 mb-2">
            Ditulis oleh <strong>{data.author}</strong> pada{" "}
            {new Date(data.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="flex justify-center mb-12">
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full lg:w-[85%]  object-cover rounded-md transition-transform duration-300 ease-in-out "
            />
          </div>

          <div
            className="prose select-none"
            onContextMenu={(e) => e.preventDefault()}
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <div className="flex items-center mt-6 gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-1 rounded-md text-sm ${
                isLiked
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FiThumbsUp size={18} />
              Like ({formatRibuan(likesCount ?? 0)})
            </button>

            <button
              onClick={handleUnlike}
              className={`flex items-center gap-2 px-4 py-1 rounded-md text-sm ${
                isUnliked
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FiThumbsDown size={18} />
              Unlike ({formatRibuan(unlikesCount ?? 0)})
            </button>
          </div>

          {/* Tombol Bagikan */}
          <div className="mt-6 pb-8">
            <p className="text-sm text-gray-600 mb-2">Bagikan ke:</p>
            <div className="flex flex-wrap items-center gap-1">
              <button
                onClick={handleCopyUrl}
                className="bg-gray-600 hover:bg-gray-700 cursor-pointer text-white px-3 py-1 rounded-md text-sm"
              >
                <div className="flex items-center gap-2">
                  <FiLink size={20} />
                  <p>Copy Url</p>
                </div>
              </button>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
              >
                <div className="flex items-center gap-2">
                  <FiFacebook size={20} />
                  <p>Facebook</p>
                </div>
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  data.title + " " + currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
              >
                <div className="flex items-center gap-2">
                  <FaWhatsapp size={20} />
                  <p>WhatsApp</p>
                </div>
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  currentUrl
                )}&text=${encodeURIComponent(data.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
              >
                <div className="flex items-center gap-2">
                  <FaTelegram size={20} />
                  <p>Telegram</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Baca Juga */}
        {/* <aside>
        <Lainya bacaJuga={relatedPosts} />
      </aside> */}
      </div>
    </>
  );
};

export default ContentDetailClient;
