"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 sticky shrink effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-red-700 py-2 shadow-lg" : "bg-red-600 py-3"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex i    tems-center gap-2">
          <img
            src="/images/arclogo.png"
            alt="ARC Sportzone"
            className="h-10 w-auto"
          />
          <span className="font-bold hidden md:block">
            ARC SPORTZONE
          </span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-semibold text-sm">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/sports">SPORTS</Link>
          <Link href="/packages">PACKAGES</Link>
          <Link href="/membership">MEMBERSHIP</Link>
          <Link href="/restaurants">RESTAURANTS</Link>
          <Link href="/events">EVENTS</Link>
          <Link href="/media">MEDIA</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>

        {/* ✅ Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-red-700 px-4 pb-4 space-y-3 font-semibold">
          <Link href="/" className="block">HOME</Link>
          <Link href="/about" className="block">ABOUT</Link>
          <Link href="/sports" className="block">SPORTS</Link>
          <Link href="/packages" className="block">PACKAGES</Link>
          <Link href="/membership" className="block">MEMBERSHIP</Link>
          <Link href="/restaurants" className="block">RESTAURANTS</Link>
          <Link href="/events" className="block">EVENTS</Link>
          <Link href="/media" className="block">MEDIA</Link>
          <Link href="/contact" className="block">CONTACT</Link>
        </div>
      )}
    </header>
  );
}