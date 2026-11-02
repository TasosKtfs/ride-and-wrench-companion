import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Route as RouteIcon, Fuel, Wrench, Gauge, Users, Play, Apple, CloudSun, Bike, MapPin, Mail } from "lucide-react";
import hero from "@/assets/hero-ride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RideMind — Ο ψηφιακός συνοδηγός του μοτοσικλετιστή" },
      { name: "description", content: "Καταγραφή διαδρομών, κατανάλωσης, services και σύνδεση OBD για πλήρη έλεγχο της μοτοσικλέτας σου." },
      { property: "og:title", content: "RideMind — Ο συνοδηγός σου" },
      { property: "og:description", content: "Βόλτες, καύσιμα, services και OBD σε μία εφαρμογή." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Lang = "el" | "en" | "es";
const EMAIL = "info@ridemind.eu";

const t = {
  el: {
    download: "Κατέβασε",
    tagline: "Ο ψηφιακός σου συνοδηγός",
    h1: "Οδήγα. Εμείς κρατάμε τα υπόλοιπα.",
    sub: "Βόλτες, καύσιμα, services και ζωντανά δεδομένα κινητήρα μέσω OBD — όλα σε μία εφαρμογή.",
    android: "Κατέβασε για Android",
    ios: "Σύντομα και για iOS",
    weather: "Καιρός για βόλτα, κάθε μέρα",
    alt: "Μοτοσικλέτα σε ορεινό δρόμο τη νύχτα",
    numbers: "Η μηχανή σου σε αριθμούς",
    stats: ["Συνολικά χιλιόμετρα", "ανά 100 km", "κόστος / km"],
    what: "Τι κάνει το RideMind",
    h2a: "Όλη η μηχανή σου,",
    h2b: "στην τσέπη σου.",
    features: [
      ["Καταγραφή βόλτας", "Διαδρομή, χιλιόμετρα, ταχύτητα και κλίση — κάθε ride αποθηκεύεται αυτόματα με GPS και ανίχνευση πτώσης."],
      ["Κατανάλωση καυσίμου", "Καταχώρησε γεμίσματα και δες πραγματική κατανάλωση, αυτονομία και κόστος ανά χιλιόμετρο."],
      ["Garage & services", "Κάθε service με τις εργασίες που έγιναν, ανταλλακτικά, έξοδα και υπενθυμίσεις πριν εκπνεύσουν."],
      ["Σύνδεση OBD", "Ζωντανά όργανα για στροφές, θερμοκρασίες, μπαταρία και κωδικούς βλαβών — πλήρης έλεγχος του κινητήρα."],
    ],
    soon: "Έρχεται σύντομα",
    socialTitle: "RideMind Παρέα",
    socialText: "Μοιράσου διαδρομές, βρες παρέα για βόλτα και γνώρισε την κοινότητα των αναβατών.",
    contact: "Επικοινωνία",
    contactText: "Ερωτήσεις, ιδέες ή συνεργασίες; Γράψε μας.",
    footer: "Ο ψηφιακός συνοδηγός του μοτοσικλετιστή",
  },
  en: {
    download: "Download",
    tagline: "Your digital co-rider",
    h1: "You ride. We handle the rest.",
    sub: "Rides, fuel, services and live engine data via OBD — all in one app.",
    android: "Download for Android",
    ios: "Coming soon to iOS",
    weather: "Riding weather, every day",
    alt: "Motorcycle on a mountain road at night",
    numbers: "Your bike in numbers",
    stats: ["Total kilometres", "per 100 km", "cost / km"],
    what: "What RideMind does",
    h2a: "Your whole bike,",
    h2b: "in your pocket.",
    features: [
      ["Ride tracking", "Route, distance, speed and lean angle — every ride saved automatically with GPS and crash detection."],
      ["Fuel consumption", "Log fill-ups and see real consumption, range and cost per kilometre."],
      ["Garage & services", "Every service with the work done, parts, costs and reminders before they're due."],
      ["OBD connection", "Live gauges for RPM, temperatures, battery and fault codes — full engine control."],
    ],
    soon: "Coming soon",
    socialTitle: "RideMind Crew",
    socialText: "Share routes, find riding buddies and meet the rider community.",
    contact: "Contact",
    contactText: "Questions, ideas or partnerships? Write to us.",
    footer: "The motorcyclist's digital co-rider",
  },
  es: {
    download: "Descargar",
    tagline: "Tu copiloto digital",
    h1: "Tú conduces. Nosotros nos encargamos del resto.",
    sub: "Rutas, combustible, mantenimientos y datos del motor en vivo vía OBD — todo en una app.",
    android: "Descargar para Android",
    ios: "Próximamente en iOS",
    weather: "El tiempo para rodar, cada día",
    alt: "Moto en una carretera de montaña de noche",
    numbers: "Tu moto en números",
    stats: ["Kilómetros totales", "por 100 km", "coste / km"],
    what: "Qué hace RideMind",
    h2a: "Toda tu moto,",
    h2b: "en tu bolsillo.",
    features: [
      ["Registro de rutas", "Ruta, kilómetros, velocidad e inclinación — cada salida se guarda automáticamente con GPS y detección de caídas."],
      ["Consumo de combustible", "Registra repostajes y ve el consumo real, la autonomía y el coste por kilómetro."],
      ["Garaje y mantenimiento", "Cada revisión con los trabajos realizados, recambios, gastos y recordatorios antes de que venzan."],
      ["Conexión OBD", "Indicadores en vivo de RPM, temperaturas, batería y códigos de avería — control total del motor."],
    ],
    soon: "Próximamente",
    socialTitle: "RideMind Grupo",
    socialText: "Comparte rutas, encuentra compañeros para rodar y conoce a la comunidad motera.",
    contact: "Contacto",
    contactText: "¿Preguntas, ideas o colaboraciones? Escríbenos.",
    footer: "El copiloto digital del motorista",
  },
} as const;

const statValues = [
  { value: "4.289", unit: "km" },
  { value: "2,6", unit: "L" },
  { value: "0,27", unit: "€" },
];
const icons = [RouteIcon, Fuel, Wrench, Gauge];

function Index() {
  const [lang, setLang] = useState<Lang>("el");
  const c = t[lang];

  return (
    <main lang={lang} className="min-h-screen bg-background">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt={c.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <nav className="absolute top-0 left-0 right-0 border-b border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
            <span className="font-display text-2xl font-black italic tracking-tight">
              RIDE<span className="text-primary">MIND</span>
            </span>
            <div className="flex items-center gap-3">
              <div className="flex rounded-full border border-border bg-card p-1 text-xs font-bold">
                {(["el", "en", "es"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`rounded-full px-3 py-1 uppercase transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {l === "el" ? "ΕΛ" : l}
                  </button>
                ))}
              </div>
              <a href="#download" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 sm:inline-block">
                {c.download}
              </a>
            </div>
          </div>
        </nav>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="section-label mb-6 text-primary">{c.tagline}</p>
          <h1 className="max-w-3xl font-display text-5xl font-black italic leading-[1.02] tracking-tight md:text-7xl">{c.h1}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{c.sub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a id="download" href="#features" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              <Play className="h-5 w-5 fill-current" /> {c.android}
            </a>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground">
              <Apple className="h-4 w-4 text-primary" /> {c.ios}
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <CloudSun className="h-4 w-4 text-primary" /> {c.weather}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">{c.numbers}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {statValues.map(({ value, unit }, i) => (
            <div key={i} className="card-stat p-6">
              <p className="font-display text-5xl font-black italic tracking-tight">
                {value}
                <span className="ml-1 text-2xl font-bold not-italic text-muted-foreground">{unit}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{c.stats[i]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">{c.what}</p>
        <h2 className="mt-6 font-display text-3xl font-black italic tracking-tight md:text-5xl">
          {c.h2a}<br /><span className="text-primary">{c.h2b}</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {c.features.map(([title, text], i) => {
            const Icon = icons[i] ?? RouteIcon;
            return (
              <div key={i} className="card-stat p-8 transition-colors hover:border-primary/60">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold italic">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-6 rounded-3xl border border-primary/40 bg-card p-10 md:flex-row md:items-center">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{c.soon}</span>
            <h3 className="mt-1 font-display text-2xl font-black italic">{c.socialTitle}</h3>
            <p className="mt-2 text-muted-foreground">{c.socialText}</p>
          </div>
          <div className="flex shrink-0 gap-3 md:ml-auto">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Bike className="h-5 w-5" /></span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <p className="section-label">{c.contact}</p>
        <div className="mt-8 card-stat flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
          <p className="text-lg text-muted-foreground">{c.contactText}</p>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105">
            <Mail className="h-5 w-5" /> {EMAIL}
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <span className="font-display text-lg font-black italic">RIDE<span className="text-primary">MIND</span></span>
        <p className="mt-2 text-sm text-muted-foreground">
          © {new Date().getFullYear()} RideMind — {c.footer} · <a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a>
        </p>
      </footer>
    </main>
  );
}
