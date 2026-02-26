import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    title: "Birthdays",
    image: "/images/birthdays.jpg",
  },
  {
    title: "Family Events",
    image: "/images/family-events.jpg",
  },
  {
    title: "Community Events",
    image: "/images/community-events.jpg",
  },
];

export default function CorporatePackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/corporate-banner.jpg"
          alt="Corporate Packages"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Regular Packages
          </h1>
          <p className="text-[#d6d3cd] mt-3">
            Premium event experiences at ARC Sportzone
          </p>
        </div>
      </section>

      {/* ===== CARDS SECTION ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {packages.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/80 backdrop-blur-md
                rounded-2xl
                shadow-lg hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
                overflow-hidden
                border border-white/40
              "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {item.title}
                </h3>

                <Link
                  href="/contact"
                  className="
                    inline-block
                    px-6 py-2.5
                    rounded-full
                    bg-gradient-to-r from-red-600 to-red-700
                    text-white font-semibold text-sm
                    shadow-lg shadow-red-600/30
                    hover:shadow-red-600/50
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}