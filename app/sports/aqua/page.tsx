// app/sports/aqua-zone/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AquaZonePage() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
      {/* ===== HERO ===== */}
      <section className="relative h-[260px] md:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/aquazone-banner.jpg"
          alt="Aqua Zone"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#E7E2D8] tracking-wide">
            Aqua Zone
          </h1>

          <div className="mt-3 text-sm text-gray-200">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/sports" className="hover:text-white">
              Sports
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#E7E2D8] font-medium">Aqua Zone</span>
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Swimming at{" "}
              <span className="font-semibold text-gray-900">
                ARC Sportzone
              </span>{" "}
              is the perfect way to stay active, have fun, and improve your
              overall well-being. Whether you’re looking for a relaxing swim or
              a low-impact workout, our state-of-the-art facility provides a
              safe and enjoyable environment for all ages.
            </p>

            <p>
              We proudly offer the{" "}
              <span className="font-semibold text-gray-900">
                best swimming coaching in Mysore
              </span>{" "}
              and near Hebbal, with structured programs for both beginners and
              competitive swimmers. Our expert coaches help you master
              breaststroke, backstroke, freestyle, and butterfly techniques.
            </p>

            <p>
              Whether preparing for sprints or endurance events, ARC Sportzone
              provides the perfect environment to push your limits and enjoy the
              lifelong benefits of swimming.
            </p>
          </div>

          <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/aqua.jpg"
              alt="Swimming pool"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== SWIMMING IN INDIA ===== */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 text-gray-700 leading-relaxed space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
            Swimming in India
          </h2>

          <p>
            India has produced remarkable swimming champions over the years.
            One such athlete is{" "}
            <strong>Virdhawal Vikram Khade</strong>, who made history by
            competing in the men&apos;s 50, 100, and 200 meters freestyle at
            the 2008 Beijing Olympics and later won bronze at the 2010 Asian
            Games. He was honored with the <strong>Arjuna Award in 2011</strong>.
          </p>

          <p>
            In recent years, Indian swimming has grown significantly with stars
            like <strong>Srihari Nataraj</strong> and{" "}
            <strong>Sajan Prakash</strong> representing India at the 2020 Tokyo
            Olympics and breaking multiple national records. With improved
            facilities and support, India continues to rise in global swimming.
          </p>
        </div>
      </section>

      {/* ===== INDIA PROUD ===== */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            India is proud of
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Sajan */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="relative h-[260px]">
                <Image
                  src="/img/Sajan-Prakash.png"
                  alt="Sajan Prakash"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-gray-700 leading-relaxed">
                Sajan Prakash created history on{" "}
                <strong>8 February 2015</strong> by winning 6 gold and 3 silver
                medals at the Indian National Games. He also represented India
                at the 2016 Rio Olympics in the 200m butterfly.
              </div>
            </div>

            {/* Shikha */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="relative h-[260px]">
                <Image
                  src="/img/Shikha-Tandon.jpg"
                  alt="Shikha Tandon"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-gray-700 leading-relaxed">
                Shikha Tandon is a champion swimmer from Bangalore, India. She
                has won <strong>146 national medals</strong> and 36
                international medals, including five gold medals.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POOL AT ARC ===== */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/slider/sports-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-4xl mx-auto px-4 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Swimming Pool at ARC
          </h2>

          <p className="text-lg text-gray-200">
            ARC features a Semi-Olympic swimming pool with world-class
            facilities, providing the perfect environment for training,
            fitness, and recreation.
          </p>
        </div>
      </section>
    </main>
  );
}