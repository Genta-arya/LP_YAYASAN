"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabs from "./(components)/Tabs";


const InformasiPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q");

  const allowedTabs = ["pengumuman", "berita", "opini"];
  const defaultTab = allowedTabs[0]; // Default tab jika tidak ada query parameter

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (!qParam) return;
    if (allowedTabs.includes(qParam)) {
      setActiveTab(qParam);
    } else {
      router.replace("/404");
    }
  }, [qParam]);

  useEffect(() => {
    if (qParam === null) {
      router.replace(`?q=${defaultTab}`);
    }
  }, [qParam]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.replace(`?q=${tab}`);
  };

  if (!activeTab) return null;

  return (
    <div className="mt-36 px-3 xl:px-8">
      <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
};

export default InformasiPage;
