"use client";

import { motion } from "motion/react";
import type { SiteDict } from "@/i18n/config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  entries: SiteDict["journey"];
  section: SiteDict["journeySection"];
}

export function Journey({ entries, section }: Props) {
  return (
    <section id="journey" className="section-shell theme-timeline py-16 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-5">{section.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="h2-section font-semibold leading-[1.05] tracking-[-0.04em] text-ink max-w-2xl mb-10 md:mb-16"
            style={{ fontSize: "clamp(2.2rem,4.2vw,4.5rem)" }}
          >
            {section.titleBefore}{" "}
            <em className="serif-italic not-italic">{section.titleItalic}</em>{" "}
            {section.titleAfter}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Desktop vertical line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 top-2 w-px bg-ink"
            style={{ height: "calc(100% - 48px)" }}
          />

          <ol className="flex flex-col">
            {entries.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.06}>
                <li
                  className={`flex md:block md:relative md:pl-12${i < entries.length - 1 ? " md:pb-[44px]" : ""}`}
                >
                  {/* Mobile rail: dot + connecting line in a dedicated left column */}
                  <div
                    aria-hidden="true"
                    className="flex flex-col items-center w-7 flex-shrink-0 mr-4 md:hidden"
                  >
                    <div className="w-3 h-3 rounded-full bg-ink mt-[5px] flex-shrink-0 relative z-10" />
                    {i < entries.length - 1 && (
                      <div className="w-px flex-1 bg-ink mt-[5px]" />
                    )}
                  </div>

                  {/* Desktop animated dot */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute hidden md:block left-[-4.5px] top-[10px] size-[9px] rounded-full border border-ink/30 bg-canvas"
                    whileInView={{
                      backgroundColor: "var(--ink)",
                      borderColor: "var(--ink)",
                    }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.25, delay: 0.08 }}
                  />

                  {/* Content column — fully right of the rail on mobile */}
                  <div
                    className={`min-w-0 flex-1 flex flex-col md:flex-row md:items-start md:gap-8${i < entries.length - 1 ? " pb-[44px] md:pb-0" : ""}`}
                  >
                    {/* Date / period */}
                    <div className="md:shrink-0 md:w-40 mb-1.5 md:mb-0">
                      <p className="text-[11px] md:text-xs font-semibold uppercase md:normal-case tracking-[0.13em] md:tracking-wide text-ink/50 md:text-ink-soft/70 pt-0.5 md:pt-0">
                        {entry.period}
                      </p>
                    </div>

                    {/* Company / role / description */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[1.05rem] md:text-xl font-semibold text-ink leading-snug mb-0.5">
                        {entry.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-soft mb-2 md:mb-2.5">
                        {entry.role}
                      </p>
                      {/* Mobile description (shorter) */}
                      <p className="md:hidden text-[0.9375rem] leading-[1.6] text-ink-soft">
                        {entry.descriptionMobile ?? entry.description}
                      </p>
                      {/* Desktop description (full) */}
                      <p className="hidden md:block text-base text-ink-soft leading-[1.65] max-w-xl">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-16 flex">
            <ButtonLink
              href="/CV_Laura-Boentert.pdf"
              variant="secondary"
              icon="download"
              download
            >
              {section.downloadCv}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
