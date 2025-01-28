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
    <header className={`fixed top-4 left-0 w-full z-50 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className={`text-${isDarkMode ? 'white' : 'black'} font-bold text-xl mt-6`}>
          Tegar Satria
        </div>
        <nav className={`hidden lg:block ${isDarkMode ? 'bg-gray-600/60' : 'bg-gray-300/60'} backdrop-blur-lg border border-gray-500 px-11 py-2 rounded-full mt-4`}>
          <ul className="flex items-center space-x-6 text-lg font-vt323">
            {["Home", "About", "Portofolio", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="relative group transition duration-300 ease-in-out"
                >
                  <span className="absolute inset-0 scale-50 bg-blue-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500"></span>
                  <span className="relative z-10 group-hover:text-blue-400 group-hover:scale-115 transition-transform duration-500">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-6 mt-4">
          <button
            onClick={toggleAudio}
            className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-500 mr-3"
          >
            {audioPlaying ? <HiOutlineStop size={24} /> : <HiOutlineMusicNote size={24} />}
          </button>

          <Link to="">
            <div
              className={`${
                isAboutPage
                  ? "absolute w-64 h-64 top-[350%] right-64 transform translate-x-1/2 animated-border"
                  : "absolute w-10 h-10 top-4 right-4 mr-10 lg:top-5"
              } rounded-full overflow-hidden transition-all duration-700 ease-in-out`}
            >
              <img
                src={profilePic} 
                alt="Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>


          <button className="lg:hidden text-white text-3xl ease-in-out" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${isMenuOpen ? "block" : "hidden"} lg:hidden bg-gray-800/80 border border-transparent absolute top-full left-0 w-full mt-3`}>
        <ul className="flex flex-col items-start text-white font-vt323 p-4 space-y-4">
          {["Home", "About", "Portofolio", "Contact"].map((item, i) => (
            <li key={i}>
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="py-2 hover:text-blue-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <audio ref={audioRef} loop>
        <source src={mondstadtStarlit} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </header>
  );
};

export default Navbar;
