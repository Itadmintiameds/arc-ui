"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 🔥 sticky shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ active link helper
  const navLinkClass = (path: string) =>
    `relative group transition-colors duration-300 ${
      pathname === path
        ? "text-yellow-300"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-red-700/95 backdrop-blur-md py-2 shadow-xl"
          : "bg-red-600 py-3"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/arclogo.png"
            alt="ARC Sportzone"
            className="h-12 w-auto"
          />
          <span className="hidden md:block text-lg font-bold tracking-wide leading-none">
            ARC SPORTZONE
          </span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm items-center">

          <Link href="/" className={navLinkClass("/")}>
            HOME
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/about" className={navLinkClass("/about")}>
            ABOUT
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/sports" className={navLinkClass("/sports")}>
            SPORTS
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/packages" className={navLinkClass("/packages")}>
            PACKAGES
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/membership" className={navLinkClass("/membership")}>
            MEMBERSHIP
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/restaurants" className={navLinkClass("/restaurants")}>
            RESTAURANTS
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/events" className={navLinkClass("/events")}>
            EVENTS
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/media" className={navLinkClass("/media")}>
            MEDIA
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/contact" className={navLinkClass("/contact")}>
            CONTACT
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </nav>

        {/* ✅ Mobile button */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-red-700 px-4 pb-4 pt-2 space-y-3 font-semibold animate-in slide-in-from-top duration-200">

          <Link href="/" className="block hover:text-yellow-300">HOME</Link>
          <Link href="/about" className="block hover:text-yellow-300">ABOUT</Link>
          <Link href="/sports" className="block hover:text-yellow-300">SPORTS</Link>
          <Link href="/packages" className="block hover:text-yellow-300">PACKAGES</Link>
          <Link href="/membership" className="block hover:text-yellow-300">MEMBERSHIP</Link>
          <Link href="/restaurants" className="block hover:text-yellow-300">RESTAURANTS</Link>
          <Link href="/events" className="block hover:text-yellow-300">EVENTS</Link>
          <Link href="/media" className="block hover:text-yellow-300">MEDIA</Link>
          <Link href="/contact" className="block hover:text-yellow-300">CONTACT</Link>

        </div>
      )}
    </header>
  );
}