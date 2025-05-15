"use client";
import React, { useState } from "react";
import ContentInformasi from "./ContentInformasi";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("informasi"); // default jadi 'informasi'

  return (
    <div className="w-full">
      {/* Tab Header */}
      <div className="flex border-b-2 mb-4">
        <button
          className={`px-4 py-2 cursor-pointer font-medium ${
            activeTab === "informasi"
              ? "border-b-4 border-green-800 text-green-800"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("informasi")}
        >
          Informasi
        </button>
        <button
          className={`px-4 py-2 cursor-pointer font-medium ml-4 ${
            activeTab === "berita"
              ? "border-b-4 border-green-800 text-green-800"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("berita")}
        >
          Berita
        </button>
        <button
          className={`px-4 py-2 cursor-pointer font-medium ml-4 ${
            activeTab === "opini"
              ? "border-b-4 border-green-800 text-green-800"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("opini")}
        >
          Opini
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "informasi" && (
          <div className="relative overflow-visible">
            <ContentInformasi type="informasi" />
          </div>
        )}
        {activeTab === "berita" && (
          <div className="relative overflow-visible">
            <ContentInformasi type="berita" />
          </div>
        )}
        {activeTab === "opini" && (
          <div className="relative overflow-visible">
            <ContentInformasi type="opini" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
