import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { HeroMotionBanner } from "@/components/sections/HeroMotionBanner";
import { Positioning } from "@/components/sections/Positioning";
import { Expertise } from "@/components/sections/Expertise";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Journey } from "@/components/sections/Journey";
import { FounderDNA } from "@/components/sections/FounderDNA";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const dict = getDictionary(validLocale);

  return (
    <>
      <HeroMotionBanner dict={dict.hero} />

      <div className="section-overlap relative" style={{ zIndex: 1 }}>
        <Positioning dict={dict.positioning} />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 2 }}>
        <Expertise
          items={dict.expertise}
          section={dict.expertiseSection}
        />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 3 }}>
        <ProofStrip items={dict.proof} label={dict.proofSection.label} />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 4 }}>
        <Journey entries={dict.journey} section={dict.journeySection} />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 5 }}>
        <FounderDNA dict={dict.founderDna} />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 6 }}>
        <About dict={dict.about} />
      </div>
      <div className="section-overlap relative" style={{ zIndex: 7 }}>
        <Contact dict={dict.contact} />
      </div>
    </>
  );
}
