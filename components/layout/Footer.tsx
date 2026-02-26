import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1b34] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="font-bold mb-3">ARC SPORTZONE</h3>
          <p className="text-sm text-gray-300">
            Hebbal Industrial Area<br />
            Mysuru - 570016<br />
            +91 89519 50916
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="font-bold mb-3">Packages</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                href="/packages/regular"
                className="hover:text-white transition"
              >
                Regular Packages
              </Link>
            </li>
            <li>
              <Link
                href="/packages/corporate"
                className="hover:text-white transition"
              >
                Corporate Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/arcsportzone/"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/arc_sportzone?igsh=MXVkNmN6MHp2ZG9rNQ=="
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={18} />
            </Link>     

            <Link
              href="https://www.youtube.com/@OfficialARCSportzone"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <Youtube size={18} /> 
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 bg-[#081428]">
        © {new Date().getFullYear()} ARC Sportzone
      </div>
    </footer>
  );
}