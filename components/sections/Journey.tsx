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

        {/* ── Mobile timeline ── */}
        <div className="md:hidden mobile-timeline mb-12">
          <ol>
            {entries.map((entry, i) => (
              <li
                key={entry.company}
                className="relative"
                style={{ paddingBottom: i < entries.length - 1 ? "44px" : 0 }}
              >
                <div className="mobile-timeline-dot" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ink/50 mb-2 pt-0.5">
                  {entry.period}
                </p>
                <h3 className="text-[1.05rem] font-semibold text-ink leading-snug mb-0.5">
                  {entry.company}
                </h3>
                <p className="text-sm font-medium text-ink-soft mb-2">
                  {entry.role}
                </p>
                <p className="text-[0.9375rem] leading-[1.6] text-ink-soft max-w-[34ch]">
                  {entry.descriptionMobile ?? entry.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Desktop timeline ── */}
        <div className="hidden md:block relative">
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 w-px bg-ink"
            style={{ height: "calc(100% - 48px)" }}
          />

          <ol className="flex flex-col">
            {entries.map((entry, i) => (
              <Reveal key={entry.company} delay={i * 0.07}>
                <li className="group relative pl-12 pb-10 last:pb-0">
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-[-4.5px] top-[10px] size-[9px] rounded-full border border-ink/30 bg-canvas"
                    whileInView={{
                      backgroundColor: "var(--ink)",
                      borderColor: "var(--ink)",
                    }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.25, delay: 0.08 }}
                  />

                  <div className="flex items-start gap-8">
                    <div className="shrink-0 w-40">
                      <p className="text-xs font-semibold text-ink-soft/70 tracking-wide">
                        {entry.period}
                      </p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ink mb-0.5">
                        {entry.company}
                      </h3>
                      <p className="text-sm font-medium text-ink-soft mb-2.5">
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
