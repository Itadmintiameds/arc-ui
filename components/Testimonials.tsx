"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Badminton Player",
    text: "ARC Sportzone has completely transformed my game. The coaching and facilities are top-notch!",
    initials: "RS",
  },
  {
    name: "Priya Nair",
    role: "Parent",
    text: "My child loves training here. The environment is safe, professional, and very motivating.",
    initials: "PN",
  },
  {
    name: "Karthik R",
    role: "Fitness Member",
    text: "One of the best sports complexes in Mysuru. Highly recommended for all age groups.",
    initials: "KR",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 mt-3 mb-14 max-w-2xl mx-auto">
          Trusted by athletes, parents, and fitness enthusiasts across Mysuru
        </p>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          loop
          className="pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              
              <div className="max-w-3xl mx-auto">
                
                {/* Premium Card */}
                <div className="relative bg-white/80 backdrop-blur-lg border border-white/40 p-10 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-500">
                  
                  {/* Quote icon */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl shadow-lg">
                    ❝
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-8">
                    {t.text}
                  </p>

                  {/* User */}
                  <div className="flex flex-col items-center gap-3">
                    
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {t.initials}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>

                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}