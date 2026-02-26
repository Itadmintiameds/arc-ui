"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "/images/hero1.png",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpeg",
  "/images/hero7.png",
  "/images/hero8.jpg",
];

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-[320px] md:h-[420px] lg:h-[520px]"
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              
              {/* Image */}
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-contain"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Welcome to ARC Sportzone
                  </h2>
                  <p className="mb-6 text-sm md:text-lg">
                    Mysuru's Premier Sports & Fitness Destination
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
                    Book Now
                  </button>
                </div>
              </div> */}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}