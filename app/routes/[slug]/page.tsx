import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock3, Wallet, MapPin } from "lucide-react";
import { routes, waLink } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);
  if (!route) return {};
  return {
    title: `${route.from} to ${route.to} Taxi | Khobar and Bahrain Taxi`,
    description: route.blurb,
  };
}

export default async function RouteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);
  if (!route) notFound();

  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/routes"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-light)]"
          >
            &larr; All routes
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] mt-5">
            {route.from} to {route.to} Taxi
          </h1>
          <p className="mt-4 text-[var(--color-sand)]/75 max-w-xl leading-relaxed">
            {route.blurb}
          </p>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl bg-white border border-[var(--color-navy)]/10 p-8 sm:p-10 grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50">Route</p>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-1">
                  {route.from} &rarr; {route.to}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 size={20} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50">Duration</p>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-1">{route.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wallet size={20} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50">Fare</p>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-1">{route.price}</p>
              </div>
            </div>

            <div className="sm:col-span-3 pt-6 border-t border-[var(--color-navy)]/10">
              <a
                href={waLink(`Hello, I'd like to book a taxi from ${route.from} to ${route.to}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
              >
                Book this route <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
