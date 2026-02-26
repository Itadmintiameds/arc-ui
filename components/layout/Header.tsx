"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 🔥 Active checker (parent aware)
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // ✅ close mobile helper
  const closeMobileMenu = () => setMobileOpen(false);

  // 🔥 Sticky effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ PRO: auto-close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // 🔥 Nav style
  const navStyle = (path: string) =>
    `relative px-1 py-2 transition-all duration-300
     ${
       isActive(path)
         ? "text-yellow-300"
         : "text-white/90 hover:text-yellow-300"
     }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:w-0 after:bg-yellow-300 after:transition-all after:duration-300
     hover:after:w-full`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-red-700/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] py-2"
          : "bg-red-600 py-3"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/arclogo.png"
            alt="ARC Sportzone"
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden md:block text-lg font-bold tracking-wide leading-none">
            ARC SPORTZONE
          </span>
        </Link>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm items-center">
          
          <Link href="/" className={navStyle("/")}>HOME</Link>
          <Link href="/about" className={navStyle("/about")}>ABOUT</Link>

          <Dropdown title="SPORTS" active={isActive("/sports")}>
            <DropLink href="/sports/badminton">Badminton</DropLink>
            <DropLink href="/sports/futsal">Futsal</DropLink>
            <DropLink href="/sports/aqua">Aqua Zone</DropLink>
            <DropLink href="/sports/zumba">Zumba</DropLink>
            <DropLink href="/sports/yoga">Yoga</DropLink>
            <DropLink href="/sports/table-tennis">Table Tennis</DropLink>
            <DropLink href="/sports/snooker">Snooker</DropLink>
            <DropLink href="/sports/box-cricket">Box Cricket</DropLink>
            <DropLink href="/sports/martial-arts">Martial Arts</DropLink>
            <DropLink href="/sports/vr-game">VR Game</DropLink>

            <div className="relative group/sub">
              <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                Cross Fitness
                <span className="text-xs">▶</span>
              </div>

              <div className="absolute left-full top-0 ml-2 opacity-0 invisible
                              group-hover/sub:opacity-100 group-hover/sub:visible
                              transition-all duration-300">
                <div className="w-44 bg-white rounded-xl shadow-2xl py-2 border border-gray-100">
                  <DropLink href="/sports/spa">SPA</DropLink>
                  <DropLink href="/sports/gym">GYM</DropLink>
                </div>
              </div>
            </div>
          </Dropdown>

          <Dropdown title="PACKAGES" active={isActive("/packages")}>
            <DropLink href="/packages/regular">Regular Packages</DropLink>
            <DropLink href="/packages/corporate">Corporate Packages</DropLink>
          </Dropdown>

          <Dropdown title="MEMBERSHIP" active={isActive("/membership")}>
            <DropLink href="/membership/regular">Regular Membership</DropLink>
            <DropLink href="/membership/lifetime">Lifetime Membership</DropLink>
          </Dropdown>

          <Dropdown title="RESTAURANTS" active={isActive("/restaurants")}>
            <DropLink href="/restaurants/goalpost">Goalpost</DropLink>
            <DropLink href="/restaurants/cockpit">Cockpit</DropLink>
            <DropLink href="/restaurants/whispering-greens">Whispering Greens</DropLink>
            <DropLink href="/restaurants/waterfront">Waterfront</DropLink>
            <DropLink href="/restaurants/take-a-break">Take a Break</DropLink>
          </Dropdown>

          <Link href="/events/summer-camp" className={navStyle("/events")}>EVENTS</Link>

          <Dropdown title="MEDIA" active={isActive("/media")}>
            <DropLink href="/media">Gallery</DropLink>
          </Dropdown>

          <Link href="/contact" className={navStyle("/contact")}>CONTACT</Link>
        </nav>

        {/* ✅ Mobile button */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-red-700 px-4 pb-4 pt-2 space-y-3 font-semibold">
          <Link href="/" className="block" onClick={closeMobileMenu}>HOME</Link>
          <Link href="/about" className="block" onClick={closeMobileMenu}>ABOUT</Link>
          <Link href="/sports" className="block" onClick={closeMobileMenu}>SPORTS</Link>
          <Link href="/packages" className="block" onClick={closeMobileMenu}>PACKAGES</Link>
          <Link href="/membership" className="block" onClick={closeMobileMenu}>MEMBERSHIP</Link>
          <Link href="/restaurants" className="block" onClick={closeMobileMenu}>RESTAURANTS</Link>
          <Link href="/events" className="block" onClick={closeMobileMenu}>EVENTS</Link>
          <Link href="/media" className="block" onClick={closeMobileMenu}>MEDIA</Link>
          <Link href="/contact" className="block" onClick={closeMobileMenu}>CONTACT</Link>
        </div>
      )}
    </header>
  );
}

/* ===================================================== */
/* 🔥 PREMIUM DROPDOWN */
/* ===================================================== */

function Dropdown({ title, children, active }: any) {
  return (
    <div className="relative group">
      <span
        className={`cursor-pointer flex items-center gap-1 transition-colors duration-300
        ${active ? "text-yellow-300" : "text-white/90 hover:text-yellow-300"}`}
      >
        {title}
        <span className="text-[10px] mt-[2px]">▾</span>
      </span>

      <div
        className="absolute left-0 top-full pt-4 opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible
                   transition-all duration-300"
      >
        <div
          className="w-60 bg-white/95 backdrop-blur-xl text-gray-800
                     rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                     py-2 border border-gray-100"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ===================================================== */
/* 🔥 DROPLINK */
/* ===================================================== */

function DropLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-sm hover:bg-gray-50
                 hover:text-red-600 transition-all duration-200"
    >
      {children}
    </Link>
  );
}