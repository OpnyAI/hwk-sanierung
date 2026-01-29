import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { siteContent } from "@/content/siteContent";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-[10px] font-semibold uppercase text-slate-500">
            <span className="relative z-10">HWK</span>
            <Image
              src="/assets/logo.png"
              alt="HWK Sanierung Logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-900">{siteContent.company}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Sanierung & Modernisierung</p>
          </div>
        </Link>
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
      </Container>
    </header>
  );
}
