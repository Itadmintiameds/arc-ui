// app/sports/zumba/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ZumbaPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
<section className="relative min-h-[320px] md:min-h-[420px] w-full overflow-hidden flex items-center justify-center">
  <Image
    src="/images/zumba2.jpg"
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
      Zumba
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
      <span className="text-[#E7E2D8] font-medium">Zumba</span>
    </div>
  </div>
</section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Zumba is a fun, high-energy workout that feels more like a dance
              party than a fitness class. Originating in Colombia in the 1990s,
              Zumba combines Latin and international music with dynamic
              movements to create an exhilarating full-body workout.
            </p>

            <p>
              At{" "}
              <span className="font-semibold text-gray-900">
                ARC Sportzone
              </span>
              , our expert instructors bring this vibrant fitness craze to
              life. Our Zumba classes cater to all fitness levels — from
              beginners to advanced participants — with modifications available
              for everyone.
            </p>

            <p>
              Whether your goal is to burn calories, improve coordination, or
              simply enjoy moving to energetic beats, Zumba at ARC Sportzone is
              the perfect choice.
            </p>

            <p>
              Join us for the ultimate{" "}
              <span className="font-semibold text-gray-900">
                Zumba fitness party
              </span>
              ! Dance, sweat, and embrace a healthier lifestyle with one of the
              best Zumba classes in Mysore.
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/membership/zumba.jpg"
              alt="Zumba session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== COACH ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Coaches
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* text */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mr. Vimal Geasan
                </h3>

                <p>
                  Mr. Vimal is a gifted dancer proficient in styles ranging
                  from Free Style and Hip-Hop to Classical. An Aeronautical
                  Engineer at Infosys with an MBA in Aviation Management, he
                  has won numerous State Level Championships in Tamil Nadu and
                  Karnataka and was a finalist in the Indian Hip-Hop
                  Championship in Mumbai.
                </p>

                <p>
                  He has appeared in several TV shows including Maanada
                  Mayilada and Adutha Prabhudeva Yaaru. Apart from dance, he is
                  also a Kung Fu expert and has won multiple state-level
                  championships.
                </p>

                <p>
                  As the owner of the Infosys Dance Club, Mr. Vimal has
                  conducted and judged many workshops and events. His passion
                  and experience make him an exceptional instructor in both
                  dance and Kung Fu.
                </p>
              </div>

              {/* image */}
              <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/img/new-imgs/Dance_Kung fu_trainer.jpg"
                  alt="Vimal Geasan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}