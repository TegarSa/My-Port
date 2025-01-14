import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About"; 
import "./index.css";
import { FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact,  FaVuejs, FaArrowRight, FaCode, FaDatabase, FaLaptopCode, FaPaintBrush, FaCogs} from "react-icons/fa";
import { SiNextdotjs, SiKotlin, SiTypescript, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion"; 
import { useInView } from "react-intersection-observer";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import moonsongGif from './assets/moonsong-gif-edition.gif';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fadeInTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
    transition: { duration: 1, ease: "easeOut" },
  };

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <motion.div
        className={`min-h-screen overflow-hidden transition-colors duration-500 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-black"
        }`}
        variants={fadeInTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Navbar isDarkMode={isDarkMode} />

        <Routes>
          <Route path="/" element={<MainPage isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} /> 
          <Route path="/portofolio" element={<Portfolio isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode}/>} />
        </Routes>

        {/* Dark Mode Toggle Button */}
        <div className="fixed bottom-4 right-4">
          <label className="relative inline-block w-10 h-10 bg-white rounded-full cursor-pointer shadow-lg items-center justify-center">
            <input
              type="checkbox"
              className="hidden"
              checked={!isDarkMode}
              onChange={toggleTheme}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                isDarkMode ? "scale-100 rotate-0" : "scale-0 rotate-360"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-500"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0=" />
              </svg>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                isDarkMode ? "scale-0 rotate-360" : "scale-100 rotate-0"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-yellow-400"
              >
                <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"></path>
              </svg>
            </div>
          </label>
        </div>
      </motion.div>
    </Router>
  );
};

const MainPage = ({ isDarkMode }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    
    // Hitung posisi kursor relatif terhadap container
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    
    // Hitung rotasi berdasarkan posisi kursor
    const rotateX = ((mouseY / height) - 0.5) * 30; // rotasi sumbu X
    const rotateY = ((mouseX / width) - 0.5) * 30; // rotasi sumbu Y
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset rotasi kembali ke posisi semula saat kursor keluar
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave); // Menambahkan event mouseleave
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-16 space-y-8 mt-32 md:mt-64 relative">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 md:space-y-0 space-y-8 mb-16">
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10 w-full md:w-1/2 mt-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold animate-pulse font-vt323 text-blue-glow">
            Hello! I'm <span className="text-blue-400">Tegar Satria Iman Saputra</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg animate-fadeIn font-vt323">
            Full Stack Developer
          </p>

          <p className="text-xs sm:text-sm md:text-base font-vt323 animate-fadeIn text-justify">
          Passionate about building scalable web applications using React, Node.js, and modern tools. Strong foundation in Software Engineering with a focus on creating innovative and user-centric solutions.</p>

          <div className="flex justify-center md:justify-start space-x-3 animate-slideIn">
            <a
              href="https://github.com/TegarSa"
              className="hover:text-gray-400 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tegarsatria"
              className="hover:text-blue-400 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com/tgrstr"
              className="hover:text-pink-500 hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          <button className="px-4 sm:px-6 py-2 bg-blue-500 text-white font-bold text-sm rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transform transition duration-300 ease-in-out font-vt323">
            <span className="flex items-center space-x-1">
              <span>Download CV</span>
              <span className="animate-bounce">&#x21E9;</span>
            </span>
          </button>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative w-full md:w-1/2 flex items-center justify-center animate-fadeInDown"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{
            perspective: "1000px", // Menambahkan perspektif untuk efek 3D
          }}
        >
          <div
            className="relative w-4/5 md:w-full h-auto bg-cover bg-center rounded-lg shadow-lg overflow-hidden animate-bubble"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, // Efek rotasi dinamis
              transition: "transform 0.1s ease-out", // Transisi halus saat kursor bergerak
            }}
          >
            <img
              src={moonsongGif}
              alt="Moonsong GIF"
              className="w-full h-auto"
            />
          </div>
        </motion.div>  
      </div>

      <div className="pt-32 flex flex-col items-center">
        <h1 className="text-lg sm:text-2xl md:text-4xl font-extrabold font-vt323 text-center max-w-2xl animate-pulse">
          <span className="text-blue-400">My Passionate</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-vt323 animate-fadeIn text-center max-w-2xl mt-4">
        Technical expertise, Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <TechStack isDarkMode={isDarkMode} />
      
      <Service isDarkMode={isDarkMode} />
    </main>
  );
};

const TechStack = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [isVisible, setIsVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const techStacks = {
    Programming: [
      { name: "HTML", level: "Expert", icon: <FaHtml5 className="text-orange-500 text-6xl sm:text-8xl" /> },
      { name: "CSS", level: "Expert", icon: <FaCss3Alt className="text-blue-500 text-6xl sm:text-8xl" /> },
      { name: "JavaScript", level: "Intermediate", icon: <FaJs className="text-yellow-500 text-6xl sm:text-8xl" /> },
      { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-400 text-6xl sm:text-8xl" /> },
      { name: "Kotlin", level: "Beginner", icon: <SiKotlin className="text-teal-500 text-6xl sm:text-8xl" /> },
    ],
    Framework: [
      { name: "React", level: "Expert", icon: <FaReact className="text-blue-400 text-6xl sm:text-8xl" /> },
      { name: "Vue.js", level: "Intermediate", icon: <FaVuejs className="text-green-500 text-6xl sm:text-8xl" /> },
      { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-gray-700 text-6xl sm:text-8xl" /> },
    ],
    Database: [
      { name: "MySQL", level: "Intermediate", icon: <SiMysql className="text-blue-500 text-6xl sm:text-8xl" /> },
      { name: "PostgreSQL", level: "Intermediate", icon: <SiPostgresql className="text-blue-700 text-6xl sm:text-8xl" /> },
      { name: "MongoDB", level: "Beginner", icon: <SiMongodb className="text-green-500 text-6xl sm:text-8xl" /> },
    ],
  };

  const categories = Object.keys(techStacks);

  const { ref: techStackRef, inView: techStackInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: categoryRef, inView: categoryInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("tech-stack-section");
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight - 100) setIsVisible(true);
      
      const categorySection = document.getElementById("category-buttons");
      const { top: categoryTop } = categorySection.getBoundingClientRect();
      if (categoryTop < window.innerHeight - 100) setIsCategoryVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="tech-stack-section"
      ref={techStackRef}
      className="relative flex flex-col items-center justify-start font-vt323 px-4 mt-0 lg:mt-0 w-full"
    >
      <div className="fixed top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>

      <div className="sticky top-0 z-10 p-4 w-full space-y-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6 flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: techStackInView ? 1 : 0, y: techStackInView ? 0 : -50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.span
            className="mr-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: techStackInView ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <FaCogs className="text-blue-500 text-6xl" />
          </motion.span>
          My Tech Stack
        </motion.h2>

        <div
          id="category-buttons"
          ref={categoryRef}
          className="flex flex-wrap justify-start sm:space-x-6 mb-6 gap-4 sm:gap-0"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-[24px] border-2 ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-300"
              } transition-colors duration-300 shadow-lg text-sm sm:text-base`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: categoryInView ? 1 : 0, y: categoryInView ? 0 : -20 }}
              transition={{ duration: 1.0, delay: categories.indexOf(category) * 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-12 w-full max-w-full p-4 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${isCategoryVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition-all duration-1500 ease-out`}
      >
        {techStacks[activeCategory].map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`flex flex-col items-center justify-between p-4 rounded-lg border-gray-600 shadow-2xl${
              isDarkMode ? "bg-transparent border" : "bg-white"
            } shadow-[0_15px_30px_rgba(59,130,246,0.8)]`}
            initial={{ opacity: 0, x: 0, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              y: -5,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              }
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: index * 0.3,
            }}
          >
            {tech.icon}
            <h3 className="text-center mt-4">{tech.name}</h3>
            <p className="text-center text-sm sm:text-xs mt-2">{tech.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Service = ({ isDarkMode }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Full-stack Developer",
      description: "I design, develop, and maintain end-to-end solutions for both the front-end and back-end.",
      icon: <FaCode size={48} />,
      cardName: "fullstack",
    },
    {
      title: "Back-end Developer",
      description: "I create and manage server-side applications and databases to power web apps.",
      icon: <FaDatabase size={48} />,
      cardName: "backend",
    },
    {
      title: "Front-end Developer",
      description: "Specializing in user interfaces, I bring designs to life with interactive web features.",
      icon: <FaLaptopCode size={48} />,
      cardName: "frontend",
    },
    {
      title: "Web Designer",
      description: "I craft visually appealing, user-friendly designs that improve the user experience.",
      icon: <FaPaintBrush size={48} />,
      cardName: "designer",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="service-section"
      ref={ref}
      className="relative flex flex-col items-center justify-start font-vt323 px-4 mt-0 lg:mt-2 w-full pt-28 lg:pt-60 pb-20 lg:pb-52"
    >
      {/* Title */}
      <motion.h2
        className="text-lg sm:text-2xl md:text-4xl font-extrabold text-center mb-4 text-blue-400 animate-pulse" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        My Services
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-xs sm:text-sm md:text-base font-vt323 animate-fadeIn text-center max-w-screen-lg mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        I offer a range of services, including full-stack development, back-end
        development, front-end development, and web design. Each service is
        tailored to your specific needs to ensure optimal results for your
        project.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl">
        {services.map((service, index) => (
          <motion.div
            key={service.cardName}
            className={`relative flex flex-col items-center justify-start rounded-lg p-8 space-y-4 transform transition-all duration-500 ease-out ${
              hoveredCard === service.cardName
                ? "bg-black bg-opacity-50 shadow-[0_15px_30px_rgba(59,130,246,0.8)]"
                : "bg-transparent border border-gray-600 shadow-lg"
            } ${isDarkMode ? "text-white" : "text-black"}`}
            initial={{
              opacity: 0,
              x: `${Math.random() * 50 - 25}px`,
              y: `${Math.random() * 50 - 25}px`,
              scale: 0.8,
              rotateX: 20,
              rotateY: 20,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : `${Math.random() * 50 - 25}px`,
              y: inView ? 0 : `${Math.random() * 50 - 25}px`,
              scale: inView ? 1 : 0.8,
              rotateX: inView ? 0 : 20,
              rotateY: inView ? 0 : 20,
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.3,
              ease: "easeOut",
              opacity: { duration: 0.5 },
              transform: { duration: 1.2, ease: "easeOut" },
            }}
            onMouseEnter={() => setHoveredCard(service.cardName)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <motion.div
              className={`text-blue-400 animate-bounce ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <motion.h3
              className={`text-xl font-semibold text-center ${isDarkMode ? "text-white" : "text-black"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className={`text-sm text-center ${isDarkMode ? "text-white" : "text-black"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              {service.description}
            </motion.p>

            {/* Arrow Icon */}
            <motion.div
              className="absolute bottom-4 right-4 transform rotate-45 text-blue-500"
              animate={{
                opacity: hoveredCard === service.cardName ? 1 : 0,
                x: hoveredCard === service.cardName ? 10 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <FaArrowRight size={24} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


export default App;
