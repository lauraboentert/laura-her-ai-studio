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

        {/* Single unified timeline — responsive layout, no duplicate DOM */}
        <div className="relative">
          {/* Desktop vertical line (hidden on mobile via md: prefix) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 top-2 w-px bg-ink"
            style={{ height: "calc(100% - 48px)" }}
          />

          {/* Mobile CSS line comes from .mobile-timeline::before in globals.css */}
          <ol className="mobile-timeline flex flex-col md:pl-0">
            {entries.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.06}>
                <li
                  className="relative md:pl-12"
                  style={{ paddingBottom: i < entries.length - 1 ? "44px" : 0 }}
                >
                  {/* Mobile dot — hidden on desktop via md:hidden */}
                  <div
                    aria-hidden="true"
                    className="mobile-timeline-dot md:hidden"
                  />

                  {/* Desktop animated dot — hidden on mobile */}
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

                  {/* Responsive content layout */}
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    {/* Date / period */}
                    <div className="md:shrink-0 md:w-40 mb-1.5 md:mb-0">
                      <p className="text-[11px] md:text-xs font-semibold uppercase md:normal-case tracking-[0.13em] md:tracking-wide text-ink/50 md:text-ink-soft/70 pt-0.5 md:pt-0">
                        {entry.period}
                      </p>
                    </div>

                    {/* Company / role / description */}
                    <div className="flex-1">
                      <h3 className="text-[1.05rem] md:text-xl font-semibold text-ink leading-snug mb-0.5">
                        {entry.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-soft mb-2 md:mb-2.5">
                        {entry.role}
                      </p>
                      {/* Mobile description (shorter) */}
                      <p className="md:hidden text-[0.9375rem] leading-[1.6] text-ink-soft max-w-[34ch]">
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
