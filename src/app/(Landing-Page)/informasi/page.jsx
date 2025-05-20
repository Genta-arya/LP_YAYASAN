import React from "react";
import Tabs from "./(components)/Tabs";
import Slider from "@/components/Slider";

export const metadata = {
  title: " Yayasan Al-Jihad - Informasi",
};
const page = () => {
  return (
    <div className="mt-36 px-3 xl:px-8">
      {" "}
      <Tabs />
    </div>
  );
};

export default page;
