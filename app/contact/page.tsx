import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { site } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Target Transportation",
  description:
    "Get in touch with Target Transportation by phone, WhatsApp, or email to book your Khobar to Bahrain taxi.",
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
      <section className="bg-[var(--color-navy)] pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
            Get in touch
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)] max-w-2xl">
            Let's get your trip booked
          </h1>
          <p className="mt-5 text-[var(--color-sand)]/75 max-w-xl leading-relaxed">
            WhatsApp is the fastest way to reach us. For anything else, use
            the form below or the details on this page.
          </p>
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
    </>
  );
}
