import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const Breadcumb = ({ data }) => {
  return (
    <div className=" ">
      <div className="lg:px-10 px-8 ">
        <p className="text-green-800 text-xs lg:text-sm">
          <FaHome className="inline mr-1 mb-1" />
          <Link href="/" className="hover:underline">Beranda</Link>
          {" » "}
          <Link href="/publikasi" className="hover:underline">Publikasi</Link>
          {" » "}
          {data.title}
        </p>
      </div>
    </div>
  );
};

export default Breadcumb;
