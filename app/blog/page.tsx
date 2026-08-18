import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { posts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Khobar and Bahrain Taxi",
  description:
    "Travel guides and tips for crossing between Saudi Arabia and Bahrain via the King Fahd Causeway.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-xs text-[var(--color-sand)]/50 mb-6"
          >
            <Link href="/" className="hover:text-[var(--color-amber-light)] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-[var(--color-sand)]/80">Blog</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
            Travel guides
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--color-sand)]">
            Blog
          </h1>
          <p className="mt-4 text-[var(--color-sand)]/70">
            Practical guides for traveling between Saudi Arabia and Bahrain.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-[var(--color-navy)]/10 bg-white p-7 sm:p-8 hover:shadow-lg hover:shadow-black/5 transition-shadow"
            >
              <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/45">
                {formatDate(post.date)} &middot; {post.readTime}
              </p>
              <h2 className="font-display text-2xl font-semibold text-[var(--color-navy)] mt-3 group-hover:text-[var(--color-amber)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--color-ink)]/60 mt-3 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-amber)] mt-5">
                Read more <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}