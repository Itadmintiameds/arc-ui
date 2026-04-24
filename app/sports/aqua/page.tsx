"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AquaZonePage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/hero5.jpeg"
          alt="Swimming"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Aqua Zone
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Dive into fitness, fun, and professional swimming training at ARC Sportzone
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Book Session
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Aqua Zone?
            </h2>

            <p>
              Swimming at <span className="font-semibold">ARC Sportzone</span> is the
              perfect way to stay active and improve overall well-being.
            </p>

            <ul className="space-y-2">
              <li>🏊‍♂️ Professional coaching for all levels</li>
              <li>💧 Clean & hygienic semi-Olympic pool</li>
              <li>⚡ Low-impact full body workout</li>
              <li>👨‍👩‍👧 Suitable for all age groups</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/aqua.jpg"
              alt="Swimming pool"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== POOL FEATURES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Our Pool Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-black text-center">
            {[
              {
                title: "Semi-Olympic Size",
                desc: "Perfect for training & competition",
              },
              {
                title: "Clean Water",
                desc: "Advanced filtration system",
              },
              {
                title: "Expert Coaches",
                desc: "Certified & experienced trainers",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl shadow hover:shadow-xl transition bg-gray-50"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SWIMMING IN INDIA ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-gray-700 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Swimming in India
          </h2>

          <p>
            India has produced remarkable swimmers like Virdhawal Vikram Khade,
            who competed in the 2008 Olympics and won Asian Games medals.
          </p>

          <p>
            Modern stars like Srihari Nataraj and Sajan Prakash continue to
            elevate Indian swimming globally.
          </p>
        </div>
      </section>

      {/* ===== ATHLETES ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            India is proud of
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Sajan */}
            <div className="group relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/sajan-prakash.jpg"
                alt="Sajan Prakash"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Sajan Prakash</h3>
                <p className="text-sm text-gray-200 mt-2">
                  Olympic swimmer and national record holder
                </p>
              </div>
            </div>

            {/* Shikha */}
            <div className="group relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/shikha-tandon.jpg"
                alt="Shikha Tandon"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Shikha Tandon</h3>
                <p className="text-sm text-gray-200 mt-2">
                  One of India’s most decorated swimmers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sports-bg.jpg')" // safer fallback path
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dive In?
          </h2>

          <p className="text-lg text-gray-200 mb-6">
            Join ARC Sportzone’s Aqua Zone and experience world-class swimming.
          </p>

          <Link
            href="/contact"
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}