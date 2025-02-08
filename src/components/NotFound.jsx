import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";

const icons = [
  { top: "10%", left: "5%", src: "icon1.png" },
  { top: "30%", left: "10%", src: "icon2.png" },
  { top: "50%", left: "15%", src: "icon3.png" },
  { top: "70%", left: "5%", src: "icon4.png" },
  { top: "90%", left: "10%", src: "icon5.png" },
  { top: "15%", right: "5%", src: "icon6.png" },
  { top: "35%", right: "10%", src: "icon7.png" },
  { top: "55%", right: "15%", src: "icon8.png" },
  { top: "75%", right: "5%", src: "icon9.png" },
  { top: "95%", right: "10%", src: "icon10.png" },
];

const NotFound = ({ isDarkMode }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".floating-icon").forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconX = rect.left + rect.width / 2;
        const iconY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - iconX) * 0.05;
        const deltaY = (e.clientY - iconY) * 0.05;
        icon.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-black"
      }`}
    >
      {/* Background animated circles */}
      <div className="fixed top-0 left-0 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed top-0 right-0 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      
      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={`Icon ${index + 1}`}
          className="floating-icon absolute w-12 sm:w-16 opacity-80"
          style={{ top: icon.top, left: icon.left, right: icon.right }}
        />
      ))}
      
      {/* 404 Text */}
      <motion.h1
        className="text-6xl font-extrabold text-pink-glow drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404 Not Found
      </motion.h1>
    </div>
  );
};

export default NotFound;
