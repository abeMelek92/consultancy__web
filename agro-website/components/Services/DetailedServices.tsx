"use client";

import { motion } from "framer-motion";

// Sample data for detailed services
const detailedServices = [
  {
    title: "Precision Farming",
    description:
      "Utilize modern technology to optimize every aspect of your farm’s performance.",
    image: "/hero-back.jpg", // Replace with your service image
    benefits: [
      "Increased yield through data-driven strategies.",
      "Reduced resource waste (water, fertilizers).",
      "Accurate planting and crop management.",
    ],
  },
  {
    title: "Soil Analysis",
    description:
      "Get accurate soil tests for better management and enhanced productivity.",
    image: "/soil.jpg", // Replace with your service image
    benefits: [
      "Identifies soil health and nutrient levels.",
      "Recommendations for soil amendments.",
      "Helps prevent over-fertilization and soil degradation.",
    ],
  },
  {
    title: "Irrigation Consulting",
    description:
      "Efficient irrigation systems tailored to your farm's needs for maximum water usage.",
    image: "/hero-2.jpg", // Replace with your service image
    benefits: [
      "Customized irrigation system design.",
      "Improved water usage efficiency.",
      "Reduced irrigation costs and maintenance.",
    ],
  },
  {
    title: "Crop Protection",
    description:
      "Protect your crops with environmentally friendly pest management solutions.",
    image: "/about.jpg", // Replace with your service image
    benefits: [
      "Targeted pest control for higher yields.",
      "Reduced chemical usage with sustainable methods.",
      "Safe for the environment and pollinators.",
    ],
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

export default function DetailedServices() {
  return (
    <section className="py-16 bg-white">
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
            Detailed Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mt-4"
          >
            In-depth solutions tailored to enhance every aspect of your farm's
            productivity.
          </motion.p>
        </motion.div>

        {/* Detailed Services Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="text-gray-600 list-disc pl-5 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
