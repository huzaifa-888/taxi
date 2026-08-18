import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { posts } from "@/lib/blog";
import { waLink } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Khobar and Bahrain Taxi`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[var(--color-navy)] pt-14 pb-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[var(--color-sand)]/50 mb-6"
          >
            <Link href="/" className="hover:text-[var(--color-amber-light)] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[var(--color-amber-light)] transition-colors">
              Blog
            </Link>
            <ChevronRight size={12} />
            <span className="text-[var(--color-sand)]/80 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>
          <p className="text-xs uppercase tracking-wide text-[var(--color-sand)]/50">
            {formatDate(post.date)} &middot; {post.readTime}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)] mt-3 max-w-2xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-[var(--color-ink)]/75 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-[var(--color-sand-dark)] p-8 sm:p-10 text-center flex flex-col items-center">
            <p className="font-display text-xl font-semibold text-[var(--color-navy)]">
              Planning this trip yourself?
            </p>
            <p className="text-[var(--color-ink)]/60 mt-2 max-w-md">
              Book a fixed-fare private transfer and skip the driving.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
            >
              Book on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
