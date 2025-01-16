import React, { useState, useEffect } from "react";
import { FaHandSpock } from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";

const About = ({ isDarkMode }) => {
  const [isInView, setIsInView] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth); 


  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize); 
    return () => {
      window.removeEventListener("resize", updateWindowSize); 
    };
  }, []);

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { label: "+ Years Experience", value: 1 },
    { label: "Projects Completed", value: 17 },
    { label: "Programming Languages", value: 6 },
    { label: "Frameworks", value: 6 },
  ];

  const animateNumbersSequentially = () => {
    const stepTime = 100;
    const pauseBetweenStats = 500;

    // Fungsi untuk animasi penambahan
    const animateNumberAddition = (target, index) => {
      return new Promise((resolve) => {
        let current = 0;

        const interval = setInterval(() => {
          current += 1;
          if (current >= target) {
            current = target;
            clearInterval(interval);
            setTimeout(resolve, pauseBetweenStats);
          }

          setCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] = current;
            return updatedCounts;
          });
        }, stepTime);
      });
    };

    
    const animateNumberSubtraction = (target, index) => {
      return new Promise((resolve) => {
        let current = target;

        const interval = setInterval(() => {
          current -= 1; 
          if (current <= 0) {
            current = 0;
            clearInterval(interval);
            setTimeout(resolve, pauseBetweenStats);
          }

          setCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[index] = current;
            return updatedCounts;
          });
        }, stepTime);
      });
    };

    (async () => {
      while (true) { 
        for (let i = 0; i < stats.length; i++) {
          await animateNumberAddition(stats[i].value, i);
        }
    
        for (let i = stats.length - 1; i >= 0; i--) {
          await animateNumberSubtraction(stats[i].value, i);
        }
      }
    })();    
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animateNumbersSequentially(); 
    }
  }, [isInView]);

  return (
    <div
      className={`min-h-screen px-4 lg:pt-60 pt-72 relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-black"
      }`}
      id="about-section"
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

      {/* Main content */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute md:left-20 left-20 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaHandSpock
            size={windowSize < 640 ? 40 : 60}
            className={`${isDarkMode ? "text-yellow-400" : "text-yellow-600"} waving`}
          />
        </motion.div>
        <motion.h1
          className={`md:text-4xl font-extrabold absolute left-32 md:left-40 ${
            isDarkMode ? "text-pink-glow text-white" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About Me
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-16 lg:px-16">
        <motion.div
          className={`w-full lg:w-2/3 text-center lg:text-left ${
            isDarkMode ? "text-white" : "text-black"
          } font-vt323`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="mb-4 text-sm sm:text-xs lg:text-lg">
            Hello! I am Tegar Satria Iman Saputra, a passionate Full Stack Developer.
          </p>
          <p className="mb-6 text-sm sm:text-xs lg:text-lg">
            I specialize in creating dynamic and responsive web applications using modern
            technologies like React, Node.js, and Tailwind CSS. I love to build projects that are
            both functional and aesthetically pleasing, and I'm always learning new things to
            improve my skills.
          </p>
          <motion.button
            className={`${
              isDarkMode
                ? "bg-blue-500 text-white"
                : "bg-blue-300 text-black"
            } rounded-full transition-transform duration-300 px-6 py-3 responsive-button`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      <div className="flex justify-center space-x-4 lg:pt-48 pt-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <div className="flex justify-center items-center space-x-2 font-vt323">
              <p
                className={`text-sm sm:text-lg font-extrabold drop-shadow-lg ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {counts[index]}
              </p>
              <p
                className={`text-xs sm:text-sm drop-shadow-sm ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
