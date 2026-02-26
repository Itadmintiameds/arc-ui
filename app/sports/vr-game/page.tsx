// app/sports/vr-game/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function VRGamePage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-image/v1.jpg"
          alt="VR Games"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            VR Games
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
              VR Games
            </span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            VR Games
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Step into the future of gaming with{" "}
            <span className="font-semibold text-gray-900">
              VR Games at ARC Sportzone
            </span>
            ! Our state-of-the-art virtual reality gaming zone offers an
            immersive experience where players can explore new worlds, battle
            opponents, and engage in thrilling adventures like never before.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With a wide selection of VR games — from action-packed shooters to
            mind-bending puzzles and sports simulations — ARC Sportzone is the
            ultimate destination for VR gaming in Mysore. Our high-tech
            equipment and motion-sensing technology ensure an unparalleled
            experience.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're playing solo, challenging friends, or hosting a VR
            gaming event, ARC Sportzone is the perfect place to explore the
            future of entertainment.
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/v1.jpg"
                alt="VR gaming experience"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/v2.png"
                alt="Virtual reality setup"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/v3.jpg"
                alt="VR gaming zone"
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