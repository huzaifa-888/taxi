import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wallet,
  UserCheck,
  Clock3,
  Gauge,
  ArrowRight,
} from "lucide-react";
import RouteMap from "@/components/RouteMap";
import BookingWidget from "@/components/BookingWidget";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import JourneyStats from "@/components/JourneyStats";
import { routes, services, site, faqs, fleet, waLink } from "@/lib/data";

const reasons = [
  {
    icon: Wallet,
    title: "Fixed fare",
    text: "SAR 300 agreed before you travel \u2014 no meter, no last-minute surprises.",
  },
  {
    icon: UserCheck,
    title: "Professional drivers",
    text: "Licensed and experienced with cross-border documentation and checkpoints.",
  },
  {
    icon: Clock3,
    title: "24/7 availability",
    text: "Book any hour of the day through WhatsApp or by phone.",
  },
  {
    icon: Gauge,
    title: "Fast border crossing",
    text: "Our drivers know the quickest lanes across the King Fahd Causeway.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose your pickup point",
    text: "Tell us where in Khobar, Dammam, or Jubail you'd like to be collected.",
  },
  {
    n: "02",
    title: "Select your destination",
    text: "Bahrain, an airport, or another city \u2014 we'll confirm the route.",
  },
  {
    n: "03",
    title: "Confirm your fixed fare",
    text: "We agree the price upfront, so there's nothing to negotiate on the day.",
  },
  {
    n: "04",
    title: "Meet your driver",
    text: "You'll get driver details and an estimated arrival time before pickup.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--color-navy)] pt-14 pb-48 sm:pb-56 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, var(--color-navy-soft) 0%, transparent 45%), radial-gradient(circle at 85% 0%, var(--color-teal) 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-5">
                Al Khobar &middot; Dammam &middot; Bahrain
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-[var(--color-sand)]">
                {site.tagline}
              </h1>
              <p className="mt-6 text-lg text-[var(--color-sand)]/75 max-w-xl leading-relaxed">
                A private, fixed-fare taxi across the King Fahd Causeway. Licensed
                drivers, air-conditioned SUVs, and a straight answer on price
                before you ever get in the car.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
                >
                  Book on WhatsApp
                  <ArrowRight size={16} />
                </a>
                <a
                  href={site.phoneHref}
                  className="text-sm font-medium text-[var(--color-sand)]/80 hover:text-[var(--color-amber-light)]"
                >
                  or call {site.phone}
                </a>
              </div>

              <div className="mt-10 flex items-center gap-8">
                <div>
                  <p className="font-display text-2xl font-semibold text-[var(--color-sand)]">
                    SAR 300
                  </p>
                  <p className="text-xs text-[var(--color-sand)]/55 mt-0.5">
                    Fixed Khobar&ndash;Bahrain fare
                  </p>
                </div>
                <div className="h-9 w-px bg-[var(--color-sand)]/15" />
                <div>
                  <p className="font-display text-2xl font-semibold text-[var(--color-sand)]">
                    45&ndash;60 min
                  </p>
                  <p className="text-xs text-[var(--color-sand)]/55 mt-0.5">
                    Typical crossing time
                  </p>
                </div>
                <div className="h-9 w-px bg-[var(--color-sand)]/15" />
                <div>
                  <p className="font-display text-2xl font-semibold text-[var(--color-sand)]">
                    24/7
                  </p>
                  <p className="text-xs text-[var(--color-sand)]/55 mt-0.5">
                    On the road
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 scale-90 rounded-full blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/images/hero-car.png"
                alt="SUV used for Khobar and Bahrain Taxi's private cross-border transfers"
                width={2000}
                height={1146}
                className="relative w-full h-auto drop-shadow-[0_35px_45px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>
          </div>

          <div className="mt-16 hidden sm:block">
            <RouteMap />
          </div>
        </div>
      </section>

      {/* BOOKING WIDGET - floats between hero and next section */}
      <div className="relative -mt-28 sm:-mt-24 mb-16 z-10">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <BookingWidget />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why travelers choose us"
            title="Built for people who cross this border often"
            description="We've run the Khobar\u2013Bahrain route long enough to know exactly where delays happen \u2014 and how to avoid them."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-[var(--color-navy)]/10 bg-white p-6"
              >
                <r.icon size={26} className="text-[var(--color-amber)]" />
                <p className="font-display text-lg font-semibold text-[var(--color-navy)] mt-4">
                  {r.title}
                </p>
                <p className="text-sm text-[var(--color-ink)]/65 mt-2 leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
     {/* FLEET */}
<section className="py-20 sm:py-24 bg-[var(--color-sand-dark)]">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        eyebrow="Our fleet"
        title="Choose the car that fits your trip"
        description="Every vehicle is inspected, air-conditioned, and driven by a licensed professional."
      />
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-navy)]"
      >
        View all services <ArrowRight size={15} />
      </Link>
    </div>

    <div className="mt-12 grid sm:grid-cols-2 gap-6">
      {fleet.map((f, index) => (
        <div
          key={f.name}
          className="rounded-2xl bg-white border border-[var(--color-navy)]/10 overflow-hidden"
        >
          <div className="relative w-full aspect-[16/10] bg-[var(--color-sand-dark)]">
            <Image
              src={index === 1 ? "/images/sv.jpeg" : "/images/s2.png"}
              alt={`${f.name} placeholder \u2014 replace with your own vehicle photo`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="font-display text-xl font-semibold text-[var(--color-navy)]">
              {f.name}
            </p>
            <p className="text-sm text-[var(--color-ink)]/65 mt-2 leading-relaxed">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* HIRE BY THE HOUR */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl bg-[var(--color-navy)] p-10 sm:p-12 flex flex-col justify-center">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] leading-tight">
              Hire a private driver by the hour.
            </h2>
            <p className="mt-5 text-[var(--color-sand)]/70 leading-relaxed">
              The most flexible car service you can imagine. A professional,
              licensed driver at your service, for as long as you need.
            </p>
            <p className="mt-3 text-[var(--color-sand)]/55 text-sm leading-relaxed">
              Perfect for business meetings, exploring a city, or a fully
              custom itinerary — fixed hourly rates, no surge pricing.
            </p>
            <Link
              href="/services/executive-suv-chauffeur"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] hover:bg-[var(--color-sand)] transition-colors"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-[var(--color-sand-dark)] min-h-[280px]">
            <Image
              src="/images/sedan.png"
              alt="Executive sedan available for hourly private driver service"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <JourneyStats />

      {/* POPULAR ROUTES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Popular routes"
              title="Where we take you"
            />
            <Link
              href="/routes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-navy)]"
            >
              View all routes <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routes.slice(0, 6).map((r) => (
              <Link
                key={r.slug}
                href={`/routes/${r.slug}`}
                className="group rounded-2xl border border-[var(--color-navy)]/10 bg-white p-6 hover:border-[var(--color-amber)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-semibold text-[var(--color-navy)]">
                    {r.from} <span className="text-[var(--color-amber)]">&rarr;</span> {r.to}
                  </p>
                  <ArrowRight
                    size={18}
                    className="text-[var(--color-navy)]/30 group-hover:text-[var(--color-amber)] group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="text-sm text-[var(--color-ink)]/60 mt-2">{r.blurb}</p>
                <div className="flex items-center gap-4 mt-4 text-xs font-semibold text-[var(--color-teal)]">
                  <span>{r.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-teal)]/50" />
                  <span>{r.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24 bg-[var(--color-navy)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Booking process"
            title="Four steps, start to finish"
            light
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-display text-3xl font-semibold text-[var(--color-amber)]">
                  {s.n}
                </p>
                <p className="font-display text-lg font-medium text-[var(--color-sand)] mt-3">
                  {s.title}
                </p>
                <p className="text-sm text-[var(--color-sand)]/65 mt-2 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-[var(--color-sand-dark)]">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)] mb-3">
            Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-navy)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[var(--color-ink)]/60">
            If you have any questions, here are the answers.
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-5 lg:px-8 mt-12">
          <FAQ items={faqs.slice(0, 6)} />
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
            >
              See all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-sand-dark)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 rounded-3xl bg-[var(--color-navy)] px-8 py-14 sm:py-16 text-center flex flex-col items-center">
          <ShieldCheck size={32} className="text-[var(--color-amber)]" />
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] mt-5 max-w-xl">
            Ready to cross the causeway?
          </h2>
          <p className="text-[var(--color-sand)]/70 mt-4 max-w-md">
            Send us your pickup point and travel date on WhatsApp — we'll
            confirm your fare and driver in minutes.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
          >
            Book Now
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
