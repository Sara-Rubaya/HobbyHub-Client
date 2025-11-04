import React from 'react';
import { Link } from 'react-router';
import { useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Connect Through Hobbies!'],
    loop: 0,
  });

  return (
    <div className="hero min-h-[80vh] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-md my-10 flex items-center justify-center">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-blue-800 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {text}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          Join like-minded people, explore your passions, and create meaningful connections. Discover hobby groups, share your experiences, and grow together!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Link to="/all-groups">
            <button className="btn btn-primary hover:bg-gray-800 text-white px-8 py-3">
              Explore Groups
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
