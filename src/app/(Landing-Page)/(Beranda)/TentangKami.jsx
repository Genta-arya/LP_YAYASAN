import React from "react";
import Image from "next/image";

const TentangKami = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="md:w-1/2">
          <Image
            src="/Sample.jpg"
            width={600}
            height={400}
            alt="Tentang Kami"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yayasan Islamiyyah Al Jihad Ketapang adalah lembaga pendidikan yang
            berkomitmen membentuk generasi unggul, berprestasi, dan berakhlak
            mulia. Dengan fasilitas lengkap dan pengajar profesional, kami siap
            mengantarkan siswa menuju masa depan cerah berlandaskan nilai-nilai
            Islami.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Bergabunglah bersama kami, dan jadilah bagian dari perubahan menuju
            generasi emas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
