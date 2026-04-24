"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function YogaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full flex items-center justify-center">
        <Image
          src="/images/yoga.jpg"
          alt="Yoga"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Yoga
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Balance your body, mind, and soul with expert yoga training
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
            >
              Join Now
            </Link>

            <Link
              href="/sports"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black"
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
              Why Practice Yoga?
            </h2>

            <p>
              Yoga is an ancient practice that harmonizes the mind and body,
              improving overall well-being and inner peace.
            </p>

            <ul className="space-y-2">
              <li>🧘 Improve flexibility & strength</li>
              <li>🧠 Reduce stress & improve focus</li>
              <li>❤️ Boost overall health</li>
              <li>🌿 Achieve mental clarity</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/yoga-trainer.jpg"
              alt="Yoga trainer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== TYPES OF YOGA ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Yoga We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center text-black">
            {[
              "Hatha Yoga",
              "Vinyasa Yoga",
              "Power Yoga",
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

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6 py-10 bg-black/70 backdrop-blur-sm rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Yoga Journey
          </h2>

          <p className="text-gray-300 mb-6">
            Join ARC Sportzone and transform your lifestyle with yoga.
          </p>

          <Link
            href="/contact"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full"
          >
            Join Now
          </Link>
        </div>
      </section>

    </main>
  );
}