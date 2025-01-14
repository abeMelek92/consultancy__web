"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Ensure it runs only once when the component mounts

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl font-bold text-gray-800"
        >
          My Brand
        </motion.a>
        <div className="flex items-center space-x-6">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg text-gray-800 hover:text-green-600 transition-transform duration-300"
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg text-gray-800 hover:text-green-600 transition-transform duration-300"
          >
            About
          </motion.a>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg text-gray-800 hover:text-green-600 transition-transform duration-300"
          >
            Services
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-lg text-gray-800 hover:text-green-600 transition-transform duration-300"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
