"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ZumbaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full flex items-center justify-center">
        <Image
          src="/images/zumba2.jpg"
          alt="Zumba"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Zumba
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Dance your way to fitness with energy, music, and fun
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-pink-600 text-red px-6 py-3 rounded-full"
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
              Why Zumba?
            </h2>

            <p>
              Zumba is a high-energy workout that feels like a dance party,
              combining music and movement for a full-body fitness experience.
            </p>

            <ul className="space-y-2">
              <li>💃 Burn calories while having fun</li>
              <li>🎵 Dance to energetic music</li>
              <li>❤️ Improve cardiovascular health</li>
              <li>😊 Reduce stress & boost mood</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/membership/zumba.jpg"
              alt="Zumba session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Zumba
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-black text-center">
            {[
              "Weight Loss & Fitness",
              "Improved Coordination",
              "Boosted Energy Levels",
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

      {/* ===== COACH ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Coach
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-4 text-gray-700"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mr. Vimal Geasan
                </h3>

                <p>
                  A versatile dancer skilled in Free Style, Hip-Hop, and Classical.
                  He has won multiple state-level championships and was a finalist
                  in the Indian Hip-Hop Championship.
                </p>

                <p>
                  Along with dance, he is also a Kung Fu expert and conducts
                  workshops, events, and training programs.
                </p>

                <p>
                  His passion and experience make him an exceptional Zumba instructor.
                </p>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/Dance_Kung fu_trainer.jpg"
                  alt="Vimal Geasan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dance?
          </h2>

          <p className="text-gray-300 mb-6">
            Join our Zumba classes and transform your fitness journey.
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