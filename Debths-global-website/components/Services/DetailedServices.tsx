"use client";

import { motion } from "framer-motion";

// Updated data for detailed services
const detailedServices = [
  {
    title: "Agricultural Consultancy",
    description:
      "Support for sustainable business practices, enhancing productivity and introducing innovative solutions.",
    image: "/hero-2.jpg", // Replace with the actual image for agriculture
    benefits: [
      "Guidance on sustainable business methods.",
      "Improved productivity and crop management.",
      "Access to innovative agricultural technologies.",
    ],
  },
  {
    title: "Construction Management",
    description:
      "Strategic insights and support for completing construction projects on time, within budget, and to the highest standards.",
    image: "/construction.jpg", // Replace with your service image
    benefits: [
      "Project planning and management expertise.",
      "On-time project completion with cost efficiency.",
      "Expert guidance on construction compliance and regulations.",
    ],
  },

  {
    title: "Import & Export Business Solutions",
    description:
      "Expert guidance on regulations, logistics, and market entry strategies to successfully navigate international markets.",
    image: "/import-export.jpg", // Replace with your service image
    benefits: [
      "International market analysis and strategies.",
      "Efficient logistics and regulatory support.",
      "Expert guidance on market entry and expansion.",
    ],
  },
  {
    title: "Transport & Logistics Consulting",
    description:
      "Tailored solutions to enhance efficiency and reliability in transportation, logistics, and communication systems.",
    image: "/logistics.jpg", // Replace with your service image
    benefits: [
      "Customized logistics and transport solutions.",
      "Improved supply chain management.",
      "Optimized routes for reduced costs and environmental impact.",
    ],
  },
  {
    title: "Financial & Business Services",
    description:
      "Risk management, investment strategies, and process optimization for financial institutions, insurance companies, and business service providers.",
    image: "/financial.jpg", // Replace with your service image
    benefits: [
      "Expert financial consulting and investment strategies.",
      "Risk management for financial stability.",
      "Process optimization to improve operational efficiency.",
    ],
  },
  {
    title: "Community & Social Services",
    description:
      "Strategic insights and support for organizations focused on community, social, and personal services to maximize impact.",
    image: "/inspiration.jpg", // Replace with your service image
    benefits: [
      "Expert guidance on social impact strategies.",
      "Improved community engagement and support.",
      "Sustainable solutions for social challenges.",
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
    scale: 1.1,
    transition: { type: "spring", stiffness: 150 },
  },
};

export default function DetailedServices() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Our Expert Consultancy Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 md:w-3/4 mx-auto"
          >
            Discover our comprehensive range of services designed to help you
            succeed in a variety of industries. Whether it's sustainable
            business, construction, or logistics, our team has the expertise you
            need.
          </motion.p>
        </motion.div>

        {/* Detailed Services Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover object-center"
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
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
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
