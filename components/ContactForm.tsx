"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello, my name is ${name || "-"}.\nRoute / service: ${route || "-"}\nMessage: ${message || "-"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="rounded-2xl bg-white border border-[var(--color-navy)]/10 p-8 sm:p-10">
      <p className="font-display text-lg font-semibold text-[var(--color-navy)] mb-1">
        Send us a message
      </p>
      <p className="text-sm text-[var(--color-ink)]/60 mb-6">
        This opens WhatsApp with your details filled in — just hit send there.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/50 mb-1.5">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-[var(--color-navy)]/15 px-4 py-3 text-sm text-[var(--color-navy)] outline-none focus:border-[var(--color-amber)]"
            placeholder="e.g. Ahmed Al-Sayed"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/50 mb-1.5">
            Route or service
          </label>
          <input
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className="w-full rounded-xl border border-[var(--color-navy)]/15 px-4 py-3 text-sm text-[var(--color-navy)] outline-none focus:border-[var(--color-amber)]"
            placeholder="e.g. Khobar to Bahrain, this Friday"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-ink)]/50 mb-1.5">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-[var(--color-navy)]/15 px-4 py-3 text-sm text-[var(--color-navy)] outline-none focus:border-[var(--color-amber)] resize-none"
            placeholder="Anything else we should know?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-amber-light)] transition-colors"
        >
          Continue on WhatsApp <ArrowRight size={16} />
        </button>
        {sent && (
          <p className="text-xs text-[var(--color-teal)] font-medium">
            WhatsApp should have opened in a new tab — send the message to reach us.
          </p>
        )}
      </form>
    </div>
  );
}
