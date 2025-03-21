"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrolled / height) * 100;

    setScrollProgress(progress);

    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <div
        onClick={scrollToTop}
        className="relative w-14 h-14 bg-green-700 rounded-full cursor-pointer flex items-center justify-center shadow-lg"
      >
        <ArrowUp className="text-white w-6 h-6" />
        <svg className="absolute top-0 left-0 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="22"
            stroke="#ffffff"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={138} 
            strokeDashoffset={138 - (138 * scrollProgress) / 100}
            style={{ transition: "stroke-dashoffset 0.25s ease" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
