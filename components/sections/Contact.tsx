import { Mail, ExternalLink, BookOpen } from "lucide-react";
import type { SiteDict } from "@/i18n/config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

interface Props {
  dict: SiteDict["contact"];
}

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="section-shell relative py-16 md:py-48 overflow-hidden">
      <BackgroundVideo src="/videos/hero-glass.mp4" />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(247,245,240,0.96) 0%, rgba(247,245,240,0.86) 32%, rgba(247,245,240,0.56) 60%, rgba(247,245,240,0.18) 100%), linear-gradient(135deg, rgba(255,248,212,0.34) 0%, rgba(253,240,224,0.22) 32%, rgba(250,236,240,0.18) 66%, rgba(248,234,238,0.18) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8 text-center">
        <Reveal>
          <SectionLabel className="mb-6 inline-block">{dict.label}</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-semibold leading-[0.97] tracking-[-0.04em] text-ink mb-8 max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.8rem,6vw,7rem)" }}
          >
            {dict.titleBefore}{" "}
            <em className="serif-italic not-italic">{dict.titleItalic}</em>
            {dict.titleAfter && ` ${dict.titleAfter}`}
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="text-xl text-ink-soft max-w-lg mx-auto mb-12 leading-[1.6]">
            {dict.description}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center sm:justify-center">
            <a
              href={dict.primaryCta.href}
              className="group inline-flex min-h-[44px] sm:min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-200 hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Mail className="size-4" aria-hidden="true" />
              {dict.primaryCta.label}
            </a>
            <a
              href={dict.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[44px] sm:min-h-[52px] items-center justify-center gap-2.5 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-ink transition-all duration-200 hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(255,255,255,0.68)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              {dict.secondaryCta.label}
            </a>
            <a
              href={dict.substackCta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.substackCta.ariaLabel}
              className="group inline-flex min-h-[44px] sm:min-h-[52px] items-center justify-center gap-2.5 rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-ink transition-all duration-200 hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              style={{
                background: "rgba(255,255,255,0.52)",
                border: "1px solid rgba(255,255,255,0.68)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {dict.substackCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
