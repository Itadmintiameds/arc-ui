import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1b34] to-[#081428] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 tracking-wide">
            ARC SPORTZONE
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-white mt-1" />
              <p className="leading-relaxed">
                Hebbal Industrial Area <br />
                Mysuru - 570016
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              <a
                href="tel:+918951950916"
                className="hover:text-white transition duration-300"
              >
                +91 89519 50916
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Events", href: "/events" },
              { name: "Gallery", href: "/gallery" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="font-bold text-lg mb-4">Packages</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link
                href="/packages/regular"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Regular Packages
              </Link>
            </li>
            <li>
              <Link
                href="/packages/corporate"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Corporate Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/arcsportzone/"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#0b1b34] transition-all duration-300 transform hover:scale-110"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/arc_sportzone?igsh=MXVkNmN6MHp2ZG9rNQ=="
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#0b1b34] transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={18} />
            </Link>

            <Link
              href="https://www.youtube.com/@OfficialARCSportzone"
              target="_blank"
              className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-[#0b1b34] transition-all duration-300 transform hover:scale-110"
            >
              <Youtube size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="text-center text-sm py-4 text-gray-400">
          © {new Date().getFullYear()} ARC Sportzone
        </div>
      </div>
    </footer>
  );
}