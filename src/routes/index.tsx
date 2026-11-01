import { createFileRoute } from "@tanstack/react-router";
import { Route as RouteIcon, Fuel, Wrench, Gauge, Users, Play, Apple, CloudSun, Bike, MapPin } from "lucide-react";
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

const stats = [
  { value: "4.289", unit: "km", label: "Συνολικά χιλιόμετρα" },
  { value: "2,6", unit: "L", label: "ανά 100 km" },
  { value: "0,27", unit: "€", label: "κόστος / km" },
];

const features = [
  { icon: RouteIcon, title: "Καταγραφή βόλτας", text: "Διαδρομή, χιλιόμετρα, ταχύτητα και κλίση — κάθε ride αποθηκεύεται αυτόματα με GPS και ανίχνευση πτώσης." },
  { icon: Fuel, title: "Κατανάλωση καυσίμου", text: "Καταχώρησε γεμίσματα και δες πραγματική κατανάλωση, αυτονομία και κόστος ανά χιλιόμετρο." },
  { icon: Wrench, title: "Garage & services", text: "Κάθε service με τις εργασίες που έγιναν, ανταλλακτικά, έξοδα και υπενθυμίσεις πριν εκπνεύσουν." },
  { icon: Gauge, title: "Σύνδεση OBD", text: "Ζωντανά όργανα για στροφές, θερμοκρασίες, μπαταρία και κωδικούς βλαβών — πλήρης έλεγχος του κινητήρα." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Μοτοσικλέτα σε ορεινό δρόμο τη νύχτα" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <nav className="absolute top-0 left-0 right-0 border-b border-border bg-background/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-display text-2xl font-black italic tracking-tight">
              RIDE<span className="text-primary">MIND</span>
            </span>
            <a href="#download" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105">
              Κατέβασε
            </a>
          </div>
        </nav>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="section-label mb-6 text-primary">Ο ψηφιακός σου συνοδηγός</p>
          <h1 className="max-w-3xl font-display text-5xl font-black italic leading-[1.02] tracking-tight md:text-7xl">
            Οδήγα. Εμείς κρατάμε τα υπόλοιπα.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Βόλτες, καύσιμα, services και ζωντανά δεδομένα κινητήρα μέσω OBD — όλα σε μία εφαρμογή.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a id="download" href="#features" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              <Play className="h-5 w-5 fill-current" /> Κατέβασε για Android
            </a>
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground">
              <Apple className="h-4 w-4 text-primary" /> Σύντομα και για iOS
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <CloudSun className="h-4 w-4 text-primary" /> Καιρός για βόλτα, κάθε μέρα
          </div>
        </div>
      </section>

      {/* Stat cards — σαν το dashboard της εφαρμογής */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">Η μηχανή σου σε αριθμούς</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="card-stat p-6">
              <p className="font-display text-5xl font-black italic tracking-tight">
                {value}
                <span className="ml-1 text-2xl font-bold not-italic text-muted-foreground">{unit}</span>
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <p className="section-label">Τι κάνει το RideMind</p>
        <h2 className="mt-6 font-display text-3xl font-black italic tracking-tight md:text-5xl">
          Όλη η μηχανή σου,<br /><span className="text-primary">στην τσέπη σου.</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-stat p-8 transition-colors hover:border-primary/60">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold italic">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-6 rounded-3xl border border-primary/40 bg-card p-10 md:flex-row md:items-center">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Έρχεται σύντομα</span>
            <h3 className="mt-1 font-display text-2xl font-black italic">RideMind Παρέα</h3>
            <p className="mt-2 text-muted-foreground">Μοιράσου διαδρομές, βρες παρέα για βόλτα και γνώρισε την κοινότητα των αναβατών.</p>
          </div>
          <div className="flex shrink-0 gap-3 md:ml-auto">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><Bike className="h-5 w-5" /></span>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <span className="font-display text-lg font-black italic">RIDE<span className="text-primary">MIND</span></span>
        <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} RideMind — Ο ψηφιακός συνοδηγός του μοτοσικλετιστή</p>
      </footer>
    </main>
  );
}
