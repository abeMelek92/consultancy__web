"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the page is the home page
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? "bg-white text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.img
          src="/Logo.svg"
          alt="DEBTHS GLOBAL"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="h-24"
        />
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Services", "OurExperiences", "Contact"].map(
            (label, index) => {
              const link = `/${label.toLowerCase()}`;
              return (
                <motion.a
                  key={index}
                  href={link === "/home" ? "/" : link}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`text-lg transition-transform duration-300 ${
                    !isHomePage || scrolled
                      ? "text-black hover:text-green-600"
                      : "text-white hover:text-green-600"
                  }`}
                >
                  {label}
                </motion.a>
              );
            }
          )}
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">&times;</span> // Close icon
            ) : (
              <span className="text-2xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            scrolled || !isHomePage ? "bg-white" : "bg-transparent"
          } text-black`}
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Services", "OurExperiences", "Contact"].map(
              (label, index) => {
                const link = `/${label.toLowerCase()}`;
                return (
                  <motion.a
                    key={index}
                    href={link === "/home" ? "/" : link}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`text-lg transition-transform duration-300 ${
                      !isHomePage || scrolled
                        ? "text-black hover:text-green-600"
                        : "text-white hover:text-green-600"
                    }`}
                  >
                    {label}
                  </motion.a>
                );
              }
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
