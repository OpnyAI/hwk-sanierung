import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <main className="pb-[80px]">
      <Section className="bg-white">
        <Container>
          <h1 className="font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Impressum
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              Angaben gemäß § 5 TMG:
            </p>
            <p>
              HWK Sanierung
              <br />
              Seckenheimerstrasse 100
              <br />
              68535 Edingen-Neckarhausen
              <br />
              Deutschland
            </p>
            <p>
              Inhaber:
              <br />
              Ali Kazankiran
            </p>
            <p>
              Rechtsform:
              <br />
              Einzelunternehmen
            </p>
            <p>
              Kontakt:
              <br />
              Tel.: +49 173 2756791
              <br />
              E-Mail:{" "}
              <a className="font-semibold text-slate-900" href="mailto:info@hwk-sanierung.de">
                info@hwk-sanierung.de
              </a>
            </p>
            <p>
              Umsatzsteuer-ID:
              <br />
              DE317892291
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
