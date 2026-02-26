// app/sports/snooker/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function SnookerPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-imgs/snooker_result.jpg"
          alt="Snooker"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Snooker
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
            <span className="text-[#E7E2D8] font-medium">Snooker</span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Mysore has a growing snooker community, with many enthusiasts
              participating in local leagues and tournaments. The city offers a
              variety of snooker clubs and training centers, making it a great
              place for players to learn, practice, and compete.
            </p>

            <p>
              With increasing popularity,{" "}
              <span className="font-semibold text-gray-900">
                Snooker in Mysore
              </span>{" "}
              continues to attract both recreational players and competitive
              professionals.
            </p>

            <p>
              Join us at{" "}
              <span className="font-semibold text-gray-900">
                ARC Sportzone
              </span>{" "}
              and experience the thrill of snooker in a well-equipped and
              welcoming environment. Whether you're playing for fun or honing
              your skills for competition, our facility provides the ideal
              space to enjoy this classic cue sport.
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/new-imgs/snookers.jpg"
              alt="Snooker table"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== DIFFERENCE SECTION ===== */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What’s the difference between Billiards, Pool and Snooker?
            </h2>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                <strong>Billiards</strong> is played on a table without pockets.
                The game uses three balls — red, white (spotted), and white
                (plain).
              </li>

              <li>
                <strong>Pool</strong> is played on a six-pocket table using 15
                balls (sometimes nine) plus a cue ball.
              </li>

              <li>
                <strong>Snooker</strong> is played on a larger six-pocket table
                with smaller pockets. It uses 15 red balls, six colored balls,
                and one cue ball.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}