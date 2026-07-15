import type { SiteDict } from "@/i18n/config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface Props {
  dict: SiteDict["founderDna"];
}

export function FounderDNA({ dict }: Props) {
  return (
    <SectionShell theme="blush-personal" className="py-16 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <Reveal>
              <SectionLabel className="mb-5">{dict.label}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="h2-section font-semibold leading-[1.05] tracking-[-0.04em] text-ink mb-6"
                style={{ fontSize: "clamp(2.2rem,4.2vw,4.5rem)" }}
              >
                {dict.titleBefore}{" "}
                <em className="serif-italic not-italic">{dict.titleItalic}</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg text-lg leading-[1.7] text-ink-soft max-w-lg">
                {dict.description}
              </p>
            </Reveal>
          </div>

          {/* Right: principles */}
          <div className="pt-0 lg:pt-14">
            <Reveal delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft mb-8">
                {dict.approachLabel}
              </p>
            </Reveal>
            <ol className="flex flex-col gap-8">
              {dict.principles.map((principle, i) => (
                <Reveal key={principle} delay={0.14 + i * 0.08}>
                  <li className="flex items-start gap-5">
                    <span
                      className="shrink-0 flex size-9 items-center justify-center rounded-full text-xs font-semibold text-ink-soft"
                      style={{
                        background: "rgba(255,255,255,0.42)",
                        border: "1px solid rgba(255,255,255,0.60)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xl font-medium text-ink leading-snug pt-1">
                      {principle}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
