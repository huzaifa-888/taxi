import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { site, routes } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-sand)]/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <Image
              src="/logo.png"
              alt="Khobar and Bahrain Taxi"
              width={168}
              height={66}
              className="h-9 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Fixed-fare private taxi transfers between the Eastern Province and
            Bahrain, across the King Fahd Causeway.
          </p>
          <div className="flex gap-4 mt-5">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--color-amber)]">
              <Facebook size={18} />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--color-amber)]">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-sand)] mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-[var(--color-amber)]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-amber)]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-amber)]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-amber)]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-sand)] mb-4">Popular Routes</p>
          <ul className="space-y-2.5 text-sm">
            {routes.slice(0, 4).map((r) => (
              <li key={r.slug}>
                <Link href={`/routes/${r.slug}`} className="hover:text-[var(--color-amber)]">
                  {r.from} to {r.to}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--color-sand)] mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
              <a href={site.phoneHref} className="hover:text-[var(--color-amber)]">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
              <a href={`mailto:${site.email}`} className="hover:text-[var(--color-amber)] break-all">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-sand)]/60">
          <p>&copy; {new Date().getFullYear()} Khobar and Bahrain Taxi. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-[var(--color-amber)]">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-[var(--color-amber)]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
