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
    <section id="journey" className="section-shell theme-timeline py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-5">{section.label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-semibold leading-[1.05] tracking-[-0.04em] text-ink max-w-2xl mb-16"
            style={{ fontSize: "clamp(2.2rem,4.2vw,4.5rem)" }}
          >
            {section.titleBefore}{" "}
            <em className="serif-italic not-italic">{section.titleItalic}</em>{" "}
            {section.titleAfter}
          </h2>
        </Reveal>

        <div className="relative">
          {/* Single continuous solid line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 hidden md:block w-px bg-ink"
            style={{ height: "calc(100% - 48px)" }}
          />

          <ol className="flex flex-col">
            {entries.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.07}>
                <li className="group relative md:pl-12 pb-12 last:pb-0">
                  {/* Timeline dot — fills to ink on scroll-into-view */}
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-[-4.5px] top-[10px] hidden md:block size-[9px] rounded-full border border-ink/30 bg-canvas"
                    whileInView={{
                      backgroundColor: "var(--ink)",
                      borderColor: "var(--ink)",
                    }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.25, delay: 0.08 }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
                    <div className="shrink-0 sm:w-40 mb-2 sm:mb-0">
                      <p className="text-xs font-semibold text-ink-soft/70 tracking-wide">
                        {entry.period}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ink mb-0.5">
                        {entry.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-soft mb-3">
                        {entry.role}
                      </p>
                      <p className="text-base text-ink-soft leading-[1.65] max-w-xl">
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
          <div className="mt-16 flex">
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
