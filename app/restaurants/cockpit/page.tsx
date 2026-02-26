"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CockpitPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[320px] md:min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/img/new-banners/cockpit.jpg"
          alt="Cockpit"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Cockpit
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
            <span className="text-[#E7E2D8] font-medium">Cockpit</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title + Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cockpit
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Cockpit is one among the four different themed multi-cuisine
              restaurants at ARC Sportzone. Everything from the tables to the
              walls is inspired by awesome race cars, creating a fun and
              inviting ambience for kids and adults alike.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              Come check it out and enjoy some delicious food while you dance
              the night away at Cockpit by ARC Sportzone. It truly is the F1 of
              Fine Dining! We are open all week!
            </p>
          </motion.div>

          {/* ===== IMAGE GRID ===== */}
          <div className="grid md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
            {["/img/new-image/g1.jpg", "/img/new-image/g3.jpg"].map(
              (src, i) => (
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
                      alt={`Cockpit ${i + 1}`}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* ===== MENU BUTTON ===== */}
          <div className="text-center mt-12">
            <Link
              href="/img/new-image/Cockpit(Car)menu_Final.pdf"
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