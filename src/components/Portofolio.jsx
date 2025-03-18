import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import image1 from '../assets/image.png';
import image2 from '../assets/image copy.png';
import image3 from '../assets/image copy 2.png';
import image4 from '../assets/image copy 3.png';
import image5 from '../assets/image copy 4.png';
import image6 from '../assets/image copy 5.png';


const projects = [
  {
    title: "Website Wisata Semilir",
    description: "A university community service project for digital tourism development at Wisata Semilir, Terbah Village. ",
    githubLink: "https://github.com/username/project1",
    liveDemo: "https://wisatasemilirterbah.com",
    image: image1,
  },
  {
    title: "Nglanggeran Tourism Website",
    description: "The official website of Nglanggeran Village to promote local tourism and services.",
    githubLink: "https://github.com/username/project2",
    liveDemo: "#",
    image: image2,
  },
  {
    title: "Website Wisata Pengklik",
    description: "A faculty-led project to promote local tourism and SMEs at Pengklik Village through digital platform.",
    githubLink: "https://github.com/username/project3", 
    liveDemo: "https://wisatapengklik.com",
    image: image3,
  },
  {
    title: "Bookshelf-Api",
    description: "A library API built with Hapi.js for managing book collections efficiently.",
    githubLink: "https://github.com/username/project4",
    liveDemo: "#",
    image: image4,
  },
  {
    title: "Website Gua Jepang Pundong",
    description: "An official tourism website for Gua Jepang Pundong, providing historical insights and visitor information.",
    githubLink: "https://github.com/username/project3",
    liveDemo: "#",
    image: image5,
  },
  {
    title: "Travel APP Journal",  
    description: "note-taking for travelers. This application is being developed as part of my final project with my team.",
    githubLink: "https://github.com/r10Gonzales/Travel-Journal",
    liveDemo: "#",
    image: image6,
  },
];

const Portfolio = ({ isDarkMode }) => {
  return (
    <div
      className={`min-h-screen px-6 lg:pt-32 lg:pb-32 pt-24 relative overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
      id="portfolio-section"
    >
      <div className="fixed top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>

      <div className="relative z-10 text-center">
        <motion.h1
          className={`md:text-4xl text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          } font-vt323 text-blue-glow`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className={`mt-4 text-sm sm:text-xs lg:text-lg font-vt323 ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A showcase of my best work and creativity.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-4 lg:px-20 relative pb-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            } rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative group h-[550px] w-full shadow-[0_15px_30px_rgba(59,130,246,0.8)] animate-pulseShadow`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 * index }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden h-auto aspect-[16/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 z-10">
              {/* Title */}
              <motion.h3
                className={`text-xl md:text-2xl font-bold font-vt323 mb-4 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
              {/* Description */}
              <motion.p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } font-vt323 text-sm md:text-base mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
              {/* Buttons */}
              <motion.div
                className="flex flex-wrap items-center justify-between md:mt-10 mt-12 gap-4 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    isDarkMode ? "text-white" : "text-black"
                  } hover:${isDarkMode ? "text-gray-500" : "text-gray-700"} transition-colors px-2 md:px-4 z-10`}
                >
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveDemo === "#" ? "/NotFound.jsx" : project.liveDemo}
                  target={project.liveDemo === "#" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-800 transition-colors px-2 md:px-4 z-10"
                >
                  <BiLinkExternal size={20} />
                  <span>Live Demo</span>
                </a>
                <button
                  className={`flex items-center space-x-2 ${
                    isDarkMode ? "text-white bg-transparent" : "text-black bg-transparent"
                  } hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 border border-gray-500 rounded-lg px-4 py-2 transition-transform duration-500 ease-in z-10 group`}
                >
                  <span>Details</span>
                  <FaArrowRight
                    size={16}
                    className="transform transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </motion.div>
            </div>
            {/* Hover Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                isDarkMode ? "bg-opacity-20" : "bg-opacity-40"
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
