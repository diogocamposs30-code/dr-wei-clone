"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        // Scrolling down past threshold — hide
        setHidden(true);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up — show
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "transition-transform duration-300 ease-[ease]"
      )}
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(18,18,18,0.08)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-5 h-14 md:h-16"
        style={{
          maxWidth: "1400px",
        }}
      >
        {/* Left: Hamburger (mobile only) */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label="Open menu"
          style={{ color: "#121212" }}
        >
          <Menu size={22} />
        </button>

        {/* Center: Brand + desktop nav */}
        <div className="flex items-center gap-8">
          {/* Desktop nav links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-opacity duration-200 hover:opacity-70"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#121212",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Brand name */}
          <a
            href="/"
            className="site-brand-link"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#121212",
              textDecoration: "none",
            }}
          >
            Dr. Wei Longshan
          </a>

          {/* Desktop brand font-size */}
          <style>{`
            @media (min-width: 750px) {
              .site-brand-link { font-size: 16px !important; }
            }
          `}</style>
        </div>

        {/* Right: Icon buttons */}
        <div className="flex items-center">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 transition-opacity duration-200 hover:opacity-70"
            aria-label="Search"
            style={{ color: "#121212" }}
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 transition-opacity duration-200 hover:opacity-70"
            aria-label="Account"
            style={{ color: "#121212" }}
          >
            <User size={20} />
          </button>
          <button
            type="button"
            className="relative flex items-center justify-center w-10 h-10 transition-opacity duration-200 hover:opacity-70"
            aria-label="Cart (0 items)"
            style={{ color: "#121212" }}
          >
            <ShoppingBag size={20} />
            {/* Cart badge — hardcoded to 0 for demo */}
            <span
              className="absolute top-1 right-1 flex items-center justify-center rounded-full text-white leading-none"
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: "#121212",
                fontSize: "10px",
                fontFamily: "Poppins, sans-serif",
              }}
              aria-hidden="true"
            >
              0
            </span>
          </button>
        </div>
      </div>

    </header>
  );
}
