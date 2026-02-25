"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Sports Facilities" },
  { number: "5000+", label: "Happy Members" },
  { number: "15+", label: "Expert Coaches" },
  { number: "7 Days", label: "Open Weekly" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {item.number}
            </h3>
            <p className="text-red-100">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}