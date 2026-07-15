import { cn } from "@/lib/cn";

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "butter" | "blush";
}

export function Pill({ children, className, variant = "light" }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium tracking-wide",
        variant === "light" && "bg-white/60 text-ink border border-white/70",
        variant === "dark" && "bg-ink/10 text-ink border border-ink/10",
        variant === "butter" && "bg-butter/60 text-ink border border-butter",
        variant === "blush" && "bg-blush/50 text-rose-deep border border-blush",
        className
      )}
    >
      {children}
    </span>
  );
}
