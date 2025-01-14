// components/WhoWeAre.jsx
"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaLeaf, FaPeopleCarry } from "react-icons/fa"; // Import icons
import { useInView } from "react-intersection-observer"; // To detect when section is in view

const WhoWeAre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger animation when 30% of the section is visible
  });

  return (
    <section ref={ref} className="bg-gray-50 py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl mb-12">
          We are a team of experts dedicated to providing sustainable farming
          solutions, empowering farmers with the knowledge and tools to succeed
          in today's world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <FaHandshake className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Partnership</h3>
            <p className="text-center text-gray-600">
              We believe in building strong, lasting partnerships with our
              clients to ensure their success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <FaLeaf className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-center text-gray-600">
              We are committed to sustainable farming practices that promote
              environmental and economic stability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <FaPeopleCarry className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-center text-gray-600">
              We prioritize community engagement, providing resources and
              support to enhance the lives of farmers.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
