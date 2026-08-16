import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Routes | Target Transportation",
  description:
    "Fixed-fare taxi routes between Al Khobar, Dammam, Jubail, Riyadh, Qatar, and Bahrain.",
};

export default function RoutesPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
            All routes
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)] max-w-2xl">
            Every route we run, one fare each way
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 -mt-6">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((r) => (
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
      </section>
    </>
  );
}
