"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const sports = [
  {
    title: "Resto Bar",
    image: "/images/restobar.jpg",
    link: "/restaurants",
  },
  {
    title: "Badminton",
    image: "/images/badminton.jpg",
    link: "/sports/badminton",
  },
  {
    title: "Futsal",
    image: "/images/futsal.jpg",
    link: "/sports/futsal",
  },
  {
    title: "Aqua Zone",
    image: "/images/aqua.jpg",
    link: "/sports/aqua",
  },
  {
    title: "Gym",
    image: "/images/gym.jpg",
    link: "/sports/gym",
  },
];

export default function SportsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Facilities
          </h2>
          <p className="text-gray-600 mt-3">
            World-class infrastructure for every athlete
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {sports.map((sport, index) => (
            <SwiperSlide key={index}>
              <Link href={sport.link}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">

                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={sport.image}
                      alt={sport.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>

                  {/* Title */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition">
                      {sport.title}
                    </h3>
                  </div>

                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}