"use client";
import Pembatas from "@/components/Pembatas";
import { getDataProfile } from "@/Services/Global.Services";
import React from "react";
import { toast } from "sonner";
import Loading from "../(Landing-Page)/(components)/Loading";
import DOMPurify from "dompurify";
import LokasiMap from "../(Landing-Page)/(Beranda)/Maps";

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
      console.log(response.data);
    } catch (error) {
      toast.error("Gagal memuat data visi misi");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="px-4 lg:px-8 ">
        <div>
          <h2 className="text-3xl font-bold text-center  text-green-800">
            Sejarah Al-Jihad
          </h2>
          <Pembatas />
        </div>
      </div>
      {data.kontentTentangKami && (
        <div
          className="prose lg:prose-lg  bg-white shadow-xl py-8 flex justify-center  "
          dangerouslySetInnerHTML={{
            __html: (() => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(data.kontentTentangKami, "text/html");

              // Cari elemen yang mengandung "Powered by Froala Editor"
              [...doc.body.querySelectorAll("*")].forEach((el) => {
                if (
                  el.textContent
                    ?.toLowerCase()
                    .includes("powered by froala editor")
                ) {
                  el.remove(); // langsung hapus elemennya
                }
              });

              return doc.body.innerHTML;
            })(),
          }}
        />
      )}
      <LokasiMap />
    </>
  );
};

export default Sejarah;
