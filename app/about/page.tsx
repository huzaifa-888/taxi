import { ArrowRight, ShieldCheck, Clock3, MapPinned, User, Award, Heart } from "lucide-react";
import Image from "next/image";
import RouteMap from "@/components/RouteMap";
import SectionHeading from "@/components/SectionHeading";
import { waLink, drivers } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Khobar and Bahrain Taxi",
  description:
    "Khobar and Bahrain Taxi is a professional, reliable taxi service based in Al Khobar, Saudi Arabia, running fixed-fare private taxis across the King Fahd Causeway.",
};

const values = [
  {
    icon: Clock3,
    title: "Always on time",
    text: "We respect your time and ensure punctual pickups, every ride.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable prices",
    text: "Fair, transparent rates with no hidden charges \u2014 ever.",
  },
  {
    icon: MapPinned,
    title: "Available 24/7",
    text: "Day or night, we're always ready to take you wherever you need.",
  },
];

const ourValues = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Your safety is our top priority with licensed drivers and well-maintained vehicles.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Committed to delivering the highest quality service on every ride.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    text: "Dedicated to providing exceptional customer service and support.",
  },
  {
    icon: Clock3,
    title: "Reliability",
    text: "Punctual service you can count on, 24 hours a day, 7 days a week.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
              Our Story
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)] max-w-2xl">
              About Our Taxi Service
            </h1>
            <p className="mt-5 text-[var(--color-sand)]/75 max-w-xl leading-relaxed">
              We are a professional and reliable taxi service based in Saudi
              Arabia, dedicated to providing safe, comfortable, and on-time
              transportation for all our customers. Whether you need a quick
              city ride, an airport transfer, or a long-distance trip, our
              experienced drivers and well-maintained vehicles ensure a smooth
              journey every time. We pride ourselves on honesty, punctuality,
              and customer satisfaction — because your comfort is our
              priority.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-[16/11]">
            <Image
              src="/images/about.jpg"
              alt="Khobar and Bahrain Taxi service"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12">
          <RouteMap />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <SectionHeading
            eyebrow="The goal"
            title="Our mission"
            description="To give every traveler between the Eastern Province and Bahrain a taxi experience built on trust: a fixed fare agreed upfront, a clean and comfortable car, and a driver who knows the King Fahd Causeway well enough to get you across it without stress."
          />
          <div className="rounded-2xl bg-[var(--color-sand-dark)] p-8 sm:p-10">
            <p className="font-display text-lg font-semibold text-[var(--color-navy)] mb-5">
              What guides how we operate
            </p>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <v.icon size={22} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">{v.title}</p>
                    <p className="text-sm text-[var(--color-ink)]/65 mt-1 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber)] mb-4">
            What we stand for
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-navy)]">
            Our Values
          </h2>
          <p className="mt-3 text-[var(--color-ink)]/60 max-w-xl mx-auto">
            The principles that guide everything we do.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {ourValues.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-[var(--color-navy)]/10 bg-white p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-amber)]/15 flex items-center justify-center">
                  <v.icon size={22} className="text-[var(--color-amber)]" />
                </div>
                <p className="font-display text-lg font-semibold text-[var(--color-navy)] mt-5">
                  {v.title}
                </p>
                <p className="text-sm text-[var(--color-ink)]/60 mt-2 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[var(--color-sand-dark)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="The team"
            title="Meet our drivers"
            description="Licensed, experienced, and familiar with every checkpoint on the causeway."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {drivers.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl bg-white border border-[var(--color-navy)]/10 p-7 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-navy)] flex items-center justify-center">
                  <User size={28} className="text-[var(--color-amber-light)]" />
                </div>
                <p className="font-display text-lg font-semibold text-[var(--color-navy)] mt-4">
                  {d.name}
                </p>
                <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mt-1">
                  {d.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-20 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 rounded-3xl bg-[var(--color-navy)] p-10 sm:p-14 text-center flex flex-col items-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] max-w-xl">
            Traveling with us for the first time?
          </h2>
          <p className="text-[var(--color-sand)]/70 mt-4 max-w-md">
            Message us on WhatsApp and we'll walk you through pickup, pricing,
            and what to expect at the border.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
          >
            Chat with us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}