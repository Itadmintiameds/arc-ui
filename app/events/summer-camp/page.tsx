
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp 2026 in Mysuru | Best Kids Sports Camp | ARC SportZone",
  description:
    "Join the best Summer Camp 2026 in Mysuru at ARC SportZone. Fun-filled sports activities, expert coaches, safe environment & skill development for kids. Limited seats – Register Now!",
  alternates: {
    canonical: "https://www.arcsportzone.com/events/summer-camp",
  },

  openGraph: {
    title: "Summer Camp 2026 in Mysuru | Best Kids Sports Camp | ARC SportZone",
    description:
      "Join the best Summer Camp 2026 in Mysuru at ARC SportZone with expert coaches and multi-sport training for kids.",
    url: "https://www.arcsportzone.com/events/summer-camp",
    siteName: "ARC SportZone",
    images: [
      {
        url: "https://www.arcsportzone.com/images/summer-camp-mysuru-arc-sportzone.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Summer Camp 2026 in Mysuru | ARC SportZone",
    description:
      "Best kids sports summer camp in Mysuru with football, swimming, badminton and more.",
    images: [
      "https://www.arcsportzone.com/images/summer-camp-mysuru-arc-sportzone.jpg",
    ],
  },
};

export default function EventsPage() {
  return (
    <main className="bg-white">

      {/* Event Schema */}
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "ARC SportZone Summer Camp 2026",
            startDate: "2026-04-01",
            endDate: "2026-05-31",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: "ARC SportZone",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bogadi Road",
                addressLocality: "Mysuru",
                addressRegion: "Karnataka",
                postalCode: "570026",
                addressCountry: "IN",
              },
            },
            image: [
              "https://www.arcsportzone.com/images/summer-camp-mysuru-arc-sportzone.jpg",
            ],
            description:
              "Join the best Summer Camp 2026 in Mysuru at ARC SportZone. Sports training, fitness activities and fun learning for kids.",
            organizer: {
              "@type": "Organization",
              name: "ARC SportZone",
              url: "https://www.arcsportzone.com",
            },
          }),
        }}
      />

      {/* HERO TITLE */}
      <section className="py-14 md:py-20 flex justify-center bg-white">
        <div className="relative inline-block">

          <h1
            className="relative bg-[#d4b24c] text-black font-bold
            text-sm md:text-xl lg:text-2xl
            px-10 md:px-20 py-3 md:py-4
            tracking-wide whitespace-nowrap
            shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
          >
            Best Summer Camp 2026 in Mysuru for Kids – ARC SportZone
          </h1>

          {/* Ribbon tails */}
          <div
            className="absolute left-[-28px] top-1/2 -translate-y-1/2
            w-0 h-0 border-t-[18px] border-b-[18px]
            md:border-t-[22px] md:border-b-[22px]
            border-r-[28px] border-t-transparent border-b-transparent
            border-r-[#d4b24c]"
          />

          <div
            className="absolute right-[-28px] top-1/2 -translate-y-1/2
            w-0 h-0 border-t-[18px] border-b-[18px]
            md:border-t-[22px] md:border-b-[22px]
            border-l-[28px] border-t-transparent border-b-transparent
            border-l-[#d4b24c]"
          />
        </div>
      </section>

      {/* EVENTS IMAGES */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

          <Image
            src="/images/summer-camp-mysuru-arc-sportzone-1.png"
            alt="Kids participating in Summer Camp 2026 in Mysuru at ARC SportZone"
            width={800}
            height={1000}
            priority
            className="rounded-2xl shadow-lg"
          />

          <Image
            src="/images/summer-camp-mysuru-arc-sportzone-2.png"
            alt="Children enjoying sports activities at ARC SportZone Summer Camp Mysuru 2026"
            width={800}
            height={1000}
            className="rounded-2xl shadow-lg"
          />

        </div>
      </section>

      {/* ABOUT CAMP */}
      <section className="max-w-5xl mx-auto px-4 py-10 text-gray-700 leading-relaxed">
        <p>
          ARC SportZone Summer Camp 2026 in Mysuru is designed to provide
          children with an exciting and active holiday experience. Our
          sports-based summer camp focuses on skill development, fitness,
          teamwork, and confidence building under the guidance of certified
          coaches.
        </p>

        <p className="mt-4">
          With world-class facilities and a safe, structured environment,
          kids can explore multiple sports activities while learning
          discipline, leadership, and sportsmanship.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-5xl mx-auto px-4 pb-16">

        <h2 className="text-2xl font-bold mb-4 text-black">
          Why Choose ARC SportZone Summer Camp in Mysuru?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Professional certified sports coaches</li>
          <li>Safe and secure campus</li>
          <li>Multi-sport exposure and training</li>
          <li>Skill development programs</li>
          <li>Fun and fitness focused activities</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-black">
          Activities Included in Summer Camp 2026
        </h2>

        <p className="text-gray-700">
          Our summer sports camp in Mysuru includes football, swimming,
          badminton, cricket, and many more structured activities designed
          to enhance agility, coordination, teamwork and confidence.
        </p>

      </section>

    </main>
  );
}

