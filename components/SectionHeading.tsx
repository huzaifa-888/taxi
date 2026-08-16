export default function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${
            light ? "text-[var(--color-amber-light)]" : "text-[var(--color-teal)]"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl font-semibold leading-tight ${
          light ? "text-[var(--color-sand)]" : "text-[var(--color-navy)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-[var(--color-sand)]/75" : "text-[var(--color-ink)]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
