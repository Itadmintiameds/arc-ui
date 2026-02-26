// app/sports/yoga/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function YogaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-imgs/yoga-banner.jpg"
          alt="Yoga"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Yoga
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
            <span className="text-[#E7E2D8] font-medium">Yoga</span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Yoga is an ancient practice that harmonizes the mind and body,
              promoting overall well-being and inner peace. Rooted in Indian
              tradition, yoga combines physical postures, breath control, and
              meditation to enhance flexibility, strength, and mental clarity.
            </p>

            <p>
              At{" "}
              <span className="font-semibold text-gray-900">
                ARC Sportzone
              </span>
              , we provide expert-led yoga classes designed for all skill
              levels — from beginners to advanced practitioners.
            </p>

            <p>
              Our sessions include{" "}
              <span className="font-semibold text-gray-900">
                Hatha Yoga, Vinyasa Yoga, and Power Yoga
              </span>
              , offering a holistic approach to fitness and mindfulness.
              Whether your goal is better posture, stress reduction, or overall
              wellness, our yoga programs create a calm and structured
              environment for your journey.
            </p>

            <p>
              Join ARC Sportzone and experience the benefits of yoga firsthand.
              Achieve physical strength, mental clarity, and emotional balance
              with one of the best yoga classes in Mysore.
            </p>
          </div>

          <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/new-imgs/yoga-trainer.jpg"
              alt="Yoga trainer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}