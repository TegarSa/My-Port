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
  { top: "10%", left: "15%", src: image1 },
  { top: "30%", left: "5%", src: image2 },
  { top: "30%", left: "25%", src: image3 },
  { top: "70%", left: "5%", src: image4 },
  { top: "80%", left: "30%", src: image5 },
  { top: "10%", right: "15%", src: image6 },
  { top: "30%", right: "5%", src: image7 },
  { top: "30%", right: "25%", src: image8 },
  { top: "70%", right: "5%", src: image9 },
  { top: "80%", right: "30%", src: image10 },
];

const NotFound = ({ isDarkMode }) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".floating-icon").forEach((icon, index) => {
        const rect = icon.getBoundingClientRect();
        const iconX = rect.left + rect.width / 2;
        const iconY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - iconX) * (index % 2 === 0 ? 0.05 : 0.02); 
        const deltaY = (e.clientY - iconY) * (index % 2 === 0 ? 0.05 : 0.02); 
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
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
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

      {/* Snowfall Animation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="snowflake absolute bg-white rounded-full"
            style={{
              animation: `snowfall ${Math.random() * 3 + 3}s linear infinite`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`, // Randomized falling speed
              animationDelay: `${Math.random() * 3}s`, // Randomized delay for better effect
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={`Icon ${index + 1}`}
          className="floating-icon absolute opacity-80 object-contain sm:w-32 sm:h-32 w-24 h-24"
          style={{ top: icon.top, left: icon.left, right: icon.right }}
        />
      ))}
      
      {/* 404 Text */}
      <motion.h1
        className="text-4xl sm:text-5xl font-vt323 text-pink-glow drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404 Not Found
      </motion.h1>

      {/* Additional paragraph */}
      <motion.p
        className="text-sm sm:text-lg text-center mt-4 max-w-3xl mx-auto px-4 font-vt323 text-pink-glow z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The page you are looking for might have been removed or relocated. Don't worry, you can navigate back to the homepage or explore other sections of the website using the links below. If you need help, feel free to contact me!
      </motion.p>
    </div>
  );
};

export default NotFound;
