"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ChevronDown } from "lucide-react";
import type { SiteDict } from "@/i18n/config";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

interface Props {
  dict: SiteDict["hero"];
}

export function HeroMotionBanner({ dict }: Props) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.4,
  });

  const videoScale = useTransform(smooth, [0, 1], reduced ? [1, 1] : [1.06, 1.0]);
  const videoY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [0, 48]);
  const textY = useTransform(smooth, [0, 1], reduced ? [0, 0] : [0, -20]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: "easeOut" as const },
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden"
      aria-label="Introduction"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 will-change-transform"
        style={{ scale: videoScale, y: videoY }}
      >
        <BackgroundVideo src="/videos/hero-glass.mp4" />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(247,245,240,0.96) 0%, rgba(247,245,240,0.86) 28%, rgba(247,245,240,0.45) 58%, rgba(247,245,240,0.06) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(247,245,240,1) 0%, transparent 100%)",
        }}
      />

      <div className="relative flex flex-col min-h-svh">
        <div className="h-28 shrink-0" />

        <div className="flex-1 flex items-center mx-auto w-full max-w-[1280px] px-4 sm:px-8 pb-16">
          <motion.div style={{ y: textY }} className="w-full max-w-2xl flex flex-col">
            <motion.p
              {...fadeUp(0.06)}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50 mb-6"
            >
              {dict.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-semibold leading-[0.95] tracking-[-0.04em] text-ink mb-6"
              style={{ fontSize: "clamp(2.8rem,6.5vw,7rem)" }}
            >
              {dict.titleBefore}{" "}
              <em className="serif-italic not-italic">{dict.titleItalic}</em>{" "}
              {dict.titleAfter}
            </motion.h1>

            <motion.p
              {...fadeUp(0.26)}
              className="text-lg leading-[1.65] text-ink-soft max-w-md mb-8"
            >
              {dict.description}
            </motion.p>

            <motion.div {...fadeUp(0.36)} className="flex flex-wrap gap-3 mb-8">
              <ButtonLink href={dict.primaryCta.href}>
                {dict.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={dict.secondaryCta.href}
                variant="secondary"
                icon="download"
                download
              >
                {dict.secondaryCta.label}
              </ButtonLink>
            </motion.div>

            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-2 mb-5">
              {dict.tags.map((tag) => (
                <Pill key={tag} variant="light">
                  {tag}
                </Pill>
              ))}
            </motion.div>

            <motion.p {...fadeUp(0.50)} className="text-sm text-ink-soft">
              {dict.note}
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="shrink-0 pb-8 flex justify-center"
        >
          <a
            href="#expertise"
            aria-label={dict.scrollLabel}
            className="flex flex-col items-center gap-1 text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
          >
            <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
