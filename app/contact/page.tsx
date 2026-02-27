import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* ===== Hero Banner ===== */}
<section className="relative w-full overflow-hidden">
  <img
    src="/images/hero2.jpeg"
    alt="Contact ARC Sportzone"
    className="w-full h-auto object-contain"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
        Contact ARC Sportzone
      </h1>

      <div className="text-gray-200 mt-3 space-y-4">
        <p>We’d love to hear from you</p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQxrM-uxOqf8uxelqdc84NKQg-drGyXxIuHYz_cqcj-gV72Q/viewform?usp=sharing&ouid=107011122501195333913"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Enquire Now
        </a>
      </div>
    </div>
  </div>
</section>

      {/* ===== Contact Info ===== */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ARC Sportzone
            </h3>

            <p className="text-gray-600 leading-relaxed">
              #440/D, Hebbal Industrial Area,<br />
              Behind Shubodini Convention Hall,<br />
              Hebbal, Mysuru – 570016
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Info
            </h3>

            <p className="text-gray-600 mb-2">
              📞 Phone:{" "}
              <a
                href="tel:+918951950916"
                className="text-red-600 font-semibold hover:underline"
              >
                +91 89519 50916
              </a>
            </p>

            <p className="text-gray-600">
              ✉️ Email:{" "}
              <a
                href="mailto:info@arcsportzone.com"
                className="text-red-600 font-semibold hover:underline"
              >
                info@arcsportzone.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Google Map ===== */}
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps?q=ARC%20Sportzone%20Mysuru&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
        />
      </section>

      {/* ===== Reviews Section ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Visitors Say
          </h2>

          <p className="text-gray-600 mb-12">
            Real feedback from our community
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Review 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                ⭐⭐⭐⭐⭐<br />
                Excellent sports facility in Mysuru. Clean courts and great coaching staff.
              </p>
              <h4 className="font-semibold text-gray-900">Rahul S</h4>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                ⭐⭐⭐⭐⭐<br />
                My kids love the training here. Very professional environment.
              </p>
              <h4 className="font-semibold text-gray-900">Priya N</h4>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                ⭐⭐⭐⭐⭐<br />
                One of the best multi-sports complexes in Mysuru.
              </p>
              <h4 className="font-semibold text-gray-900">Karthik R</h4>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}