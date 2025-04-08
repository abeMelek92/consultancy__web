"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { image } from "framer-motion/client";

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Amina Tesfaye",
      feedback:
        "DEBTHs global helped us increase our crop yield by 30%. Their expertise is unmatched!",
      image: "/avatar.jpg",
    },
    {
      name: "Samuel Kebede",
      feedback:
        "Thanks to their sustainable practices, we’ve reduced costs while protecting the environment.",
      image: "/avatar-2.jpg",
    },
    {
      name: "Fatima Abebe",
      feedback:
        "Their guidance on market entry strategies helped us expand our business internationally.",
      image: "/avatar-old.jpg",
    },
    {
      name: "Mekonnen Desta",
      feedback:
        "The team’s advice on sustainable energy solutions saved us significant costs on utilities.",
      image: "/avatar-2.jpg",
    },
    {
      name: "Selamawit Tadesse",
      feedback:
        "They streamlined our manufacturing processes, improving efficiency across the board.",
      image: "/avatar.jpg",
    },
  ];

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div>
          {/* Section Header */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-5xl font-bold text-green-700 text-center p-4"
          >
            Testimonials
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="team-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  {/* Image Holder */}
                  <div className="relative w-full h-50 bg-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Testimonial Content */}
                  <div className="p-6">
                    <h1 className="text-md font-bold text-gray-800 text-center">
                      {testimonial.name}
                    </h1>
                    <p className="text-gray-700 text-sm text-center">
                      {testimonial.feedback}
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
