const steps = [
  {
    title: "Analyse & Planung",
    description:
      "Schadenaufnahme, Bestandsanalyse und digitale Planung bilden die Basis für eine sichere Sanierungsstrategie.",
  },
  {
    title: "Koordination aller Gewerke",
    description:
      "Wir steuern sämtliche Fachbereiche zentral, synchronisieren Termine und sichern eine reibungslose Ausführung.",
  },
  {
    title: "Umsetzung & Qualität",
    description:
      "Strukturierte Abläufe, dokumentierte Prozesse und klare Verantwortlichkeiten gewährleisten höchste Qualität.",
  },
  {
    title: "Übergabe & Nachhaltigkeit",
    description:
      "Schlüsselfertige Übergabe mit Fokus auf Werterhalt, langfristige Funktionalität und wirtschaftliche Effizienz.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Schritt {index + 1}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
