import React from "react";
import Tabs from "./(components)/Tabs";


export const metadata = {
  title: " Yayasan Al-Jihad - Informasi",
}
const page = () => {
  return (
    <div className="mt-48 container mx-auto px-3 xl:px-8">
      {" "}
      <Tabs />
    </div>
  );
};

export default page;
