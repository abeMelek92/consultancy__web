"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Updated services data
const services = [
  {
    icon: "🌾", // Agriculture
    title: "Agricultural Consultancy",
    description:
      "Support for sustainable business practices, enhancing productivity and introducing innovative solutions.",
  },
  {
    icon: "🏗️", // Construction
    title: "Construction Management",
    description:
      "Strategic insights and support for completing construction projects on time, within budget, and to the highest standards.",
  },
  {
    icon: "💼", // Wholesale and Retail Trade
    title: "Wholesale & Retail Consulting",
    description:
      "Helping businesses in trade, hospitality, and retail sectors improve operations, boost customer experience, and drive growth.",
  },
  {
    icon: "🌍", // Import and Export
    title: "Import & Export Business Solutions",
    description:
      "Expert guidance on regulations, logistics, and market entry strategies to successfully navigate international markets.",
  },
  {
    icon: "🚚", // Transport & Storage
    title: "Transport & Logistics Consulting",
    description:
      "Tailored solutions to enhance efficiency and reliability in transportation, logistics, and communication systems.",
  },
  {
    icon: "💡", // Financial Services
    title: "Financial & Business Services",
    description:
      "Risk management, investment strategies, and process optimization for financial institutions, insurance companies, and business service providers.",
  },
  {
    icon: "🏥", // Community and Social Services
    title: "Community & Social Services",
    description:
      "Strategic insights and support for organizations focused on community, social, and personal services to maximize impact.",
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
    <section className="py-16 mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
          >
            Our Major Consultancy Areas
          </motion.h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="team-slider"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="team-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="p-6 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                      {service.icon}
                    </h1>
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </p>
                    <p className="text-gray-700 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
