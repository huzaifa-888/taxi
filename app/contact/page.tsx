import { Phone, Mail, MapPin, Clock3, MessageCircle } from "lucide-react";
import Image from "next/image";
import { site, waLink } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Khobar and Bahrain Taxi",
  description:
    "Get in touch with Khobar and Bahrain Taxi by phone, WhatsApp, or email to book your Khobar to Bahrain taxi.",
};

const info = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Clock3, label: "Hours", value: "Available 24/7, every day" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-6 pb-6 h-[50vh] flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
              Get in touch
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)] max-w-2xl">
              Let&apos;s get your trip booked
            </h1>
            <p className="mt-5 text-[var(--color-sand)]/75 max-w-xl leading-relaxed">
              WhatsApp is the fastest way to reach us. For anything else, use
              the form below or the details on this page.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/11]">
            <Image
              src="/images/contact.png"
              alt="Khobar and Bahrain Taxi vehicle"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 -mt-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 content-start">
            {info.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white border border-[var(--color-navy)]/10 p-6 flex items-start gap-4"
              >
                <item.icon size={20} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-[var(--color-navy)] mt-1 hover:text-[var(--color-teal)] break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[var(--color-navy)] mt-1">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="rounded-3xl bg-[var(--color-sand-dark)] px-8 py-12 sm:py-14 text-center flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--color-navy)]">
              Ready to Ride?
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-semibold text-[var(--color-amber)]">
              Book Your Taxi Today
            </p>
            <p className="mt-4 text-[var(--color-ink)]/60 max-w-md">
              Available 24/7 for all your transportation needs between
              Khobar and Bahrain.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
              >
                <Phone size={16} />
                Call: {site.phone}
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:brightness-105 transition-all"
              >
                <MessageCircle size={16} fill="currentColor" strokeWidth={0} />
                WhatsApp: {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}