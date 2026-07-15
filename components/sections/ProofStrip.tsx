import type { SiteDict } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface Props {
  items: SiteDict["proof"];
  label: string;
}

export function ProofStrip({ items, label }: Props) {
  return (
    <SectionShell theme="butter-proof" className="py-12 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft mb-8 md:mb-12">
            {label}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.07}>
              <div className="dark-glass card-hover p-4 sm:p-6 md:p-7 flex flex-col gap-2 sm:gap-3 h-full">
                <p
                  className="font-semibold tracking-[-0.04em] text-ink leading-none"
                  style={{ fontSize: "clamp(2rem,3.8vw,3.5rem)" }}
                >
                  {item.value}
                </p>
                <p className="text-sm text-ink-soft leading-snug">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
