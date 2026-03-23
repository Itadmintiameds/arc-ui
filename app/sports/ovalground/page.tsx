"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OvalGroundPage() {

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const imageY = useTransform(scrollY, [0, 800], [0, 60]);

  // Animations
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
        
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/futsal.jpeg"
            alt="Oval Ground ARC Sportzone"
            fill
            className="object-cover scale-110 will-change-transform"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Oval Ground
          </h1>

          <p className="text-lg text-gray-200 mb-6">
            Football & Cricket | Premium Outdoor Play Arena
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#football">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition hover:scale-105">
                Explore Football
              </button>
            </Link>

            <Link href="#cricket">
              <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition hover:scale-105">
                Explore Cricket
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Premium Multi-Sport Ground
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            The ARC Sportzone Oval Ground is a premium multi-sport facility crafted for both football and cricket enthusiasts. 
            Whether you're organizing competitive matches, training sessions, or casual games, our ground delivers a high-quality playing experience with ample space, excellent surface conditions, and a vibrant sporting atmosphere.
          </p>
        </motion.div>
      </section>

      {/* FOOTBALL */}
      <section id="football" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            style={{ y: imageY }}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image src="/images/hero3.jpeg" alt="Football" fill className="object-cover" />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-600">Football Arena</h2>

            <p className="text-gray-600 mb-6 text-lg">
              Step onto a professionally maintained football ground designed for fast-paced matches, team training, and casual play. 
              Whether you're playing competitively or just for fun, the environment is built to enhance every moment on the field.
            </p>

            <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-red-600">
  <li>High-quality, well-maintained playing surface</li>
  <li>Floodlit ground for evening and night matches</li>
  <li>Perfect for team games, tournaments, and practice</li>
  <li>Suitable for players of all skill levels</li>
</ul>

            <Link href="https://your-booking-link.com" target="_blank">
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition hover:scale-105">
                Book Football Slot
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CRICKET */}
      <section id="cricket" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-4 text-red-600">Cricket Ground</h2>

            <p className="text-gray-600 mb-6 text-lg">
              Enjoy a spacious oval ground ideal for tennis ball cricket, friendly matches, and organized tournaments. 
              Designed for group play, the ground offers the flexibility and space needed for an enjoyable cricketing experience.
            </p>

            <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-red-600">
  <li>Spacious oval layout for uninterrupted gameplay</li>
  <li>Ideal for tournaments and group matches</li>
  <li>Perfect for casual games with friends</li>
  <li>Flexible booking options for teams and events</li>
</ul>

            <Link href="https://your-booking-link.com" target="_blank">
              <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition hover:scale-105">
                Book Cricket Ground
              </button>
            </Link>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl order-1 md:order-2"
          >
            <Image src="/images/futsal.jpeg" alt="Cricket" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>

          <p className="text-gray-600 mb-10 text-lg">
            Book your slot now and experience the best outdoor sports ground.
          </p>

          {/* BOOK COURT CTA */}
<div className="flex justify-center py-8">
  <Link
    href="/contact"
    className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
  >
    Book Court
  </Link>
</div>
        </motion.div>
      </section>

    </main>
  );
}