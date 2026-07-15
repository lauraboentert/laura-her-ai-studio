import type { SiteDict } from "@/i18n/config";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface Props {
  dict: SiteDict["positioning"];
}

export function Positioning({ dict }: Props) {
  return (
    <SectionShell theme="peach-intro" className="py-16 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <Reveal>
          <SectionLabel className="mb-5">{dict.label}</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="h2-section font-semibold leading-[1.05] tracking-[-0.04em] text-ink max-w-3xl mb-8"
            style={{ fontSize: "clamp(2.2rem,4.2vw,4.5rem)" }}
          >
            {dict.titleBefore}{" "}
            <em className="serif-italic not-italic">{dict.titleItalic}</em>{" "}
            {dict.titleAfter}
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-lg max-w-2xl text-lg leading-[1.65] text-ink-soft mb-16">
            {dict.description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {dict.sides.map((side, i) => (
            <Reveal key={side.title} delay={0.12 + i * 0.1}>
              <div className="dark-glass card-hover h-full p-8 md:p-9 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">
                    {i === 0 ? "01" : "02"}
                  </span>
                  <div className="h-px flex-1 bg-ink/10" />
                </div>

                <h3 className="text-2xl font-semibold text-ink">{side.title}</h3>

                <ul className="flex flex-col gap-3">
                  {side.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-ink/35 mt-[3px] shrink-0 select-none text-sm">
                        +
                      </span>
                      <span className="text-base text-ink-soft leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
