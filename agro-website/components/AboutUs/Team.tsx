"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Gemechis D.",
    role: "CEO & Founder",
    image: "/team.jpg",
    description:
      "Gemechis brings over 20 years of experience in sustainable farming.",
  },
  {
    name: "Anatoli C",
    role: "Head of R&D",
    image: "/pro.jpg",
    description:
      "Anatoli is an expert in innovative farming technologies and strategies.",
  },
  {
    name: "Diriba M.",
    role: "Agricultural Consultant",
    image: "/team-2.jpg",
    description:
      "Diriba specializes in crop management and yield optimization.",
  },
  {
    name: "Chala M.",
    role: "Agricultural Consultant",
    image: "/team.jpg",
    description: "Chala specializes in crop management and yield optimization.",
  },
];

export default function AboutUsTeam() {
  return (
    <section className="about-us__team py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="team-slider"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
