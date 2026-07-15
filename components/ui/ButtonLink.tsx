import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "download" | "none";
  className?: string;
  external?: boolean;
  download?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className,
  external,
  download,
}: ButtonLinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");
  const Tag = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? {
        href,
        ...(href.startsWith("mailto:")
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" }),
      }
    : { href };
  const downloadProp = download ? { download: true } : {};

  return (
    <Tag
      {...externalProps}
      {...downloadProp}
      className={cn(
        "group inline-flex min-h-[44px] items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-ink text-white hover:bg-ink/80 focus-visible:outline-ink",
        variant === "secondary" &&
          "text-ink hover:bg-white/70 focus-visible:outline-ink",
        variant === "ghost" &&
          "text-ink underline-offset-4 hover:underline focus-visible:outline-ink",
        className
      )}
      style={
        variant === "secondary"
          ? {
              background: "rgba(255,255,255,0.58)",
              border: "1px solid rgba(255,255,255,0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }
          : undefined
      }
    >
      {children}
      {icon === "arrow" && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
      {icon === "download" && (
        <Download className="size-4" aria-hidden="true" />
      )}
    </Tag>
  );
}
