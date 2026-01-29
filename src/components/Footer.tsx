import Link from "next/link";
import Container from "./Container";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">{siteContent.company}</p>
          <p className="text-sm leading-relaxed text-slate-600">
            Generalunternehmer für Sanierung, Modernisierung, Revitalisierung sowie Brand- und
            Wasserschadensanierung.
          </p>
          <p className="text-sm leading-relaxed text-slate-600">
            {siteContent.address.line1}
            <br />
            {siteContent.address.line2}
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-600 justify-self-start text-left">
          <p className="text-base font-semibold text-slate-900">Kontakt</p>
          <div className="space-y-2">
            <a href={`tel:${siteContent.phoneRaw}`} className="block font-semibold text-slate-900">
              Tel.: +49 173 2756791
            </a>
            <a href={`mailto:${siteContent.email}`} className="block font-semibold text-slate-900">
              {siteContent.email}
            </a>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-600 justify-self-start text-left">
          <p className="text-base font-semibold text-slate-900">Navigation</p>
          <div className="flex flex-col items-start gap-2">
            <Link href="/#leistungen" className="hover:text-slate-700">
              Leistungen
            </Link>
            <Link href="/#prozess" className="hover:text-slate-700">
              Prozess
            </Link>
            <Link href="/#kontakt" className="hover:text-slate-700">
              Kontakt
            </Link>
            <Link href="/impressum" className="hover:text-slate-700">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-slate-700">
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-200">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {year} HWK Sanierung</span>
          <span>Alle Rechte vorbehalten.</span>
        </Container>
      </div>
    </footer>
  );
}
