import Image from "next/image";
import Link from "next/link";

const sports = [
  {
    title: "Badminton",
    image: "/images/sports/badminton.jpg",
    href: "/sports/badminton",
  },
  {
    title: "Futsal",
    image: "/images/sports/futsal.jpg",
    href: "/sports/futsal",
  },
  {
    title: "Aqua Zone",
    image: "/images/sports/aqua.jpg",
    href: "/sports/aqua",
  },
  {
    title: "Zumba",
    image: "/images/sports/zumba.jpg",
    href: "/sports/zumba",
  },
  {
    title: "Yoga",
    image: "/images/sports/yoga.jpg",
    href: "/sports/yoga",
  },
  {
    title: "Table Tennis",
    image: "/images/sports/table-tennis.jpg",
    href: "/sports/table-tennis",
  },
  {
    title: "Snooker",
    image: "/images/sports/snooker.jpg",
    href: "/sports/snooker",
  },
  {
    title: "Box Cricket",
    image: "/images/sports/box-cricket.jpg",
    href: "/sports/box-cricket",
  },
  {
    title: "Martial Arts",
    image: "/images/sports/martial-arts.jpg",
    href: "/sports/martial-arts",
  },
  {
    title: "VR Game",
    image: "/images/sports/vr-game.jpg",
    href: "/sports/vr-game",
  },
  {
    title: "SPA",
    image: "/images/sports/spa.jpg",
    href: "/sports/spa",
  },
  {
    title: "Gym",
    image: "/images/sports/gym.jpg",
    href: "/sports/gym",
  },
];

export default function SportsPage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">

      {/* ===== HERO ===== */}
      <section className="py-16 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Our Sports & Activities
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore world-class sports facilities and professional training
          programs at ARC Sportzone.
        </p>
      </section>

      {/* ===== GRID ===== */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {sports.map((sport, index) => (
              <Link
                key={index}
                href={sport.href}
                className="group block"
              >
                <div className="relative h-44 md:h-52 rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">

                  {/* Image */}
                  <Image
                    src={sport.image}
                    alt={sport.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition" />

                  {/* Title */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-lg md:text-xl tracking-wide text-center px-2">
                      {sport.title}
                    </h3>
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