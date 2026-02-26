// app/sports/martial-arts/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function MartialArtsPage() {
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
      Martial Arts
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
      <span className="text-[#E7E2D8] font-medium">Martial Arts</span>
    </div>
  </div>
</section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For those seeking a well-rounded approach to self-defense and
            fitness, our{" "}
            <span className="font-semibold text-gray-900">
              Martial Arts Class in Mysore
            </span>{" "}
            provides an excellent opportunity to learn under skilled
            instructors. Training in martial arts improves physical strength,
            reflexes, patience, focus, and self-confidence.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kung Fu
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you're looking for a disciplined and engaging environment to
            learn Kung Fu,{" "}
            <span className="font-semibold text-gray-900">
              ARC Sportzone
            </span>{" "}
            offers one of the best{" "}
            <span className="font-semibold text-gray-900">
              Kung Fu Classes in Mysore
            </span>
            .
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join us at ARC Sportzone and experience the power and grace of Kung
            Fu in a professional training environment. Our expert instructors
            will guide you through every step of your martial arts journey,
            ensuring steady progress in a supportive atmosphere.
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* top images */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/m1.jpg"
                alt="Martial arts training"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/m2.jpg"
                alt="Kung Fu practice"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* bottom image */}
          <div className="flex justify-center">
            <div className="relative h-[340px] w-full md:w-2/3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/m-1.jpg"
                alt="Martial arts session"
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