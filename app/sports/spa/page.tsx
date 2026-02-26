// app/sports/spa/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function SpaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
<section className="relative min-h-[320px] md:min-h-[420px] w-full overflow-hidden flex items-center justify-center">
  <Image
    src="/images/hero4.jpeg"
    alt="Badminton"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 text-center px-4 py-16">
    <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
      Spa
    </h1>

    <div className="mt-3 text-sm text-gray-200">
      <Link href="/" className="hover:text-white transition">
        Home
      </Link>
      <span className="mx-2">/</span>
      <Link href="/sports" className="hover:text-white transition">
        Sports
      </Link>
      <span className="mx-2">/</span>
      <span className="text-[#E7E2D8] font-medium">Spa</span>
    </div>
  </div>
</section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Rejuvenate your body and mind at{" "}
            <span className="font-semibold text-gray-900">
              ARC Sportzone&apos;s luxurious Spa
            </span>
            . Designed to deliver a serene and soothing experience, our spa
            helps you relax and unwind after a long day or an intense workout.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We offer a range of professional treatments including therapeutic
            massages, deep tissue relaxation, and holistic wellness therapies.
            Our expert therapists use premium oils and proven techniques to
            relieve stress, improve circulation, and promote overall
            well-being.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you want to soothe sore muscles, detoxify your body, or
            simply indulge in self-care, the Spa at ARC Sportzone is the perfect
            place to refresh your senses and restore balance.
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/woman-relaxing-spa.jpg"
                alt="Spa relaxation"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/spa-composition-with-body-care-items-light.jpg"
                alt="Spa wellness items"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/images/young-beautiful-woman-having-face-massage-relaxing-spa.jpg"
                alt="Face massage spa"
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