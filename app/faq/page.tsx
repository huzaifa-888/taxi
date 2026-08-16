import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { faqs, waLink } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Target Transportation",
  description:
    "Answers to common questions about booking a taxi between Khobar and Bahrain, pricing, documents, and vehicles.",
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
            Support
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-[var(--color-sand)]/70">
            Everything you need to know before you book.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <FAQ items={faqs} />

          <div className="mt-14 rounded-3xl bg-[var(--color-sand-dark)] p-10 sm:p-12 text-center flex flex-col items-center">
            <p className="font-display text-2xl font-semibold text-[var(--color-navy)]">
              Still have a question?
            </p>
            <p className="text-[var(--color-ink)]/65 mt-2 max-w-md">
              Message us directly on WhatsApp and we'll get back to you right away.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Ask on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
