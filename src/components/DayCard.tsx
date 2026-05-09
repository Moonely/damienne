import { Check, Clock, Sparkles, BookOpen, Hammer, Coffee, Languages, RefreshCw, PartyPopper, ExternalLink } from "lucide-react";
import type { Day, DayType } from "@/data/calendar";
import { cn } from "@/lib/utils";

const typeConfig: Record<DayType, { icon: typeof Check; label: string; color: string }> = {
  theory: { icon: BookOpen, label: "Théorie", color: "bg-secondary/10 text-secondary" },
  practice: { icon: Hammer, label: "Pratique", color: "bg-warm/30 text-warm-foreground" },
  project: { icon: Sparkles, label: "Projet", color: "bg-primary/15 text-primary" },
  rest: { icon: Coffee, label: "Repos", color: "bg-muted text-muted-foreground" },
  english: { icon: Languages, label: "Anglais", color: "bg-english/40 text-english-foreground" },
  review: { icon: RefreshCw, label: "Révision", color: "bg-accent text-accent-foreground" },
  win: { icon: PartyPopper, label: "Célébration", color: "bg-win/40 text-win-foreground" },
};

interface Props {
  day: Day;
  weekNumber: number;
  dayIndex: number;
  done: boolean;
  onToggle: () => void;
}

export function DayCard({ day, done, onToggle }: Props) {
  const cfg = typeConfig[day.type];
  const Icon = cfg.icon;

  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-card p-5 transition-all duration-300 hover:shadow-soft",
        done && "bg-success/5 border-success/30"
      )}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          aria-label={done ? "Marquer comme non fait" : "Marquer comme fait"}
          className={cn(
            "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all",
            done
              ? "bg-success border-success text-success-foreground scale-110"
              : "border-border hover:border-primary hover:bg-primary/5"
          )}
        >
          {done && <Check className="h-4 w-4" strokeWidth={3} />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground w-10">
              {day.day}
            </span>
            <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium", cfg.color)}>
              <Icon className="h-3 w-3" />
              {cfg.label}
            </span>
            {day.english && day.type !== "english" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-english/30 text-english-foreground px-2.5 py-0.5 text-xs font-medium">
                <Languages className="h-3 w-3" />
                + Anglais
              </span>
            )}
            {day.duration !== "0" && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {day.duration}
              </span>
            )}
          </div>

          <h4 className={cn("font-semibold text-foreground mb-1", done && "line-through opacity-60")}>
            {day.title}
          </h4>
          <p className={cn("text-sm text-muted-foreground leading-relaxed", done && "opacity-60")}>
            {day.description}
          </p>

          {day.resources && day.resources.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {day.resources.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-muted hover:bg-accent px-2.5 py-1 text-xs text-foreground transition-colors"
                >
                  {r.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}

          {day.win && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-win/30 px-3 py-1.5 text-sm font-medium text-win-foreground">
              {day.win}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
