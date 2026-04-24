"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BoxCricketPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/box.jpg"
          alt="Box Cricket"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Box Cricket
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Fast-paced cricket action in a modern enclosed arena
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Book Turf
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
              Why Play Box Cricket?
            </h2>

            <p>
              Box Cricket in Mysore has gained immense popularity among players
              of all ages. The enclosed format makes the game faster,
              more exciting, and highly strategic.
            </p>

            <ul className="space-y-2">
              <li>🏏 Fast-paced gameplay</li>
              <li>⚡ Improves reflexes & coordination</li>
              <li>👥 Perfect for teams & corporate matches</li>
              <li>🎯 Fun & competitive environment</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/boxc.jpg"
              alt="Box cricket ground"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Facility Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text text-black text-center">
            {[
              "Premium Turf Surface",
              "Floodlights for Night Matches",
              "Spacious Enclosed Arena",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/box.jpg"
                alt="Box cricket match"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/boxc.jpg"
                alt="Box cricket turf"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Play?
          </h2>

          <p className="text-gray-300 mb-6">
            Book your slot now and experience the thrill of box cricket at ARC Sportzone.
          </p>

          <Link
            href="/contact"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-medium"
          >
            Book Now
          </Link>
        </div>
      </section>

    </main>
  );
} 