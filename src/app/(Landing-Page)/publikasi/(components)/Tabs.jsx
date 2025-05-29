"use client";
import React, { useEffect } from "react";
import ContentInformasi from "./ContentInformasi";

const Tabs = ({ activeTab, setActiveTab }) => {
  const allowedTabs = ["pengumuman", "media"];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // ⛳ Redirect kalau selain "pengumuman"
  useEffect(() => {
    if (activeTab !== "pengumuman") {
      window.location.href = "https://media.aljihadketapang.sch.id/";
    }
  }, [activeTab]);

  return (
    <div className="w-full ">
      {/* Tab Header */}
      <div className="flex justify-center border-b-2 mb-4  ">
        {allowedTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 cursor-pointer mt-4 font-medium ml-4 first:ml-0 ${
              activeTab === tab
                ? "border-b-6 border-green-800 text-green-800 w-full"
                : "text-gray-500 w-full"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "pengumuman" && (
        <div className="relative overflow-visible">
          <ContentInformasi type={activeTab} />
        </div>
      )}
    </div>
  );
};

export default Tabs;
