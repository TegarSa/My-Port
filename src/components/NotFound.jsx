import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./About.css";
import image1 from '../assets/Kotlin.png';
import image2 from '../assets/Tailwind.png';
import image3 from '../assets/Swift.png';
import image4 from '../assets/Dart.png';
import image5 from '../assets/JS.png';
import image6 from '../assets/Golang.png';
import image7 from '../assets/Bevy.png';
import image8 from '../assets/Rust.png';
import image9 from '../assets/TS.png';
import image10 from '../assets/C++.png';

const icons = [
  { top: "10%", left: "5%", src: image1 },
  { top: "30%", left: "10%", src: image2 },
  { top: "50%", left: "15%", src: image3 },
  { top: "70%", left: "5%", src: image4 },
  { top: "90%", left: "10%", src: image5 },
  { top: "15%", right: "5%", src: image6 },
  { top: "35%", right: "10%", src: image7 },
  { top: "55%", right: "15%", src: image8 },
  { top: "75%", right: "5%", src: image9 },
  { top: "95%", right: "10%", src: image10 },
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
      {/* Background circles */}
      <div
        className={`fixed top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-300"
        } rounded-full opacity-20 blur-xl animate-pulse`}
      ></div>
      <div
        className={`fixed top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 ${
          isDarkMode ? "bg-pink-500" : "bg-pink-300"
        } rounded-full opacity-20 blur-xl animate-pulse`}
      ></div>
      <div
        className={`fixed bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 ${
          isDarkMode ? "bg-blue-500" : "bg-blue-300"
        } rounded-full opacity-20 blur-xl animate-pulse`}
      ></div>
      <div
        className={`fixed bottom-0 left-0 w-20 h-20 sm:w-40 sm:h-40 ${
          isDarkMode ? "bg-pink-500" : "bg-pink-300"
        } rounded-full opacity-20 blur-xl animate-pulse`}
      ></div>
      
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
