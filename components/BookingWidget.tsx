"use client";

import { useState } from "react";
import { MapPin, Clock, CalendarDays, Users } from "lucide-react";
import { waLink } from "@/lib/data";

const tabs = [
  { id: "transfer", label: "Transfers" },
  { id: "hourly", label: "Hourly Driver" },
  { id: "day", label: "Day Trip" },
] as const;

type Tab = (typeof tabs)[number]["id"];

const timeOptions = Array.from({ length: 24 }, (_, i) => {
  const hour12 = i % 12 === 0 ? 12 : i % 12;
  const suffix = i < 12 ? "AM" : "PM";
  return `${hour12}:00 ${suffix}`;
});

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export default function BookingWidget() {
  const [tab, setTab] = useState<Tab>("transfer");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const tripType =
      tab === "transfer" ? "a transfer" : tab === "hourly" ? "an hourly driver" : "a day trip";
    const message =
      `Hello, I'd like to book ${tripType}.\n` +
      `From: ${from || "-"}\n` +
      `To: ${to || "-"}\n` +
      `Date: ${date || "flexible"}\n` +
      `Time: ${time || "flexible"}\n` +
      `Passengers: ${passengers}`;
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.1fr_0.9fr_0.9fr_0.8fr_auto] gap-3 p-3 pt-2"
      >
        <label className="flex flex-col gap-1 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-2.5">
          <span className="text-[11px] font-medium text-[var(--color-ink)]/50">From</span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-[var(--color-teal)] shrink-0" />
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Select pickup location"
              className="w-full text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 outline-none"
            />
          </span>
        </label>

        <label className="flex flex-col gap-1 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-2.5">
          <span className="text-[11px] font-medium text-[var(--color-ink)]/50">
            {tab === "hourly" ? "Area" : "To"}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} className="text-[var(--color-amber)] shrink-0" />
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder={
                tab === "hourly"
                  ? "Area you'll be driving in"
                  : tab === "day"
                  ? "Destination / area to see"
                  : "Select drop-off location"
              }
              className="w-full text-sm text-[var(--color-navy)] placeholder:text-[var(--color-navy)]/40 outline-none"
            />
          </span>
        </label>

        <label className="flex flex-col gap-1 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-2.5">
          <span className="text-[11px] font-medium text-[var(--color-ink)]/50">Date</span>
          <span className="flex items-center gap-2">
            <CalendarDays size={15} className="text-[var(--color-teal)] shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-sm text-[var(--color-navy)] outline-none"
            />
          </span>
        </label>

        <label className="flex flex-col gap-1 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-2.5">
          <span className="text-[11px] font-medium text-[var(--color-ink)]/50">Time</span>
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-[var(--color-teal)] shrink-0" />
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full text-sm text-[var(--color-navy)] outline-none bg-transparent appearance-none"
            >
              <option value="">Select time</option>
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </span>
        </label>

        <label className="flex flex-col gap-1 rounded-xl border border-[var(--color-navy)]/15 bg-white px-3.5 py-2.5">
          <span className="text-[11px] font-medium text-[var(--color-ink)]/50">Passengers</span>
          <span className="flex items-center gap-2">
            <Users size={15} className="text-[var(--color-teal)] shrink-0" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full text-sm text-[var(--color-navy)] outline-none bg-transparent appearance-none"
            >
              {passengerOptions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </span>
        </label>

        <button
          type="submit"
          className="flex items-center justify-center rounded-xl bg-[var(--color-navy-deep)] px-7 py-3 text-sm font-bold tracking-wide text-white hover:bg-[var(--color-navy)] transition-colors uppercase"
        >
          Search
        </button>
      </form>
    </div>
  );
}
