import Image from "next/image";

const facilities = [
  {
    title: "Badminton Courts",
    img: "/images/badminton.jpg",
  },
  {
    title: "Futsal Arena",
    img: "/images/futsal.jpg",
  },
  {
    title: "Aqua Zone",
    img: "/images/aqua.jpg",
  },
  {
    title: "Modern Gym",
    img: "/images/gym.jpg",
  },
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            World-Class Facilities
          </h2>
          <p className="text-gray-600 mt-3">
            Designed for performance, built for champions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 text-center bg-white">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}