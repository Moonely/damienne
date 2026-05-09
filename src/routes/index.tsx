import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Heart, Sparkles, TrendingUp, Quote } from "lucide-react";
import { calendar } from "@/data/calendar";
import { WeekCard } from "@/components/WeekCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calendrier Power BI · Damienne" },
      { name: "description", content: "10 semaines pour devenir Data Analyst Power BI — un parcours doux, motivant et concret pour Damienne." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,500&display=swap" },
    ],
  }),
  component: Index,
});

const STORAGE_KEY = "damienne-pbi-progress";

const quotes = [
  "Tu n'as pas à être parfaite, juste régulière.",
  "Chaque petit pas compte plus qu'un grand bond.",
  "La confiance se construit ligne par ligne.",
  "Tu es exactement là où tu dois être.",
  "Aujourd'hui, fais juste un peu. C'est déjà beaucoup.",
];

function Index() {
  const [doneMap, setDoneMap] = useState<Record<string, boolean>>({});
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDoneMap(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(doneMap)); } catch {}
  }, [doneMap]);

  const toggle = (key: string) =>
    setDoneMap((m) => ({ ...m, [key]: !m[key] }));

  const stats = useMemo(() => {
    const total = calendar.reduce((s, w) => s + w.days.length, 0);
    const done = Object.values(doneMap).filter(Boolean).length;
    return { total, done, pct: Math.round((done / total) * 100) };
  }, [doneMap]);

  return (
    <main className="min-h-screen pb-24">
      {/* HERO */}
      <header className="bg-gradient-hero text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-medium mb-6">
            <Heart className="h-4 w-4" /> Pour Damienne
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            10 semaines pour <em className="italic">renaître</em><br />
            avec Power BI.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed mb-8">
            Un calendrier doux, sans pression, conçu autour de tes cours d'anglais.
            Pas de surcharge — juste une progression claire, des victoires régulières,
            et un portefeuille concret au bout du chemin. Tu en es capable.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="rounded-2xl bg-white/15 backdrop-blur px-5 py-3">
              <div className="text-xs uppercase tracking-wider opacity-80">Progression</div>
              <div className="text-2xl font-bold tabular-nums">{stats.done}/{stats.total} jours</div>
            </div>
            <div className="rounded-2xl bg-white/15 backdrop-blur px-5 py-3">
              <div className="text-xs uppercase tracking-wider opacity-80">Avancement</div>
              <div className="text-2xl font-bold tabular-nums">{stats.pct}%</div>
            </div>
          </div>

          <div className="mt-8 max-w-xl">
            <div className="h-3 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-700"
                style={{ width: `${stats.pct}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* QUOTE */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 mb-12">
        <div className="rounded-2xl bg-card border shadow-glow p-6 flex items-start gap-4">
          <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
          <p className="text-lg italic text-foreground leading-relaxed font-medium" style={{ fontFamily: "var(--font-display)" }}>
            {quote}
          </p>
        </div>
      </div>

      {/* PHASES OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Le voyage en 4 étapes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "S 1-2", phase: "Confiance", desc: "Réveiller les bases, premiers wins visibles", icon: Sparkles, color: "from-warm to-primary/60" },
            { n: "S 3-5", phase: "Intermédiaire", desc: "DAX, modèles, visualisations qui font wow", icon: TrendingUp, color: "from-primary to-secondary/70" },
            { n: "S 6-8", phase: "Portfolio", desc: "3 projets concrets publiés sur LinkedIn", icon: Sparkles, color: "from-secondary to-secondary/80" },
            { n: "S 9-10", phase: "Job Ready", desc: "CV, candidatures, entretiens maîtrisés", icon: Heart, color: "from-win to-primary" },
          ].map((p) => (
            <div key={p.n} className="rounded-2xl bg-card border p-5 shadow-soft">
              <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${p.color} mb-4`} />
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{p.n}</div>
              <div className="text-lg font-bold text-foreground mt-1">{p.phase}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WEEKS */}
      <section className="max-w-5xl mx-auto px-6 space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Ton calendrier semaine par semaine</h2>
        <p className="text-muted-foreground mb-6">Clique sur une semaine pour voir tous les détails. Coche au fur et à mesure — ta progression est sauvegardée automatiquement. 💾</p>

        {calendar.map((week) => (
          <WeekCard
            key={week.number}
            week={week}
            defaultOpen={week.number === 1}
            doneMap={doneMap}
            onToggle={toggle}
          />
        ))}
      </section>

      {/* FOOTER */}
      <footer className="max-w-3xl mx-auto px-6 mt-20 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-warm/20 to-win/20 p-8 md:p-10">
          <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Tu vas y arriver, Damienne.
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ce calendrier n'est qu'une carte. La vraie magie, c'est toi qui la fais.
            Reviens chaque jour. Coche une case. Sois fière. Recommence demain.
            Dans 10 semaines, tu te retourneras et tu n'en reviendras pas.
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-8">Ta progression est sauvegardée localement sur cet appareil.</p>
      </footer>
    </main>
  );
}
