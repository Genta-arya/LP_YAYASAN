"use client";
import Pembatas from "@/components/Pembatas";
import { getDataProfile } from "@/Services/Global.Services";
import React from "react";
import { toast } from "sonner";
import Loading from "../(Landing-Page)/(components)/Loading";
import DOMPurify from "dompurify";
import LokasiMap from "../(Landing-Page)/(Beranda)/Maps";

// Hook buat hapus elemen yang mengandung Froala
DOMPurify.addHook("beforeSanitizeElements", (node) => {
  if (
    node.textContent?.toLowerCase().includes("powered by froala editor")
  ) {
    node.remove();
  }
});

const Sejarah = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getDataProfile();
      setData(response.data);
    } catch (error) {
      toast.error("Gagal memuat data visi misi");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const cleanHtml = data?.kontentTentangKami
    ? DOMPurify.sanitize(data.kontentTentangKami)
    : "";

  return (
    <>
      <div className="w-full">
        <div className="px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Sejarah Al-Jihad
          </h2>
        
        </div>

        <div className="px-4 lg:px-8 flex justify-center pb-8">
          <div className="w-full max-w-5xl overflow-x-auto break-words prose prose-sm lg:prose-base text-justify text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
          </div>
        </div>


      </div>
    </>
  );
};

export default Sejarah;
