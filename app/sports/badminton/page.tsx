// app/sports/badminton/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BadmintonPage() {
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
      Badminton
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
      <span className="text-[#E7E2D8] font-medium">Badminton</span>
    </div>
  </div>
</section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Badminton is a dynamic and skillful sport with a rich history
              dating back centuries. While its origins can be traced to early
              games played across Eurasia, modern badminton took shape in
              19th-century England and quickly gained popularity worldwide.
              Today, it is one of the fastest-growing sports, enjoyed both
              recreationally and competitively.
            </p>

            <p>
              At{" "}
              <span className="font-semibold text-gray-900">
                ARC SportZone
              </span>
              , we offer{" "}
              <span className="font-semibold text-gray-900">
                top-notch badminton coaching in Mysore
              </span>
              , designed for players of all skill levels—from beginners to
              advanced athletes.
            </p>

            <p>
              Whether you are looking to play for fun, improve your skills, or
              train for tournaments, ARC SportZone is the ultimate destination
              for badminton coaching in Mysore.
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/badminton.jpg"
              alt="Badminton coaching"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== COACHES ===== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Coaches
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coach 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coach Bhemaiah
              </h3>

              <p className="text-gray-700 mb-4">
                Coach Bhemaiah is a seasoned badminton coach known for his deep
                understanding of the game and his ability to train players of
                all skill levels.
              </p>

              <p className="text-gray-600">
                His coaching philosophy focuses on discipline, fitness, and
                mental resilience, ensuring players develop both performance
                excellence and a lifelong love for the sport.
              </p>
            </div>

            {/* Coach 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coach Hariprasad
              </h3>

              <p className="text-gray-700">
                Coach Hariprasad is dedicated to enhancing players' skills,
                agility, and strategy. With strong focus on fundamentals and
                endurance, he helps players excel through personalized training
                and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDIA PROUD ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            India is proud of
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/img/srikanth.jpg",
                text:
                  "Srikanth Kidambi is the highest ranked men's singles badminton player in the world and a Padma Shri awardee.",
              },
              {
                img: "/img/Saina-Nehwal.jpg",
                text:
                  "Former world No.1 Saina Nehwal has bagged multiple Superseries titles across world championships.",
              },
              {
                img: "/img/PV-Sindhu.jpg",
                text:
                  "P V Sindhu, Olympic medalist and World Champion, has won medals at numerous BWF tournaments.",
              },
            ].map((player, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={player.img}
                    alt="Badminton player"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-gray-700 leading-relaxed">
                  {player.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BADMINTON AT ARC ===== */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/badminton-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-5xl mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Badminton at ARC
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            At ARC, we have 6 national level courts with wooden cushion
            flooring of international standards. Our renowned coaches train
            both aspiring professionals and recreational players in a
            world-class environment.
          </p>
        </div>
      </section>
    </main>
  );
}