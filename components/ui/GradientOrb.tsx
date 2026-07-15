import { cn } from "@/lib/cn";

interface GradientOrbProps {
  className?: string;
  color?: "butter" | "blush" | "lavender";
  size?: "sm" | "md" | "lg";
  "aria-hidden"?: boolean;
}

export function GradientOrb({
  className,
  color = "blush",
  size = "md",
  "aria-hidden": ariaHidden = true,
}: GradientOrbProps) {
  const colors = {
    butter: "from-butter/60 via-butter/20 to-transparent",
    blush: "from-blush/70 via-blush/20 to-transparent",
    lavender: "from-lavender-mist/60 via-lavender-mist/20 to-transparent",
  };

  const sizes = {
    sm: "size-64",
    md: "size-96",
    lg: "size-[600px]",
  };

  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        "pointer-events-none select-none rounded-full bg-radial",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
}
