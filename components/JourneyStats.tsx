import { Car, ShieldCheck, MapPinned, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Car,
    value: "SAR 300",
    label: "Fixed Khobar\u2013Bahrain fare",
    caption: "Agreed before you travel, every time",
  },
  {
    icon: Clock3,
    value: "45\u201360 min",
    label: "Typical crossing time",
    caption: "Via the King Fahd Causeway",
  },
  {
    icon: MapPinned,
    value: "24/7",
    label: "On the road",
    caption: "Book any hour, every day",
  },
  {
    icon: ShieldCheck,
    value: "48h",
    label: "Free cancellation",
    caption: "No charge if plans change",
  },
];

export default function JourneyStats() {
  return (
    <section className="bg-[var(--color-navy-deep)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-amber-light)] mb-4">
          Trusted across the Gulf
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--color-sand)]">
          Our Journey in Numbers
        </h2>
        <p className="mt-3 text-[var(--color-sand)]/60 max-w-xl mx-auto">
          From Al Khobar to Manama, delivering fixed-fare cross-border
          transportation that passengers can rely on.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--color-sand)]/10 bg-[var(--color-navy)] p-7 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-amber)]/15 flex items-center justify-center">
                <s.icon size={20} className="text-[var(--color-amber-light)]" />
              </div>
              <p className="font-display text-2xl font-semibold text-[var(--color-amber-light)] mt-5">
                {s.value}
              </p>
              <p className="text-sm font-semibold text-[var(--color-sand)] mt-1">
                {s.label}
              </p>
              <p className="text-xs text-[var(--color-sand)]/50 mt-1">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
