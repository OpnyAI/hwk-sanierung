"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/content/siteContent";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
          placeholder="Ihr Name"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="email">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
            placeholder={siteContent.email}
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
            placeholder={siteContent.phone}
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="message">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-400 focus:outline-none"
          placeholder="Wie können wir Sie unterstützen?"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sende…" : "Anfrage senden"}
      </button>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Vielen Dank! Wir melden uns kurzfristig bei Ihnen.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Leider gab es ein Problem. Bitte versuchen Sie es erneut oder senden Sie eine E-Mail.
        </p>
      )}
    </form>
  );
}
