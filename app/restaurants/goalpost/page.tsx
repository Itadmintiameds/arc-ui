// app/restaurants/take-a-break/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Take A Break | ARC Sportzone",
  description:
    "Relax and refresh at Take A Break by ARC Sportzone. Enjoy snacks, juices, and quick bites after your sports session.",
};

export default function TakeABreakPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-banners/goalpost.jpg"
          alt="Take A Break restaurant at ARC Sportzone"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Take A Break
          </h1>

          <nav className="mt-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/restaurants" className="hover:text-white">
              Restaurants
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#E7E2D8] font-medium">
              Take A Break
            </span>
          </nav>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Take A Break
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Sometimes you just want to relax with a cool beverage or a tasty
            snack after a long day or an intense sports session. From breakfast
            and sandwiches to chats, fresh juices, and ice creams —
            <span className="font-semibold text-gray-900">
              {" "}Take A Break by ARC Sportzone{" "}
            </span>
            is the perfect spot to refresh and recharge.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Chill out, relax, catch up with friends, or even hop on a quick
            meeting while your kids finish their coaching sessions. We’re open
            all week and ready to serve you.
          </p>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image
              src="/img/new-image/t1.jpg"
              alt="Snacks at Take A Break"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image
              src="/img/new-image/t2.jpg"
              alt="Beverages at Take A Break"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Menu
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/t-1.jpg"
                alt="Take A Break menu page 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-white"
              />
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <Image
                src="/img/new-image/t-2.jpg"
                alt="Take A Break menu page 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}