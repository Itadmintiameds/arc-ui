import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    title: "Badminton",
    img: "/images/membership/badminton.jpg",
  },
  {
    title: "Aqua Zone",
    img: "/images/membership/aqua.jpg",
  },
  {
    title: "Futsal",
    img: "/images/membership/futsal.jpg",
  },
  {
    title: "Zumba",
    img: "/images/membership/zumba.jpg",
  },
  {
    title: "Yoga",
    img: "/images/membership/yoga.jpg",
  },
];

export default function RegularMembershipPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/membership.jpg"
          alt="Regular Membership"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Regular Membership
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Enjoy unlimited access to a variety of sports and fitness
            activities with the{" "}
            <span className="font-semibold text-gray-900">
              Regular Membership at ARC Sportzone
            </span>.
            Our membership package includes top-tier facilities designed to
            keep you active, energized, and performing at your best.
          </p>
        </div>
      </section>

      {/* ===== FACILITIES GRID ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {facilities.map((item, index) => (
              <Link
                key={index}
                href="/contact"
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* premium overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                  </div>

                  {/* Title */}
                  <div className="py-5 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}

          </div>

          {/* Bottom text */}
          <div className="max-w-4xl mx-auto text-center mt-16 space-y-6 px-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              and more — ensuring that you stay active and engaged in a
              well-rounded fitness routine.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With ARC Sportzone's Regular Membership, you can participate in
              multiple sports, group fitness classes, and wellness programs —
              all designed to improve your health and overall well-being.
              Whether you're aiming for competitive performance or everyday
              fitness, our membership caters to every enthusiast.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}