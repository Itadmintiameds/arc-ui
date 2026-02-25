"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "@/components/about/Stats";
import Facilities from "@/components/about/Facilities";
import SportsShowcase from "@/components/SportsShowcase";

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ===== HERO ===== */}
      <section className="relative h-[280px] md:h-[360px] overflow-hidden flex items-center justify-center">

        <Image
          src="/images/about-banner.jpg"
          alt="About ARC Sportzone"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/75" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide drop-shadow-lg">
            About ARC Sportzone
          </h1>
          <p className="text-[#D6D1C7] mt-3 max-w-xl mx-auto">
            Mysuru’s premier destination for sports, fitness and excellence
          </p>
        </motion.div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700 leading-relaxed text-lg"
          >
            <p>
              Welcome to <strong>ARC SportZone</strong>, the
              <strong> best sports club in Mysore</strong>, where passion for
              sports, fitness, and teamwork comes to life. We are more than
              just a sports facility — we are a thriving hub for athletes,
              fitness enthusiasts, and families who love to stay active.
            </p>

            <p>
              At <strong>ARC SportZone</strong>, we believe sports have the
              power to inspire, transform, and bring people together. Our goal
              is to create an inclusive, high-energy environment where
              individuals of all ages can develop their talents and achieve
              their fitness goals.
            </p>

            <p>
              Recognized as the <strong>best sports club in Mysore</strong>, we
              offer badminton, futsal, cricket, fitness training and more —
              supported by world-class infrastructure and expert coaching.
            </p>
          </motion.div>

          {/* RIGHT — VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/arcvideo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== STATS (PREMIUM TRUST STRIP) ===== */}
      <Stats />

      {/* ===== VISION & MISSION ===== */}
      <section className="py-28 relative overflow-hidden">

        {/* background image */}
        <Image
          src="/images/sports-bg2.jpg"
          alt="ARC Vision Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-[#E7E2D8]">

          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To be the best sports club in Mysore, inspiring people of all
                ages to embrace sports, fitness, and teamwork while fostering
                a culture of excellence and sportsmanship.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-200 leading-relaxed">
                We inspire passion for sports and fitness through world-class
                facilities, expert coaching, and a supportive community that
                builds character, teamwork, and resilience.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <SportsShowcase />

    </main>
  );
}