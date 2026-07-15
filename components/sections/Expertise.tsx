"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import type { SiteDict } from "@/i18n/config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

type ExpertiseItem = SiteDict["expertise"][number];

function ExpertisePanel({ item }: { item: ExpertiseItem }) {
  return (
    <div
      className="dark-glass w-full p-6 md:p-11 flex flex-col"
      style={{ maxWidth: "720px", borderRadius: "28px" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50 mb-5">
        {item.number} — {item.title}
      </p>

      <h3
        className="font-semibold leading-[1.08] tracking-[-0.03em] text-ink mb-6"
        style={{ fontSize: "clamp(1.4rem,1.9vw,2.1rem)" }}
      >
        {item.headline}
      </h3>

      <p className="text-base leading-[1.65] text-ink-soft mb-6 md:mb-10">
        {item.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-5 md:mb-9">
        {item.deliverables.map((d, idx) => (
          <div key={d} className="flex items-start gap-3 text-sm text-ink-soft">
            <span className="shrink-0 tabular-nums font-medium text-[11px] text-ink/30 mt-[3px] w-5">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="leading-snug">{d}</span>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-3 rounded-xl px-5 py-3.5"
        style={{
          background: "rgba(255, 245, 215, 0.62)",
          border: "1px solid rgba(255, 232, 170, 0.42)",
        }}
      >
        <ArrowRight className="size-4 shrink-0 text-ink/45" aria-hidden="true" />
        <p className="text-sm font-semibold text-ink">{item.outcome}</p>
      </div>
    </div>
  );
}

interface Props {
  items: SiteDict["expertise"];
  section: SiteDict["expertiseSection"];
}

export function Expertise({ items, section }: Props) {
  const reduced = useReducedMotion();
  const outerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.38) setActiveIndex(0);
    else if (v < 0.72) setActiveIndex(1);
    else setActiveIndex(2);
  });

  const p1Opacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.30, 0.40],
    reduced ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );
  const p1Y = useTransform(
    scrollYProgress,
    [0, 0.06, 0.30, 0.40],
    reduced ? [0, 0, 0, 0] : [64, 0, 0, -36]
  );
  const p1Scale = useTransform(
    scrollYProgress,
    [0, 0.06, 0.30, 0.40],
    [0.96, 1, 1, 0.98]
  );

  const p2Opacity = useTransform(
    scrollYProgress,
    [0.30, 0.42, 0.62, 0.72],
    reduced ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );
  const p2Y = useTransform(
    scrollYProgress,
    [0.30, 0.42, 0.62, 0.72],
    reduced ? [0, 0, 0, 0] : [64, 0, 0, -36]
  );
  const p2Scale = useTransform(
    scrollYProgress,
    [0.30, 0.42, 0.62, 0.72],
    [0.96, 1, 1, 0.98]
  );

  const p3Opacity = useTransform(
    scrollYProgress,
    [0.62, 0.74, 1.0],
    reduced ? [1, 1, 1] : [0, 1, 1]
  );
  const p3Y = useTransform(
    scrollYProgress,
    [0.62, 0.74, 1.0],
    reduced ? [0, 0, 0] : [64, 0, 0]
  );
  const p3Scale = useTransform(scrollYProgress, [0.62, 0.74, 1.0], [0.96, 1, 1]);

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -60]
  );

  const line1Fill = useTransform(scrollYProgress, [0.02, 0.36], [0, 1]);
  const line2Fill = useTransform(scrollYProgress, [0.36, 0.70], [0, 1]);
  const line3Fill = useTransform(scrollYProgress, [0.70, 0.98], [0, 1]);
  const lineFills = [line1Fill, line2Fill, line3Fill];

  const panelStyles = [
    { opacity: p1Opacity, y: p1Y, scale: p1Scale },
    { opacity: p2Opacity, y: p2Y, scale: p2Scale },
    { opacity: p3Opacity, y: p3Y, scale: p3Scale },
  ];

  return (
    <section
      id="expertise"
      ref={outerRef}
      className="section-shell theme-rose-focus relative md:min-h-[250svh]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-3/4 h-3/4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,121,156,0.28) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-1/2 h-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(246,220,99,0.22) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="md:sticky md:top-0 md:h-svh flex flex-col overflow-hidden">
        <div className="h-20 shrink-0" />

        <div className="flex-1 flex flex-col lg:flex-row gap-10 lg:gap-16 mx-auto w-full max-w-[1280px] px-4 sm:px-8 py-8 min-h-0">

          <motion.div
            style={{ y: leftY }}
            className="w-full lg:w-[40%] shrink-0 flex flex-col justify-center"
          >
            <SectionLabel className="mb-5">{section.label}</SectionLabel>

            <h2
              className="h2-section font-semibold leading-[1.06] tracking-[-0.04em] text-ink mb-10"
              style={{ fontSize: "clamp(2rem,3.8vw,4rem)" }}
            >
              {section.titleBefore}{" "}
              <em className="serif-italic not-italic">
                {section.titleItalic}
              </em>
              {section.titleAfter && ` ${section.titleAfter}`}
            </h2>

            {/* Progress indicators — desktop only */}
            <div className="hidden md:flex flex-col gap-5">
              {items.map((ex, i) => (
                <div key={ex.slug} className="flex items-center gap-4">
                  <div className="relative w-16 h-px bg-ink/10 overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-ink/50"
                      style={{ scaleX: lineFills[i], transformOrigin: "left" }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-300"
                    style={{
                      color:
                        activeIndex === i
                          ? "rgba(23,21,19,0.85)"
                          : "rgba(23,21,19,0.28)",
                    }}
                  >
                    {ex.number} {ex.title}
                  </span>
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="hidden lg:block mt-12 w-32 h-32 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, rgba(255,252,230,0.80), rgba(255,231,127,0.50) 55%, transparent 75%)",
                border: "1px solid rgba(255,255,255,0.40)",
                backdropFilter: "blur(16px)",
              }}
            />
          </motion.div>

          {/* Desktop sticky panels */}
          <div className="hidden md:block flex-1 relative min-h-0">
            {items.map((item, i) => (
              <motion.div
                key={item.slug}
                className="absolute inset-0 flex items-center will-change-transform"
                style={panelStyles[i]}
              >
                <ExpertisePanel item={item} />
              </motion.div>
            ))}
          </div>

          {/* Mobile: stacked panels */}
          <div className="md:hidden flex flex-col gap-6">
            <div className="flex flex-col gap-2 mb-2">
              {items.map((ex) => (
                <span
                  key={ex.slug}
                  className="text-xs font-medium text-ink/35 uppercase tracking-[0.14em]"
                >
                  {ex.number} {ex.title}
                </span>
              ))}
            </div>
            {items.map((item) => (
              <Reveal key={item.slug}>
                <ExpertisePanel item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
