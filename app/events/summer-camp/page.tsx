import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Summer Camp in Mysore 2026 | ARC SportZone",
  description:
    "Join the best summer camp in Mysore 2026 at ARC SportZone. 16+ sports, swimming, lunch & pickup drop. Limited seats. Enroll today!",
  alternates: {
    canonical: "https://www.arcsportzone.com/events/summer-camp",
  },
};

export default function EventsPage() {
  return (
    <main className="bg-white">

      {/* ===== HERO TITLE — RIBBON STYLE ===== */}
      <section className="py-14 md:py-20 flex justify-center bg-white">
        <div className="relative inline-block">

          {/* H1 for SEO */}
          <h1
            className="relative bg-[#d4b24c] text-black font-bold
                       text-sm md:text-xl lg:text-2xl
                       px-10 md:px-20 py-3 md:py-4
                       tracking-wide whitespace-nowrap
                       shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          >
            Mysore’s Most Trusted and Successful Summer Camp
          </h1>

          {/* LEFT ribbon tail */}
          <div
            className="absolute left-[-28px] top-1/2 -translate-y-1/2
                       w-0 h-0
                       border-t-[18px] border-b-[18px]
                       md:border-t-[22px] md:border-b-[22px]
                       border-r-[28px]
                       border-t-transparent border-b-transparent
                       border-r-[#d4b24c]"
          />

          {/* RIGHT ribbon tail */}
          <div
            className="absolute right-[-28px] top-1/2 -translate-y-1/2
                       w-0 h-0
                       border-t-[18px] border-b-[18px]
                       md:border-t-[22px] md:border-b-[22px]
                       border-l-[28px]
                       border-t-transparent border-b-transparent
                       border-l-[#d4b24c]"
          />
        </div>
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
                  alt="Kids enjoying 16+ sports activities at the best summer camp in Mysore 2026 at ARC SportZone"
                  width={800}
                  height={1000}
                  priority
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
                  alt="Kids enjoying 16+ sports activities at the best summer camp in Mysore 2026 at ARC SportZone"
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
