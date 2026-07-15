import Image from "next/image";
import type { SiteDict } from "@/i18n/config";
import { Pill } from "@/components/ui/Pill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

interface Props {
  dict: SiteDict["about"];
}

export function About({ dict }: Props) {
  return (
    <SectionShell id="about" theme="soft-about" className="py-16 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Portrait */}
          <Reveal>
            <div className="relative max-w-[380px] mx-auto lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-8 rounded-[56px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(242,162,186,0.40) 0%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />
              <div
                className="relative rounded-[36px] p-2"
                style={{
                  background: "rgba(255,255,255,0.64)",
                  border: "1px solid rgba(255,255,255,0.58)",
                  boxShadow: "0 24px 70px rgba(92,42,62,0.14)",
                  backdropFilter: "blur(24px) saturate(135%)",
                  WebkitBackdropFilter: "blur(24px) saturate(135%)",
                }}
              >
                <Image
                  src="/images/laura-portrait.jpg"
                  alt={dict.altText}
                  width={400}
                  height={500}
                  className="rounded-[28px] object-cover w-full max-h-[44vh] sm:max-h-[58vh]"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal delay={0.1}>
              <h2
                className="h2-section font-semibold leading-[1.05] tracking-[-0.04em] text-ink mb-6"
                style={{ fontSize: "clamp(2rem,3.8vw,4.2rem)" }}
              >
                {dict.titleBefore}{" "}
                <em className="serif-italic not-italic">{dict.titleItalic}</em>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="body-lg text-lg leading-[1.65] text-ink-soft mb-4">
                {dict.description}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-base leading-[1.65] text-ink-soft mb-10">
                {dict.secondary}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {dict.badges.map((badge) => (
                  <Pill key={badge} variant="butter">
                    {badge}
                  </Pill>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
