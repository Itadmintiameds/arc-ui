"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OvalGroundPage() {

  // Scroll-based parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const imageY = useTransform(scrollY, [0, 800], [0, 60]);

  // Animations
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
        
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/futsal.jpeg"
            alt="Oval Ground ARC Sportzone"
            fill
            className="object-cover scale-110 will-change-transform"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-4xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Oval Cricket & Football Turf Ground
          </h1>

          <div className="flex justify-center py-8">
  <Link
    href="/contact"
    className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-10 py-4 rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
  >
    Book Court
  </Link>
</div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
  Experience the Best Oval Turf in Mysuru
</h2>

<p className="text-gray-600 text-lg leading-relaxed mb-6">
  Stop settling for cramped spaces. Experience the only professional oval cricket ground and premier football turf in Hebbal Industrial Area, Mysuru. Whether it’s a high-stakes 7v7 football match or a weekend cricket tournament under the floodlights, ARC Sportzone is built for athletes who play to win.
</p>

<p className="text-red-600 font-semibold mb-4">
  Pro Surface. Pro Lights. Pro Experience.
</p>

<p className="text-gray-600 text-lg leading-relaxed">
  Book your slot today and experience the best turf in Mysuru
</p>
        </motion.div>
      </section>

{/* FOOTBALL */}
<section id="football" className="py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">

    {/* IMAGE */}
    <motion.div
      style={{ y: imageY }}
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative w-full aspect-[4/3] md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-xl"
    >
      <Image
        src="/images/futsal.jpeg"
        alt="Football"
        fill
        className="object-cover"
      />
    </motion.div>

    {/* TEXT */}
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-center"
    >
      <br>
  </br>
  <br>
  </br><br>
  </br><br>
  </br><br>
  </br>
      <h2 className="text-3xl font-bold mb-4 text-red-600">
        Why ARC Sportzone is the Best Turf in Mysuru
      </h2>

      <p className="text-gray-600 mb-6 text-lg text-justify">
        Looking for the best cricket turf in Mysuru or a football turf near you in Mysore? ARC Sportzone stands out with:
      </p>

      <ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-red-600">
        <li>Professional oval cricket ground in Mysuru</li>
        <li>High-quality football turf in Hebbal Industrial Area Mysuru</li>
        <li>Floodlights for night matches</li>
        <li>Prime location in Hebbal Industrial Area, Mysuru</li>
        <li>Easy parking & accessibility</li>
        <li>Clean, safe & well-maintained environment</li>
      </ul>

      <p className="text-gray-600 mt-6 text-lg text-justify">
        We provide everything you need for an unmatched sports experience in Mysuru.
      </p>
    </motion.div>

  </div>
</section>



      {/* CRICKET */}
      <section id="cricket" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
  variants={fadeLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="order-2 md:order-1 flex flex-col justify-center h-full"
>
  <br>
  </br><br>
  </br><br>
  </br><br>
  </br><br>
  </br>
            <h2 className="text-3xl font-bold mb-4 text-red-600">
  Perfect for Matches, Practice & Events
</h2>

<p className="text-gray-600 mb-6 text-lg">
  ARC Sportzone is the ideal venue for:
</p>

<ul className="space-y-3 text-gray-600 list-disc pl-5 marker:text-red-600">
  <li>Weekend matches with friends</li>
  <li>Corporate games & team events</li>
  <li>Local cricket & football tournaments</li>
  <li>Regular practice sessions</li>
</ul>

<p className="text-gray-600 mt-6 text-lg">
  Our ground supports both casual play and competitive sports in Mysuru.
</p>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl order-1 md:order-2"
          >
            <Image src="/images/turf2.png" alt="Cricket" fill className="object-cover" />
          </motion.div>
        </div>
      </section>




{/* INFOGRAPHIC SECTION */}
<section className="py-16 px-6 bg-[#f5f7fb]">
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
      Premium Cricket & Football Turf in Mysuru
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* CRICKET CARD */}
      <div className="rounded-2xl p-6 text-white shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br from-red-600 to-red-900">
        <h3 className="text-xl font-semibold mb-4">
          Cricket Turf in Mysuru
        </h3>

        <ul className="space-y-3">
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Ideal for friendly matches & tournaments
          </li>
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Perfect for regular practice sessions
          </li>
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Designed with a professional oval layout
          </li>
        </ul>
      </div>

      {/* FOOTBALL CARD */}
      <div className="rounded-2xl p-6 text-white shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-600 to-blue-900">
        <h3 className="text-xl font-semibold mb-4">
          Football Turf in Mysuru
        </h3>

        <ul className="space-y-3">
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Smooth and high-performance playing surface
          </li>
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Great for 5v5 & 7v7 matches
          </li>
          <li className="relative pl-5 before:content-['✔'] before:absolute before:left-0">
            Suitable for beginners & advanced players
          </li>
        </ul>
      </div>

    </div>

  </div>
</section>



{/* FEATURES / DETAILS BLOCK */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto space-y-20">

    {/* MATCHES & EVENTS */}

    {/* AMENITIES */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Amenities | Facilities Available
      </h2>

      <p className="text-gray-600 text-lg mb-10">
        We offer premium amenities to enhance your playing experience:
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        {[
          "Professional turf surface",
          "Oval ground design",
          "Floodlights for night play",
          "Player-friendly environment",
          "Seating & relaxation area",
          "Ample parking space",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-50 p-5 rounded-xl shadow-sm"
          >
            <p className="text-gray-700">{item}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-600 text-lg mt-10">
        Experience one of the most advanced sports turfs in Mysuru.
      </p>
    </motion.div>


    {/* LOCATION */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Prime Location in Hebbal Industrial Area, Mysuru
      </h2>

      <p className="text-gray-600 text-lg mb-10">
        ARC Sportzone is strategically located in Hebbal Industrial Area, making it easily accessible from:
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        {[
          "Hebbal",
          "Hunsur Road",
          "Infosys Campus area",
          "Nearby areas of Mysuru",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-gray-50 p-5 rounded-xl shadow-sm"
          >
            <p className="text-gray-700">{item}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-600 text-lg mt-10">
        This makes us one of the most convenient turf grounds in Mysuru.
      </p>
    </motion.div>

  </div>
</section>




{/* TESTIMONIALS */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What Players Say
      </h2>
      <p className="text-gray-600 text-lg">
        Real experiences from players who love ARC Sportzone
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Best cricket turf in Mysuru! The oval ground gives a real stadium feel.",
        "Perfect football turf in Hebbal Mysuru. Great maintenance.",
        "One of the top sports places in Mysuru for weekend matches.",
      ].map((quote, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          {/* Quote Icon */}
          <div className="text-red-600 text-5xl absolute -top-5 left-5">“</div>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            {quote}
          </p>

          {/* Fake rating (visual boost) */}
          <div className="flex gap-1 mt-6 text-yellow-400 text-lg">
            ★ ★ ★ ★ ★
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

{/* CONCLUSION */}
<section className="py-28 px-6 bg-white text-center">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.7 }}
    className="max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-black">
      Experience the Ultimate Turf in Mysuru
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-6">
      ARC Sportzone stands as one of the top destinations for cricket and football enthusiasts in Mysuru. With its professionally designed oval ground, high-quality turf, and prime location in Hebbal Industrial Area, it offers the perfect environment for matches, practice, and events.
    </p>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      Whether you’re a beginner looking to enjoy the game or a serious player aiming to train, ARC Sportzone delivers a complete and premium sports experience. From well-maintained facilities to easy accessibility, everything is designed to give you the best time on the field.
    </p>

    <p className="text-red-600 font-semibold text-xl mb-10">
      Don’t wait—book your slot today and experience why ARC Sportzone is the preferred turf in Mysuru.
    </p>

    {/* CTA BUTTON */}
    <Link href="/contact">
      <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-md transition hover:scale-105">
        Book Your Slot Now
      </button>
    </Link>
  </motion.div>
</section>

{/* FAQ SECTION */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-4xl mx-auto">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600">
        Everything you need to know before booking your slot
      </p>
    </motion.div>

    <div className="space-y-4">
      {[
        {
          q: "Which is the best cricket turf in Mysuru?",
          a: "ARC Sportzone is one of the best cricket turfs in Mysuru with a professional oval ground and premium facilities.",
        },
        {
          q: "Do you offer football turf booking in Mysuru?",
          a: "Yes, we provide football turf booking for matches, practice sessions, and tournaments.",
        },
        {
          q: "Where is ARC Sportzone located?",
          a: "We are located in Hebbal Industrial Area, Mysuru, with easy access from major areas.",
        },
        {
          q: "Is night play available?",
          a: "Yes, floodlights are available for night cricket and football matches.",
        },
        {
          q: "How can I book the turf?",
          a: "You can call us directly or visit ARC Sportzone to book your slot.",
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
        >
          <summary className="flex justify-between items-center font-semibold text-lg text-black list-none">
            {item.q}
            <span className="text-red-600 group-open:rotate-45 transition text-2xl">+</span>
          </summary>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>

  </div>
</section>

    </main>
  );
}
{/* SCHEMA MARKUP */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        name: "ARC Sportzone",
        description:
          "Professional oval cricket ground and football turf in Hebbal Industrial Area, Mysuru. Ideal for matches, practice, and tournaments.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mysuru",
          addressRegion: "Karnataka",
          postalCode: "570016",
          addressCountry: "IN",
        },
        areaServed: "Mysuru",
        sport: ["Cricket", "Football"],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Floodlights",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Parking",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Seating Area",
            value: true,
          },
        ],
        url: "https://www.arcsportzone.com/",
        telephone: "+91-8951950916",
        priceRange: "₹₹",
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Cricket & Football Turf Booking in Mysuru",
        provider: {
          "@type": "SportsActivityLocation",
          name: "ARC Sportzone",
        },
        areaServed: {
          "@type": "Place",
          name: "Mysuru",
        },
        serviceType: [
          "Cricket Turf Booking",
          "Football Turf Booking",
          "Tournament Hosting",
          "Practice Sessions",
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Hebbal Industrial Area, Mysuru",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best cricket turf in Mysuru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ARC Sportzone is one of the best cricket turfs in Mysuru with a professional oval ground and premium facilities.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer football turf booking in Mysuru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, ARC Sportzone provides football turf booking for matches, practice sessions, and tournaments.",
            },
          },
          {
            "@type": "Question",
            name: "Where is ARC Sportzone located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ARC Sportzone is located in Hebbal Industrial Area, Mysuru with easy access from major areas.",
            },
          },
          {
            "@type": "Question",
            name: "Is night play available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, floodlights are available for night cricket and football matches.",
            },
          },
          {
            "@type": "Question",
            name: "How can I book the turf?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can call +91-8951950916 or visit ARC Sportzone to book your slot.",
            },
          },
        ],
      },
    ]),
  }}
/>