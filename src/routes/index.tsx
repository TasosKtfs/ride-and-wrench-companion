import { createFileRoute } from "@tanstack/react-router";
import { Route as RouteIcon, Fuel, Wrench, Gauge, Users, ArrowRight } from "lucide-react";
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

const features = [
  { icon: RouteIcon, title: "Καταγραφή βόλτας", text: "Διαδρομή, χιλιόμετρα, ταχύτητα και χρόνος — κάθε ride αποθηκεύεται αυτόματα." },
  { icon: Fuel, title: "Κατανάλωση καυσίμου", text: "Καταχώρησε γεμίσματα και δες πραγματική κατανάλωση και κόστος ανά χιλιόμετρο." },
  { icon: Wrench, title: "Ιστορικό services", text: "Κάθε service με τις εργασίες που έγιναν, ανταλλακτικά και υπενθυμίσεις." },
  { icon: Gauge, title: "Σύνδεση OBD", text: "Ζωντανά δεδομένα κινητήρα, κωδικοί βλαβών και πλήρης έλεγχος της μηχανής." },
];

function Index() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={hero} alt="Μοτοσικλέτα σε ορεινό δρόμο τη νύχτα" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-fade" />
        <nav className="absolute top-0 left-0 right-0 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-xl font-extrabold tracking-tight">Ride<span className="text-primary">Mind</span></span>
          <a href="#download" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Κατέβασε</a>
        </nav>
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Ο ψηφιακός σου συνοδηγός</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Οδήγα. Εμείς κρατάμε τα υπόλοιπα.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Βόλτες, καύσιμα, services και δεδομένα κινητήρα μέσω OBD — όλα σε μία εφαρμογή.
          </p>
          <a id="download" href="#features" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Ξεκίνα τώρα <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">Όλη η μηχανή σου,<br /><span className="text-primary">στην τσέπη σου.</span></h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-6 rounded-3xl border border-primary/30 bg-secondary p-10 md:flex-row md:items-center">
          <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Έρχεται σύντομα</span>
            <h3 className="mt-1 text-2xl font-black">RideMind Social</h3>
            <p className="mt-2 text-muted-foreground">Μοιράσου διαδρομές, βρες παρέα για βόλτα και γνώρισε την κοινότητα των αναβατών.</p>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} RideMind
      </footer>
    </main>
  );
}
