"use client";

import { motion } from "framer-motion";

const visionItems = [
  {
    icon: "🌱",
    title: "Sustainability",
    description:
      "Promoting eco-friendly agricultural practices for a greener tomorrow.",
  },
  {
    icon: "🌾",
    title: "Innovation",
    description:
      "Leveraging modern technology to revolutionize farming methods.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Building lasting partnerships with farmers and stakeholders.",
  },
];

export default function VisionSection() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Smooth transition for the container
        staggerChildren: 0.3, // Delay between child animations
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring", // Spring effect for smooth scaling
        stiffness: 70, // Adjust spring stiffness for smoothness
        damping: 12, // Reduce overshooting
      },
    },
    hover: {
      scale: 1.05, // Scale up slightly on hover
      transition: { type: "spring", stiffness: 150 },
    },
  };

  return (
    <section className="vision-section py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-800"
          >
            Our Vision
          </motion.h2>
          <motion.p variants={item} className="text-lg text-gray-600 mt-4">
            Empowering agriculture through innovation, sustainability, and
            collaboration.
          </motion.p>
        </motion.div>

        {/* Vision Items */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-wrap justify-center gap-8"
        >
          {visionItems.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-100 hover:shadow-xl"
            >
              <div className="text-6xl mb-4">{itemData.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {itemData.title}
              </h3>
              <p className="text-gray-600">{itemData.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
