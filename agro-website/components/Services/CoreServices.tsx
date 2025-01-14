"use client";

import { motion } from "framer-motion";

// Data for services
const services = [
  {
    icon: "🌱",
    title: "Precision Farming",
    description: "Optimize your yields with cutting-edge farming technology.",
  },
  {
    icon: "🧪",
    title: "Soil Analysis",
    description: "Comprehensive soil testing for better crop management.",
  },
  {
    icon: "💧",
    title: "Irrigation Consulting",
    description: "Efficient water management tailored to your needs.",
  },
  {
    icon: "🛡️",
    title: "Crop Protection",
    description: "Protect your crops with eco-friendly pest solutions.",
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
    scale: 1.05,
    transition: { type: "spring", stiffness: 150 },
  },
};

export default function CoreServices() {
  return (
    <section className="py-16 bg-gray-50">
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
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mt-4"
          >
            Empowering agriculture with tailored solutions for every need.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
