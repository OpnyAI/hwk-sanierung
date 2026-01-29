import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  return (
    <main id="top" className="pb-[80px]">
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/assets/Start.jpg"
            alt="Sanierung und Modernisierung von Bestandsimmobilien – HWK Sanierung"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Container className="relative z-10 flex min-h-[85vh] flex-col justify-center py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Generalunternehmer seit über 10 Jahren
          </p>
          <h1 className="mt-4 max-w-3xl font-[var(--font-playfair)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
            {siteContent.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
            >
              Beratung anfragen
            </a>
            <a
              href={`tel:${siteContent.phoneRaw}`}
              className="rounded-full border border-white/40 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg transition hover:bg-slate-100 hover:shadow-xl active:scale-[0.98]"
            >
              Jetzt anrufen
            </a>
          </div>
        </Container>
      </section>

      <Section className="bg-white pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Profil
              </p>
              <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                Sanierungskompetenz mit klaren Prozessen
              </h2>
              <div className="mt-8 space-y-4">
                {siteContent.startTextParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-8 shadow-sm">
              <div className="space-y-6 text-sm text-slate-700">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
                    Versprechen
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    Termintreue, Transparenz, Qualität
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    Digitale Projektsteuerung mit zentraler Koordination aller Gewerke.
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    Nachhaltige Materialien und technisch saubere Ausführung.
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    Deutschlandweit einsatzbereit für komplexe Schadenslagen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="leistungen" className="bg-slate-50 pb-24">
        <Container>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Leistungen
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
              Ganzheitliche Sanierungslösungen
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <ServiceCard
              title="Sanierung"
              text={siteContent.services.sanierungParagraphs}
              imageSrc="/assets/Sanierung.jpg"
              imageAlt="Sanierung von Gebäuden durch HWK Sanierung"
            />
            <ServiceCard
              title="Modernisierung"
              text={siteContent.services.modernisierungParagraphs}
              imageSrc="/assets/Moderniesierung.jpg"
              imageAlt="Modernisierung von Bestandsgebäuden"
            />
            <ServiceCard
              title="Revitalisierung"
              text={siteContent.services.revitalisierungParagraphs}
              imageSrc="/assets/Moderniesierung.jpg"
              imageAlt="Revitalisierung von Bestandsimmobilien"
            />
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Brand- und Wasserschadensanierung
              </h3>
              <div className="mt-6 space-y-4">
                {siteContent.services.brandWasser.intro.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {siteContent.services.brandWasser.bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {siteContent.services.brandWasser.outro?.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:items-end">
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:h-64 lg:h-80">
                <Image
                  src="/assets/Brand.jpg"
                  alt="Brandschadensanierung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm sm:h-64 lg:h-80">
                <Image
                  src="/assets/Wasser.jpg"
                  alt="Wasserschadensanierung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="prozess" className="bg-white">
        <Container>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Vorgehen
            </p>
            <h2 className="font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
              Strukturierte Abläufe für maximale Sicherheit
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Von der digitalen Bestandsaufnahme bis zur schlüsselfertigen Übergabe: HWK Sanierung
              verbindet Expertise mit klaren Prozessen.
            </p>
          </div>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </Section>

      <Section id="kontakt" className="bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {siteContent.contact.title}
              </p>
              <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-semibold text-slate-900 sm:text-4xl">
                Direkt erreichbar für Ihr Projekt
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                HWK Sanierung
                <br />
                {siteContent.address.line1}
                <br />
                {siteContent.address.line2}
                <br />
                <br />
                <a className="font-semibold text-slate-900" href={`mailto:${siteContent.email}`}>
                  {siteContent.email}
                </a>
                <br />
                <a className="font-semibold text-slate-900" href={`tel:${siteContent.phoneRaw}`}>
                  {siteContent.phone}
                </a>
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <iframe
                  title="OpenStreetMap Standort HWK Sanierung"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=8.5997%2C49.4722%2C8.6203%2C49.4819&layer=mapnik&marker=49.4771%2C8.61"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Projektanfrage senden</h3>
              <p className="mt-2 text-sm text-slate-600">
                Beschreiben Sie Ihr Vorhaben – wir melden uns kurzfristig mit einer strukturierten
                Einschätzung.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
