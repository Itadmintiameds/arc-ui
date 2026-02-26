// app/sports/futsal/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function FutsalPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/futsal.jpg"
          alt="Futsal"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Futsal
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
            <span className="text-[#E7E2D8] font-medium">Futsal</span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Futsal, a fast-paced variant of football, is played between two
              teams of five players on an indoor hard court with a smaller,
              low-bounce ball. Originating from{" "}
              <strong>Spanish "fútbol sala"</strong> and{" "}
              <strong>Portuguese "futebol de salão"</strong>, the name
              translates to "hall football," reflecting its unique indoor
              nature.
            </p>

            <p>
              At{" "}
              <span className="font-semibold text-gray-900">
                ARC SportZone
              </span>
              , we offer{" "}
              <span className="font-semibold text-gray-900">
                premium futsal turf in Mysore
              </span>
              , designed to provide the best playing experience. Our high
              quality turf ensures optimal grip, speed, and safety.
            </p>

            <p>
              Experience the thrill of futsal at ARC SportZone, where the game
              is faster, sharper, and more intense than ever. Book your session
              today and take your love for football to the next level!
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/futsal.jpg"
              alt="Futsal turf"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== COACHES ===== */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Coaches
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Mr. Darshan K.
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Mr. Darshan is a National Level Player (Under 16, 18, and 21) and
              has represented Karnataka State multiple times. Under his
              captaincy, his team became runners-up at the 2013–14 Under-18
              State Level Football Tournament held in Bellari, advancing to the
              Nationals.
            </p>

            <p className="text-gray-600 leading-relaxed">
              He has previously worked as a coach at many summer camps conducted
              by Saint Joseph’s and was a full-time coach at Saint Arnold’s.
              This experience has shaped him into both a talented player and an
              accomplished coach.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HISTORY ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Futsal started in 1930 when Juan Carlos Ceriani, a teacher in
              Montevideo, Uruguay, created a version of indoor football for
              recreation in YMCAs. The sport was originally developed for
              basketball courts, and a rule book was published in September
              1933.
            </p>

            <p>
              The sport has an annual World Cup, and the World Intercontinental
              Futsal Cup took place at the Bangkok Futsal Arena, Thailand from
              26th August to 1st September 2019. Renowned Indian football
              players include Sunil Chhetri and Bhaichung Bhutia.
            </p>
          </div>

          <div className="relative h-[320px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/futsal5.jpg"
              alt="Futsal match"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}