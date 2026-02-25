"use client";

import Image from "next/image";

export default function ArcHighlight() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden">
      
      {/* Background Image (sharp, optimized) */}
      <Image
        src="/images/arc-bg.jpg"
        alt="ARC Sportzone"
        fill
        priority
        className="object-cover object-center"
        quality={100}
      />

      {/* Premium gradient overlay (NOT harsh black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-wide text-[#E7E2D8] drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            ARC Sportzone
          </h2>

          {/* Description */}
          <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-[#D6D1C7] font-light">
            Mysuru’s premier destination for sports, fitness, and recreation.
            With world-class infrastructure and expert coaching, ARC Sportzone
            empowers athletes of all ages to train with confidence, compete
            with passion, and achieve excellence in a vibrant, high-energy
            environment.
          </p>

        </div>
      </div>
    </section>
  );
}