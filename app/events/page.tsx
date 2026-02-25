import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="bg-white">

      {/* ===== HERO TITLE ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Upcoming Events
        </h1>
        <p className="text-gray-600 mt-3">
          Stay updated with the latest happenings at ARC Sportzone
        </p>
      </section>

      {/* ===== EVENTS GRID ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-8">

            {/* Event 1 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                <Image
                  src="/images/event1.png"
                  alt="ARC Event 1"
                  width={800}
                  height={1000}
                />
              </div>

              <p className="text-center text-gray-700 mt-4 font-medium">
                Kids enjoying 16+ sports and fun activities at ARC SportZone Summer Camp 2026 in Mysore.
              </p>
            </div>

            {/* Event 2 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                <Image
                  src="/images/event2.png"
                  alt="ARC Event 2"
                  width={800}
                  height={1000}
                />
              </div>

              <p className="text-center text-gray-700 mt-4 font-medium">
                Kids enjoying 16+ sports and fun activities at ARC SportZone Summer Camp 2026 in Mysore.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}