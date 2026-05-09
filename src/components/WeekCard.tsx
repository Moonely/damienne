import { useState } from "react";
import { ChevronDown, Target, Trophy } from "lucide-react";
import type { Week } from "@/data/calendar";
import { DayCard } from "./DayCard";
import { cn } from "@/lib/utils";

const phaseStyles: Record<Week["phase"], string> = {
  Confiance: "from-warm to-primary/60",
  Intermédiaire: "from-primary to-secondary/70",
  Portfolio: "from-secondary to-secondary/80",
  "Job Ready": "from-win to-primary",
};

interface Props {
  week: Week;
  defaultOpen?: boolean;
  doneMap: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function WeekCard({ week, defaultOpen = false, doneMap, onToggle }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const doneCount = week.days.filter((_, i) => doneMap[`${week.number}-${i}`]).length;
  const pct = Math.round((doneCount / week.days.length) * 100);

  return (
    <section className="rounded-3xl bg-card border shadow-soft overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-8 hover:bg-accent/30 transition-colors"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={cn("inline-block h-2 w-12 rounded-full bg-gradient-to-r", phaseStyles[week.phase])} />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Semaine {week.number} · {week.phase}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{week.title}</h3>
          </div>
          <ChevronDown
            className={cn("h-6 w-6 text-muted-foreground transition-transform shrink-0 mt-2", open && "rotate-180")}
          />
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">{week.intro}</p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-foreground"><span className="font-medium">Objectif :</span> {week.goal}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-success to-primary transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground tabular-nums">
            {doneCount}/{week.days.length}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t bg-gradient-to-b from-background to-card/50 p-6 md:p-8 space-y-3">
          {week.days.map((day, i) => {
            const key = `${week.number}-${i}`;
            return (
              <DayCard
                key={key}
                day={day}
                weekNumber={week.number}
                dayIndex={i}
                done={!!doneMap[key]}
                onToggle={() => onToggle(key)}
              />
            );
          })}

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-win/30 to-primary/15 p-5 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Récompense de fin de semaine
              </p>
              <p className="font-medium text-foreground">{week.celebration}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
