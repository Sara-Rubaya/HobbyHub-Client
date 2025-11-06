import React from 'react';
import { Link } from 'react-router';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

// Replace this with your actual image URL or local path
const ILLUSTRATION_URL = 'https://i.ibb.co.com/r2t95NLr/Banner.webp'; 

const Banner = () => {
  const [text] = useTypewriter({
    words: ['HobbyHub'], 
    loop: 0,
    typeSpeed: 100, 
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
   
    <div className=" bg-gradient-to-br from-blue-100  to-cyan-100 my-10 shadow-2xl rounded-2xl overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full p-8 lg:p-16">
        
        {/* === Left Column: Text Content === */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            // 👇 MODIFIED: Added text gradient classes here
            className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-800" 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {text}
          </motion.h1>

          <motion.p
            className="text-base text-gray-700 max-w-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Unleash your potential! Join the ultimate community designed to help you find your people, master new skills, and turn passions into reality. Your next great adventure starts here.
          </motion.p>

          <motion.ul
            className="text-base text-gray-800 space-y-3 list-none font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li className="flex items-center">
              <span className="text-pink-600 mr-2 text-xl"></span> Instant Connection: Find hobby groups and local meetups in seconds.
            </li>
            <li className="flex items-center">
              <span className="text-pink-600 mr-2 text-xl"></span> Expert Guidance: Get advice and collaborate with passionate experts worldwide.
            </li>
            <li className="flex items-center">
              <span className="text-pink-600 mr-2 text-xl"></span> Exclusive Resources: Access tools and content tailored for your craft.
            </li>
          </motion.ul>

          <motion.div
            className="pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            
            <Link to="/all-groups">
              <button 
                className="btn bg-blue-400 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest shadow-xl transition-transform transform hover:scale-105"
                 
              >
                SIGN UP NOW
              </button>
            </Link>
          </motion.div>

        </motion.div>

        {/* --- Right Column: Illustration --- */}
        <motion.div
          className="flex justify-center lg:justify-end items-center h-full order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src={ILLUSTRATION_URL} 
            alt="Person riding a bicycle, symbolizing a hobby" 
            className="max-h-[60vh] w-auto object-contain"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;