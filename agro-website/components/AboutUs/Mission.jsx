"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For smooth animations

export default function AboutUsMission() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animations on mount
  }, []);

  return (
    <section className="about-us__mission py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <img
            src="/hero-back.jpg"
            alt="Our Mission"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At{" "}
            <span className="font-semibold text-green-600">[Company Name]</span>
            , we are committed to empowering farmers through innovative,
            sustainable practices. We envision a future where agriculture
            thrives in harmony with nature.
          </p>

          {/* Fancy List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4">
                ✓
              </span>
              <span className="text-gray-700">
                Providing expert advice for sustainable farming practices.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4">
                ✓
              </span>
              <span className="text-gray-700">
                Delivering cutting-edge solutions to boost yields.
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mr-4">
                ✓
              </span>
              <span className="text-gray-700">
                Building long-term partnerships with farmers globally.
              </span>
            </li>
          </ul>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
