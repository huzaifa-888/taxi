import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { services, waLink } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Target Transportation`,
    description: service.short,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-light)]"
          >
            &larr; All services
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] mt-5">
            {service.name}
          </h1>
          <p className="mt-4 text-[var(--color-sand)]/75 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 -mt-8">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl bg-white border border-[var(--color-navy)]/10 p-8 sm:p-10">
            <p className="font-display text-lg font-semibold text-[var(--color-navy)] mb-5">
              What's included
            </p>
            <ul className="space-y-3.5">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check size={18} className="text-[var(--color-amber)] mt-0.5 shrink-0" />
                  <span className="text-sm text-[var(--color-ink)]/75 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            {service.fromPrice && (
              <div className="mt-8 pt-6 border-t border-[var(--color-navy)]/10 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/50">
                    Starting from
                  </p>
                  <p className="font-display text-2xl font-semibold text-[var(--color-navy)]">
                    {service.fromPrice}
                  </p>
                </div>
                <a
                  href={waLink(`Hello, I'd like to book: ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
                >
                  Book this service <ArrowRight size={16} />
                </a>
              </div>
            )}
            {!service.fromPrice && (
              <div className="mt-8 pt-6 border-t border-[var(--color-navy)]/10">
                <a
                  href={waLink(`Hello, I'd like a quote for: ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
                >
                  Request a quote <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
