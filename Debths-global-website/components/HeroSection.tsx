"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Importing modules correctly

// Initialize Swiper with modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const slides = [
  {
    image: "/hero-2.jpg",
    title: "Empowering Agriculture Through Expertise",
    description: "Innovative solutions for sustainable business and forestry.",
  },
  {
    image: "/manufacturing.jpg",
    title: "Optimizing Manufacturing Processes",
    description:
      "Cutting-edge technologies to enhance efficiency and productivity.",
  },
  {
    image: "/energy-management.jpg",
    title: "Sustainable Energy & Waste Management",
    description:
      "Expert guidance for energy production, water supply, and waste systems.",
  },
  {
    image: "/construction.jpg",
    title: "Excellence in Construction",
    description:
      "Strategic support to complete projects on time and within budget.",
  },
  {
    image: "/import-export.jpg",
    title: "Simplifying Import & Export",
    description:
      "Insights into international trade, regulations, and logistics.",
  },

  {
    image: "/finance-realestate.jpg",
    title: "Finance & Real Estate Excellence",
    description: "Optimizing risk management, investments, and processes.",
  },
  {
    image: "/inspiration.jpg",
    title: "Impactful Community Services",
    description: "Strategic insights for meaningful contributions to society.",
  },
];

export default function HeroSection() {
  return (
    <section className="h-screen relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true} // Enable navigation buttons
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }} // Autoplay configuration
        loop={true} // Infinite loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center">
                <div className="text-white max-w-xl ml-32 bg-black bg-opacity-20 p-4 rounded-lg shadow-lg">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <button className="px-6 py-3 bg-gray-500 hover:bg-green-700 rounded-lg text-white font-medium transform transition-transform duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
