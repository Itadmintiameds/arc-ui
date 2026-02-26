// app/restaurants/waterfront/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function WaterfrontPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/new-banners/waterfront.jpg"
          alt="Waterfront Restaurant"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Waterfront
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/restaurants" className="hover:text-white">
              Restaurants
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#E7E2D8] font-medium">
              Waterfront
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Image Card */}
          <div className="flex justify-center mb-10">
            <div className="relative h-[320px] w-full max-w-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <Image
                src="/img/new/waterfront.jpg"
                alt="Waterfront dining"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/img/pdf/menu.pdf"
            target="_blank"
            className="inline-block px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition shadow-lg hover:shadow-xl"
          >
            View Menu
          </Link>
        </div>
      </section>
    </main>
  );
}