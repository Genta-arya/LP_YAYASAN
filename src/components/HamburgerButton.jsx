import React, { useState } from "react";

const Hamburger = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="relative w-8 h-8 flex flex-col justify-between items-center z-50"
    >
      <span
        className={`block h-1 w-8 bg-green-800 rounded transition-transform duration-300 ${
          sidebarOpen ? "rotate-45 translate-y-3" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 bg-green-800 rounded transition-opacity duration-300 ${
          sidebarOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-8 bg-green-800 rounded transition-transform duration-300 ${
          sidebarOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      ></span>
    </button>
  );
};

export default Hamburger;
