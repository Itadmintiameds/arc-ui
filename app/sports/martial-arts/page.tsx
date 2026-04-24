"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MartialArtsPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/martial-a-banner.webp"
          alt="Martial Arts"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Martial Arts
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Strength, discipline, and self-defense training at ARC Sportzone
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
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Martial Arts?
            </h2>

            <p>
              Our <span className="font-semibold">Martial Arts Classes in Mysore</span> offer a perfect blend of fitness, discipline, and self-defense training.
            </p>

            <ul className="space-y-2">
              <li>🥋 Improve strength & flexibility</li>
              <li>⚡ Boost reflexes & focus</li>
              <li>🧠 Develop discipline & confidence</li>
              <li>🛡 Learn practical self-defense</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/martial-art.webp"
              alt="Martial arts training"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== KUNG FU SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Kung Fu Training
          </motion.h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-gray-900">ARC Sportzone</span>,
            we offer one of the best Kung Fu training programs in Mysore.
          </p>

          <p className="text-gray-600">
            Learn techniques, discipline, and control under expert instructors in a professional environment.
          </p>

        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Training Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-black text-center">
            {[
              "Strength & Conditioning",
              "Self-Defense Skills",
              "Mental Discipline",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
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
                src="/images/martial-art.webp"
                alt="Martial arts training"
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
                src="/images/kung-fu.jpg"
                alt="Kung Fu practice"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <div className="relative h-[340px] w-full md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/martial-arts2.jpg"
                alt="Martial arts session"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Martial Arts Journey
          </h2>

          <p className="text-gray-300 mb-6">
            Train with expert instructors and unlock your full potential.
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