"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Clock, CalendarDays } from "lucide-react";
import { waLink } from "@/lib/data";

const tabs = [
  { id: "transfer", label: "Transfers" },
  { id: "hourly", label: "Hourly Driver" },
  { id: "day", label: "Day Trip" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export default function BookingWidget() {
  const [tab, setTab] = useState<Tab>("transfer");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let message = "";
    if (tab === "transfer") {
      message = `Hello, I'd like to book a transfer.\nFrom: ${from || "-"}\nTo: ${to || "-"}\nDate: ${date || "flexible"}`;
    } else if (tab === "hourly") {
      message = `Hello, I'd like to book an hourly driver.\nPickup: ${from || "-"}\nHours needed: ${hours || "-"}\nDate: ${date || "flexible"}`;
    } else {
      message = `Hello, I'd like to book a day trip.\nPickup: ${from || "-"}\nDestination / area: ${to || "-"}\nDate: ${date || "flexible"}`;
    }
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-2xl bg-[var(--color-sand)] shadow-2xl shadow-black/30 p-2">
      <div className="flex gap-1 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-[var(--color-navy)] text-[var(--color-sand)]"
                : "text-[var(--color-navy)]/60 hover:text-[var(--color-navy)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-3 p-3 pt-2"
      >
        <label className="flex items-center gap-2.5 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-3">
          <MapPin size={17} className="text-[var(--color-teal)] shrink-0" />
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Pickup location"
            className="w-full text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 outline-none"
          />
        </label>

        {tab !== "hourly" ? (
          <label className="flex items-center gap-2.5 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-3">
            <MapPin size={17} className="text-[var(--color-amber)] shrink-0" />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder={tab === "day" ? "Destination / area to see" : "Drop-off destination"}
              className="w-full text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 outline-none"
            />
          </label>
        ) : (
          <label className="flex items-center gap-2.5 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-3">
            <Clock size={17} className="text-[var(--color-amber)] shrink-0" />
            <input
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Hours needed (e.g. 4)"
              inputMode="numeric"
              className="w-full text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 outline-none"
            />
          </label>
        )}

        <label className="flex items-center gap-2.5 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-3">
          <CalendarDays size={17} className="text-[var(--color-teal)] shrink-0" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full text-sm text-[var(--color-navy)] outline-none"
          />
        </label>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-xl bg-[var(--color-amber)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
        >
          Search
          <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
}
