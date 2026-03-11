"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const sports = [
  { title: "Resto Bar", image: "/images/restobar.jpg", link: "/restaurants" },
  { title: "Badminton", image: "/images/badminton.jpg", link: "/sports/badminton" },
  { title: "Oval Ground", image: "/images/futsal.jpeg", link: "/sports/futsal" },
  { title: "Aqua Zone", image: "/images/aqua.jpg", link: "/sports/aqua" },
  { title: "Gym", image: "/images/gym.jpg", link: "/sports/gym" },
];

export default function SportsShowcase() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-900">
            Explore Our Facilities
          </h2>

          {/* Elegant Gold Accent */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />

          <p className="text-gray-600 mt-6 text-lg">
            World-class infrastructure for elite performance
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={32}
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
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={sport.image}
                      alt={sport.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Soft Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

                    {/* Title */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <h3 className="text-xl font-medium tracking-wide text-white">
                        {sport.title}
                      </h3>

                      {/* Gold Underline Animation */}
                      <div className="h-[2px] w-0 bg-amber-500 mx-auto mt-3 group-hover:w-14 transition-all duration-500" />
                    </div>
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