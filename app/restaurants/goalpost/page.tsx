"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GoalPostPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[320px] md:min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/img/new-banners/goalpost.jpg"
          alt="Goalpost"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Goalpost
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/restaurants" className="hover:text-white transition">
              Restaurants
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#E7E2D8] font-medium">Goalpost</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Goal Post
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Goal Post is ARC Sportzone's very own custom themed sports bar.
              As the name suggests, Goal Post has been beautifully themed after
              the sport that the whole world loves — Football! Everything from
              the floor to the tables to the beanbags makes you feel like you
              are in the football field with your mates having the time of your
              life.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Come visit Goal Post by ARC Sportzone — we guarantee you will get
              those cool pub vibes here with the best food and music! Kick your
              troubles away and reach your weekend goals at Goal Post. We are
              open all week!
            </p>
          </motion.div>

          {/* ===== IMAGE GRID ===== */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/img/new-image/c1.jpg",
              "/img/new-image/c2.jpg",
              "/img/new-image/c3.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="relative h-[260px] w-full">
                  <Image
                    src={src}
                    alt={`Goalpost ${i + 1}`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ===== MENU BUTTON ===== */}
          <div className="text-center mt-12">
            <Link
              href="/img/new-image/GoalPost(Football)menu_Final.pdf"
              target="_blank"
              className="inline-block bg-[#0b1b34] hover:bg-[#132a52] text-white
                         px-8 py-3 rounded-full font-semibold
                         shadow-lg transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}