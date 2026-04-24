"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BadmintonPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/hero4.jpeg"
          alt="Badminton"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Badminton
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Train, compete, and excel with professional badminton coaching
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Join Now
            </Link>

            <Link
              href="/sports"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Sports
            </Link>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Badminton?
            </h2>

            <p>
              Badminton is one of the fastest-growing sports globally,
              combining speed, agility, and strategy.
            </p>

            <ul className="space-y-2">
              <li>🏸 Improve agility & reflexes</li>
              <li>⚡ Boost stamina & fitness</li>
              <li>🎯 Enhance focus & strategy</li>
              <li>👥 Fun for all skill levels</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/badminton.jpg"
              alt="Badminton coaching"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== COACHES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Coaches
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[{
              name: "Coach Bhemaiah",
              desc: "Expert in training players of all levels with focus on discipline and performance."
            },
            {
              name: "Coach Hariprasad",
              desc: "Specializes in skill development, agility, and advanced training techniques."
            }].map((coach, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {coach.name}
                </h3>
                <p className="text-gray-700">{coach.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== INDIA PROUD ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            India is proud of
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/Srikanth1.jpg",
                name: "Srikanth Kidambi",
              },
              {
                img: "/images/saina-Nehwal.jpg",
                name: "Saina Nehwal",
              },
              {
                img: "/images/pv-sindhu.jpg",
                name: "P V Sindhu",
              },
            ].map((player, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-[260px] w-full">
                  <Image
                    src={player.img}
                    alt={player.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center font-medium text-gray-700">
                  {player.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/badminton-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Badminton Journey
          </h2>

          <p className="text-gray-200 mb-6">
            Train with professional coaches and elevate your game.
          </p>

          <Link
            href="/contact"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-medium"
          >
            Join Now
          </Link>
        </div>
      </section>

    </main>
  );
}