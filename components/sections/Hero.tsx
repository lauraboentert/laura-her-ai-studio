"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ChevronDown } from "lucide-react";
import { hero } from "@/data/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Portrait drifts up gently — disabled on reduced motion
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -60]
  );
  // Orbs drift at different speeds for depth
  const orbBlushY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -100]
  );
  const orbButterY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -40]
  );

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(243, 227, 155, .70), transparent 30%), radial-gradient(circle at 80% 24%, rgba(244, 196, 210, .65), transparent 32%), radial-gradient(circle at 66% 84%, rgba(233, 226, 248, .55), transparent 28%), #F7F5F0",
      }}
      aria-label="Hero"
    >
      {/* Parallax orbs */}
      <motion.div
        aria-hidden="true"
        style={{ y: orbBlushY }}
        className="pointer-events-none absolute -top-32 -right-32 size-[500px] rounded-full bg-blush/30 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orbButterY }}
        className="pointer-events-none absolute bottom-0 -left-40 size-96 rounded-full bg-butter/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.p
              {...fadeUp(0.1)}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink"
            >
              AI meets{" "}
              <em className="serif-italic not-italic">commercial</em>{" "}
              execution.
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="mt-6 max-w-lg text-lg leading-[1.65] text-ink-soft"
            >
              {hero.description}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href="/CV_Laura-Boentert.pdf"
                variant="secondary"
                icon="download"
                download
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-8 flex flex-wrap gap-2"
            >
              {hero.tags.map((tag) => (
                <Pill key={tag} variant="light">
                  {tag}
                </Pill>
              ))}
            </motion.div>

            <motion.p {...fadeUp(0.6)} className="mt-6 text-sm text-ink-soft">
              {hero.note}
            </motion.p>
          </div>

          {/* Right: portrait with parallax */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: reduced ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{ y: portraitY }}
            >
              {/* Glow behind portrait */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-8 rounded-[48px] bg-blush/30 blur-2xl"
              />
              <div className="relative glass-card rounded-[40px] p-2 shadow-[0_32px_80px_rgba(65,43,49,0.18)]">
                <Image
                  src="/images/laura-portrait.jpg"
                  alt="Portrait of Laura Böntert"
                  width={480}
                  height={600}
                  priority
                  className="rounded-[32px] object-cover w-full max-w-sm lg:max-w-none"
                  style={{ maxHeight: "70vh", objectPosition: "center top" }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div {...fadeUp(1)} className="mt-16 flex justify-center">
          <a
            href="#expertise"
            className="flex flex-col items-center gap-1 text-xs text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
            aria-label="Scroll to expertise"
          >
            <ChevronDown
              className="size-5 animate-bounce"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
