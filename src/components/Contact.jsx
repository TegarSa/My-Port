import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaTwitter } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <div
      className={`min-h-screen px-6 lg:pt-32 lg:pb-32 pt-24 relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
      id="contact-section"
    >
      <div className="fixed top-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>

      <div className="relative z-10 text-center">
        <motion.h1
          className={`sm:text-2xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} font-vt323 text-blue-glow`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className={`mt-4 text-sm sm:text-xs lg:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-vt323`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Get in touch or leave your feedback below.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 px-4 lg:px-20 relative pb-20">
        {/* Left Cards */}
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-6 w-full">
          {/* Contact Card */}
          <motion.div
            className={`rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-sm sm:text-xs lg:text-lg font-bold font-vt323 mb-4">Contact Information</h3>
            <ul className="space-y-4 font-vt323 text-sm sm:text-xs lg:text-lg">
              {[
                { icon: <FaPhoneAlt size={20} />, text: "+62 812 254 877 45" },
                { icon: <FaEnvelope size={20} />, text: "email@example.com" },
                { icon: <FaMapMarkerAlt size={20} />, text: "Yogyakarta, Indonesia" },
                { icon: <FaDiscord size={20} />, text: "discord.gg/zhongxinatg"},
                { icon: <FaTwitter size={20} />, text: "@username" },
              ].map((item, i) => (
                <motion.li
                  className="flex items-center space-x-4"
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Card */}
          <motion.div
            className={`rounded-lg p-6 shadow-lg text-sm sm:text-xs lg:text-lg hover:shadow-2xl transition-shadow duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="text-sm sm:text-xs lg:text-lg font-bold font-vt323 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Other Info
            </motion.h3>
            <motion.p
              className={`font-vt323 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Feel free to connect with me for collaboration, freelance projects, or any inquiries!
            </motion.p>
          </motion.div>
        </div>

        {/* Right Card */}
        <motion.div
          className={`col-span-1 lg:col-span-2 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-sm sm:text-xs lg:text-lg font-bold font-vt323 mb-4">Leave Your Feedback</h3>
          <form onSubmit={handleSubmit} className="space-y-6 text-sm sm:text-xs lg:text-lg">
            {[
              { label: "Your Name", type: "text", id: "name", placeholder: "Enter your name" },
              { label: "Your Message", type: "textarea", id: "message", placeholder: "Write your message here", rows: 5 },
            ].map((field, i) => (
              <motion.div
                className="flex flex-col"
                key={field.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.8 + i * 0.2 }}
              >
                <label htmlFor={field.id} className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-vt323`}>
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} border border-gray-600 focus:ring-2 focus:ring-blue-500 font-vt323`}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} border border-gray-600 focus:ring-2 focus:ring-blue-500 font-vt323`}
                    required
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className={`px-6 py-3 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-700'} text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-vt323 `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 2, ease: "easeInOut" },
            }}
          >
            <div className={`p-10 lg:p-20 rounded-lg shadow-2xl text-center font-vt323 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              <h3 className="text-2xl font-bold mb-4">Thank you for your feedback!</h3>
              <p className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your message has been received. We appreciate your time!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
