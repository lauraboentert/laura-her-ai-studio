import { cn } from "@/lib/cn";

const themeClass = {
  "peach-intro":    "theme-peach-intro",
  "rose-focus":     "theme-rose-focus",
  "butter-proof":   "theme-butter-proof",
  "timeline":       "theme-timeline",
  "blush-personal": "theme-blush-personal",
  "soft-about":     "theme-soft-about",
  "signature":      "theme-signature",
} as const;

type Theme = keyof typeof themeClass;

interface SectionShellProps {
  theme: Theme;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionShell({ theme, id, className, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("section-shell", themeClass[theme], className)}
    >
      {children}
    </section>
  );
}
