"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/routes", label: "Routes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-navy)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="Target Transportation \u2014 Khobar and Bahrain Taxi"
              width={44}
              height={44}
              className="rounded-full bg-white"
              priority
            />
            <span className="font-display text-lg font-semibold text-[var(--color-sand)] hidden sm:inline">
              Target Transportation
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--color-sand)]/85 hover:text-[var(--color-amber)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-[var(--color-sand)]/85 hover:text-[var(--color-amber)] transition-colors"
            >
              <Phone size={16} />
              {site.phone}
            </a>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-amber)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            className="md:hidden text-[var(--color-sand)]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--color-navy)] border-t border-white/10 px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[var(--color-sand)] border-b border-white/5 text-base"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4">
            <a href={site.phoneHref} className="text-[var(--color-sand)]/85 text-sm">
              Call {site.phone}
            </a>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-amber)] px-5 py-3 text-sm font-semibold text-white text-center"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
