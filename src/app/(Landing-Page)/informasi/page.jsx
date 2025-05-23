"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabs from "./(components)/Tabs";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q");

  const allowedTabs = ["informasi", "berita", "opini"];
  const defaultTab = "informasi";

  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (qParam) {
      if (allowedTabs.includes(qParam)) {
        setActiveTab(qParam);
      } else {
        router.replace("/404");
      }
    } else {
      router.replace(`?q=${defaultTab}`);
    }
  }, [qParam]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.replace(`?q=${tab}`);
  };

  return (
    <div className="mt-36 px-3 xl:px-8">
      <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
};

export default Page;
