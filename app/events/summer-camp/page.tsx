import Image from "next/image";
import Link from "next/link";
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
                  src="/images/summer-camp-mysuru-arc-sportzone-1.png"
                  alt="Kids enjoying 16+ sports activities at the best summer camp in Mysore 2026 at ARC Sportzone"
                  width={800}
                  height={1000}
                  priority
                />
              </div>

              <p className="text-center text-gray-700 mt-4 font-medium">
                Kids enjoying 16+ sports and fun activities at ARC Sportzone Summer Camp 2026 in Mysore.
              </p>
            </div>

            {/* Event 2 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                <Image
                  src="/images/summer-camp-mysuru-arc-sportzone-2.png"
                  alt="Kids enjoying 16+ sports activities at the best summer camp in Mysore 2026 at ARC Sportzone"
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
      {/* ===== SEO CONTENT ===== */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Best Summer Camp 2026 in Mysuru for Kids – ARC Sportzone
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Looking for the{" "}
            <Link
              href="https://arcsportzone.com/"
              className="text-[#d4b24c] font-semibold hover:underline"
            >
              best summer camp in Mysuru
            </Link>{" "}
            for your child? Welcome to ARC Sportzone Summer Camp 2026 — a
            dynamic, fun-filled, and skill-oriented kids summer sports camp
            designed to build confidence, fitness, and teamwork.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Summer holidays are the perfect time for children to explore new
            activities, develop physical strength, and build social skills. At
            ARC Sportzone, we combine professional coaching, world-class sports
            infrastructure, and a safe learning environment to deliver one of
            the most trusted summer camps in Mysore.
          </p>

        </div>
      </section>

    </main>
  );
}