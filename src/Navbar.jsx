import React, { useState, useEffect } from "react";
import { HiOutlineMusicNote, HiOutlineStop, HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import "./components/About";
import profilePic from './assets/My Profile.jpeg';
import mondstadtStarlit from './assets/Mondstadt Starlit.mp3';

const Navbar = ({ isDarkMode }) => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutPage, setIsAboutPage] = useState(false);
  const audioRef = React.useRef();
  const location = useLocation();

  const toggleAudio = () => {
    audioPlaying ? audioRef.current.pause() : audioRef.current.play();
    setAudioPlaying(!audioPlaying);
  };

  useEffect(() => {
    setIsAboutPage(location.pathname === "/about");
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-8 left-1 w-full z-50 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className={`text-${isDarkMode ? 'white' : 'black'} font-bold text-base mt-4`}>
          Tegar Satria
        </div>
        <nav className={`hidden lg:block ${isDarkMode ? 'bg-gray-600/60' : 'bg-gray-300/60'} backdrop-blur-lg border border-gray-500 px-8 py-2 rounded-full mt-2 transition-transform duration-300 group`}>
          <ul className="flex items-center space-x-6 text-xs sm:text-sm md:text-base font-vt323">
            {["Home", "About", "Portofolio", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group transition duration-300 ease-in-out"
                >
                  <span className="absolute inset-0 scale-75 bg-blue-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-100 transition-all duration-500"></span>
                  <span className="relative z-10 group-hover:text-blue-400 group-hover:scale-105 transition-transform duration-500">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center lg:space-x-6 mt-2 space-x-2">
          <button
            onClick={toggleAudio}
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 mr-10 lg:mr-0"
          >
            {audioPlaying ? <HiOutlineStop size={22} /> : <HiOutlineMusicNote size={22} />}
          </button>

          <Link to="">
            <div
              className={`${
                isAboutPage
                  ? "absolute w-48 h-48 top-[300%] right-48 transform translate-x-1/2 animated-border"
                  : "absolute w-10 h-10 top-4 right-4 mr-2 lg:mr-8 lg:top-4"
              } rounded-full overflow-hidden transition-all duration-700 ease-in-out`}
            >
              <img
                src={profilePic}
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <button
            className={`lg:hidden text-white text-2xl relative z-50 ${
              isMenuOpen ? "border-blue-400" : "border-transparent"
            } border p-1 rounded-full transition-all duration-500`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </div>

      

      <audio ref={audioRef} loop>
        <source src={mondstadtStarlit} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </header>
  );
};

export default Navbar;
