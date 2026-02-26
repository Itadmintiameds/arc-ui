// app/sports/table-tennis/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function TableTennisPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-image/ta2.jpg"
          alt="Table Tennis"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Table Tennis
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
            <span className="text-[#E7E2D8] font-medium">
              Table Tennis
            </span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Table Tennis
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Table Tennis, also known as Ping-Pong, is an exciting and
            fast-paced sport that enhances reflexes, coordination, and
            strategic thinking. Played on a flat table divided by a net, the
            objective is to skillfully hit the lightweight ball back and forth
            using paddles, making it challenging for the opponent to return the
            shot.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold text-gray-900">
              ARC Sportzone
            </span>
            , we provide top-notch Table Tennis facilities for players of all
            levels. Whether you are a beginner learning the basics or an
            advanced player refining your skills, our coaching sessions offer
            expert guidance.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join us at ARC Sportzone and experience the thrill of Table Tennis
            while improving your agility, speed, and precision. Get ready to
            play, compete, and have fun with one of the most engaging indoor
            sports!
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/ta1.jpg"
                alt="Table tennis match"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/ta2.jpg"
                alt="Table tennis training"
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