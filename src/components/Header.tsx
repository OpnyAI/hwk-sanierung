// src/components/Header.tsx
"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <Link
            href="/"
            aria-label="Zur Startseite"
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/logo.png"
              alt="HWK Sanierung"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <div className="leading-tight">
              <p className="text-base font-semibold text-slate-900">
                <span className="text-amber-500">HWK</span>{" "}
                <span className="uppercase">SANIERUNG</span>
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:block">
                BERATUNG · PLANUNG · AUSFÜHRUNG
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#leistungen" className="transition hover:text-slate-900">
              Leistungen
            </a>
            <a href="#prozess" className="transition hover:text-slate-900">
              Prozess
            </a>
            <a href="#kontakt" className="transition hover:text-slate-900">
              Kontakt
            </a>
            <a
              href="mailto:info@hwk-sanierung.de"
              className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              E-Mail schreiben
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            aria-controls={dialogId}
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-slate-300 hover:text-slate-900 md:hidden"
          >
            <span className="sr-only">Menü öffnen</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
            </div>
          </button>
        </Container>
      </header>

      {/* Overlay Layer: MUSS außerhalb vom Header sein + sehr hoher z-index */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* Right Sheet */}
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          className={`absolute inset-y-0 right-0 w-[86vw] max-w-sm transform transition-transform duration-200 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="flex h-full flex-col bg-white shadow-2xl ring-1 ring-black/10">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <span className="text-base font-semibold text-slate-900">
                Menü
              </span>
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-slate-300 hover:text-slate-900"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav className="flex flex-col gap-2">
                <a
                  href="#leistungen"
                  onClick={close}
                  className="rounded-xl px-4 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Leistungen
                </a>
                <a
                  href="#prozess"
                  onClick={close}
                  className="rounded-xl px-4 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Prozess
                </a>
                <a
                  href="#kontakt"
                  onClick={close}
                  className="rounded-xl px-4 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Kontakt
                </a>

                <div className="my-4 h-px bg-slate-200" />

                <a
                  href="mailto:info@hwk-sanierung.de"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  E-Mail schreiben
                </a>
              </nav>

              <p className="mt-6 text-xs text-slate-500">
                HWK Sanierung · Beratung · Planung · Ausführung
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
