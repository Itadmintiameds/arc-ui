import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    title: "Regular Packages",
    description:
      "Flexible plans designed for individuals and families to enjoy ARC facilities.",
    image: "/images/packages/regular.jpg",
    href: "/packages/regular",
  },
  {
    title: "Corporate Packages",
    description:
      "Perfect for corporate events, team outings, and institutional programs.",
    image: "/images/packages/corporate.jpg",
    href: "/packages/corporate",
  },
];

export default function PackagesPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      
      {/* ===== HERO ===== */}
      <section className="py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Packages
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Choose from our specially curated packages designed for individuals,
          families, and organizations.
        </p>
      </section>

      {/* ===== GRID ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid md:grid-cols-2 gap-8">

            {packages.map((pkg, index) => (
              <Link key={index} href={pkg.href} className="group block">
                
                <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">

                  {/* Image */}
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                      {pkg.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base max-w-md">
                      {pkg.description}
                    </p>

                    {/* CTA */}
                    <span className="mt-5 inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full text-sm group-hover:bg-yellow-300 transition">
                      Explore
                    </span>

                  </div>
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}