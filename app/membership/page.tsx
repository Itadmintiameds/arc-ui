import Image from "next/image";
import Link from "next/link";

const memberships = [
  {
    title: "Regular Membership",
    description:
      "Enjoy flexible access to ARC Sportzone facilities with our Regular Membership plan.",
    image: "/images/membership/regular.jpg",
    href: "/membership/regular",
  },
  {
    title: "Lifetime Membership",
    description:
      "Unlock long-term premium benefits and exclusive privileges with Lifetime Membership.",
    image: "/images/membership/lifetime.jpg",
    href: "/membership/lifetime",
  },
];

export default function MembershipPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      
      {/* ===== HERO ===== */}
      <section className="py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Membership Plans
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Become part of the ARC Sportzone community and enjoy world-class
          sports and fitness experiences.
        </p>
      </section>

      {/* ===== GRID ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid md:grid-cols-2 gap-8">

            {memberships.map((plan, index) => (
              <Link key={index} href={plan.href} className="group block">
                
                <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">

                  {/* Image */}
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                      {plan.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base max-w-md">
                      {plan.description}
                    </p>

                    <span className="mt-5 inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full text-sm group-hover:bg-yellow-300 transition">
                      View Details
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