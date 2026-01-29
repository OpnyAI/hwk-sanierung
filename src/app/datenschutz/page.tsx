import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <main className="pb-[80px]">
      <Section className="bg-white">
        <Container>
          <h1 className="font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
            Datenschutz
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
            <h2 className="text-base font-semibold text-slate-900">1. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten Ihre Daten
              ausschließlich im Rahmen der gesetzlichen Vorschriften der Datenschutz-Grundverordnung
              (DSGVO).
            </p>

            <h2 className="text-base font-semibold text-slate-900">2. Verantwortliche Stelle</h2>
            <p>
              HWK Sanierung
              <br />
              Seckenheimerstrasse 100
              <br />
              68535 Edingen-Neckarhausen
              <br />
              E-Mail:{" "}
              <a className="font-semibold text-slate-900" href="mailto:info@hwk-sanierung.de">
                info@hwk-sanierung.de
              </a>
            </p>

            <h2 className="text-base font-semibold text-slate-900">
              3. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig mitteilen,
              z. B. per E-Mail oder über das Kontaktformular.
            </p>

            <h2 className="text-base font-semibold text-slate-900">
              4. Kontaktformular und E-Mail-Kontakt
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-base font-semibold text-slate-900">5. Hosting</h2>
            <p>
              Diese Website wird bei der IONOS SE gehostet. Die Verarbeitung der Daten erfolgt auf
              Servern innerhalb der Europäischen Union. Mit dem Hosting-Anbieter besteht ein Vertrag
              zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>

            <h2 className="text-base font-semibold text-slate-900">
              6. Kartenmaterial (OpenStreetMap)
            </h2>
            <p>
              Diese Website nutzt Kartendaten von OpenStreetMap. Beim Laden der Karten können
              IP-Adressen an OpenStreetMap übertragen werden. Weitere Informationen finden Sie unter{" "}
              <a
                className="font-semibold text-slate-900"
                href="https://www.openstreetmap.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.openstreetmap.org
              </a>
              .
            </p>

            <h2 className="text-base font-semibold text-slate-900">7. Cookies & Tracking</h2>
            <p>Diese Website verwendet keine Cookies, kein Tracking und keine Analyse-Tools.</p>

            <h2 className="text-base font-semibold text-slate-900">8. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen
              Daten sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Außerdem
              steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p>
              Kontakt für Datenschutzanfragen:{" "}
              <a className="font-semibold text-slate-900" href="mailto:info@hwk-sanierung.de">
                info@hwk-sanierung.de
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
