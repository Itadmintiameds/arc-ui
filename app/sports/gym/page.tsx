// app/sports/gym/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function GymPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg"
          alt="ARC Gym"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Cross Fitness - Gym
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/sports" className="hover:text-white">
              Sports
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#E7E2D8] font-medium">Gym</span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Achieve your fitness goals with{" "}
            <span className="font-semibold text-gray-900">
              ARC Sportzone’s premier Gym facility
            </span>
            . Designed for everyone from beginners to seasoned athletes, our
            gym features the latest strength training machines, cardio
            equipment, and functional fitness tools.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our experienced trainers provide personalized guidance and
            structured workout plans to help you build endurance, strength, and
            flexibility. Whether your goal is weight loss, muscle gain, or
            overall wellness, we provide the perfect environment for results.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join ARC Sportzone’s Gym today and take the first step toward a
            healthier, stronger, and more energetic you.
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/strong-athlete-lifting-barbell-exercising-gym.jpg"
                alt="Strength training"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/gym-fitness-woman-working-gym-exercises-workout-fit-gym.jpg"
                alt="Gym workout"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/man-working-out-gym.jpg"
                alt="Fitness training"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}