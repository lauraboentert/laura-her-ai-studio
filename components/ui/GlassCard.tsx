import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function GlassCard({
  children,
  className,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag className={cn("glass-card rounded-[28px] p-6 md:p-8", className)}>
      {children}
    </Tag>
  );
}
