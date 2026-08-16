import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, waLink } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Target Transportation",
  description:
    "Cross-border taxi, airport transfers, executive SUV chauffeur, and corporate travel between the Eastern Province and Bahrain.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
            What we do
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)] max-w-2xl">
            Private transport, built around the Khobar–Bahrain crossing
          </h1>
          <p className="mt-5 text-[var(--color-sand)]/70 max-w-xl leading-relaxed">
            From the daily causeway run to executive chauffeur hire, every
            service is priced upfront and driven by someone who knows the
            route.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 -mt-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl bg-white border border-[var(--color-navy)]/10 p-8 hover:border-[var(--color-amber)] transition-colors flex flex-col"
            >
              <p className="font-display text-xl font-semibold text-[var(--color-navy)]">
                {s.name}
              </p>
              <p className="text-sm text-[var(--color-ink)]/65 mt-3 leading-relaxed flex-1">
                {s.short}
              </p>
              <div className="mt-6 flex items-center justify-between">
                {s.fromPrice ? (
                  <span className="text-sm font-semibold text-[var(--color-teal)]">
                    From {s.fromPrice}
                  </span>
                ) : (
                  <span />
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber)] group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 rounded-3xl bg-[var(--color-sand-dark)] p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--color-navy)]">
              Not sure which service fits your trip?
            </p>
            <p className="text-[var(--color-ink)]/65 mt-2">
              Message us your route and dates — we'll recommend the right option.
            </p>
          </div>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-[var(--color-sand)] hover:bg-[var(--color-navy-soft)] transition-colors whitespace-nowrap"
          >
            Ask on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
