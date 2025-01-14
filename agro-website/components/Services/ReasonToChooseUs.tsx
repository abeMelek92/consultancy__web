"use client";

import { motion } from "framer-motion";

// Data for the unique selling points
const reasonsToChooseUs = [
  {
    icon: "🌾", // Icon representing Trust
    title: "Trusted by Farmers Nationwide",
    description:
      "Our solutions have been proven across farms of all sizes, helping farmers achieve their goals efficiently.",
  },
  {
    icon: "🚜", // Icon representing Innovation
    title: "Innovative Technology",
    description:
      "We incorporate the latest technologies for precision farming, ensuring top-tier performance and sustainability.",
  },
  {
    icon: "🔒", // Icon representing Security
    title: "Secure and Reliable",
    description:
      "With cutting-edge security and reliability, we guarantee safe solutions and consistent results.",
  },
  {
    icon: "💚", // Icon representing Sustainability
    title: "Sustainable Practices",
    description:
      "Our methods prioritize sustainability, helping you grow while protecting the environment for future generations.",
  },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 150 },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mt-4"
          >
            Trusted by farmers nationwide and committed to delivering the best.
          </motion.p>
        </motion.div>

        {/* USPs Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasonsToChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
