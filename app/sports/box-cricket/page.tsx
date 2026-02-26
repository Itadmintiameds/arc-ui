// app/sports/box-cricket/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function BoxCricketPage() {
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
      Box cricket
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
      <span className="text-[#E7E2D8] font-medium">Box cricket</span>
    </div>
  </div>
</section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Mysore has seen a growing interest in{" "}
              <span className="font-semibold text-gray-900">
                Box Cricket
              </span>
              , with players of all ages enjoying the sport in various leagues
              and tournaments. The enclosed setting allows for a faster, more
              strategic game that tests reflexes and teamwork.
            </p>

            <p>
              With a strong cricketing culture in the city,{" "}
              <span className="font-semibold text-gray-900">
                Box Cricket in Mysore
              </span>{" "}
              has gained immense popularity among both amateur and professional
              players.
            </p>

            <p>
              Join us at{" "}
              <span className="font-semibold text-gray-900">
                ARC Sportzone
              </span>{" "}
              and experience the excitement of our world-class Box Cricket
              facility. Whether you're organizing a corporate tournament, a
              friendly match, or practice session — our arena is the perfect
              place to play and enjoy the game.
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/cricketer-field-action.jpg"
              alt="Box cricket ground"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}