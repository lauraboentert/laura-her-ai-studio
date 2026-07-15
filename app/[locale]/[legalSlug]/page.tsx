import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { legalContent, validLegalSlugs } from "@/data/legal-content";

type Props = {
  params: Promise<{ locale: string; legalSlug: string }>;
};

export async function generateStaticParams() {
  return [
    { locale: "de", legalSlug: "impressum" },
    { locale: "de", legalSlug: "datenschutz" },
    { locale: "en", legalSlug: "legal-notice" },
    { locale: "en", legalSlug: "privacy" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, legalSlug } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "de";

  if (!validLegalSlugs[validLocale]?.includes(legalSlug)) {
    return {};
  }

  const page = legalContent[validLocale][legalSlug];

  return {
    title: `${page.title} | Laura Böntert | Her AI Studio`,
    robots: { index: false, follow: false },
  };
}

const backLabel: Record<Locale, string> = {
  de: "Zurück zur Startseite",
  en: "Back to home",
};

export default async function LegalPage({ params }: Props) {
  const { locale, legalSlug } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "de";

  if (!validLegalSlugs[validLocale]?.includes(legalSlug)) {
    notFound();
  }

  const page = legalContent[validLocale][legalSlug];

  return (
    <div className="bg-canvas min-h-screen">
      <div className="mx-auto max-w-[800px] px-4 sm:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <a
          href={`/${validLocale}`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors mb-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
          {backLabel[validLocale]}
        </a>

        <header className="mb-12 pb-10 border-b border-ink/10">
          <h1
            className="font-semibold text-ink tracking-[-0.02em] leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-base text-ink-soft mt-3 leading-relaxed">
              {page.subtitle}
            </p>
          )}
          {page.lastUpdated && (
            <p className="text-sm text-ink-soft/60 mt-2">{page.lastUpdated}</p>
          )}
        </header>

        <div className="space-y-10">
          {page.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading && (
                <h2 className="text-lg font-semibold text-ink">
                  {section.heading}
                </h2>
              )}
              {section.blocks.map((block, j) =>
                block.type === "p" ? (
                  <p
                    key={j}
                    className="text-base text-ink-soft leading-[1.7] whitespace-pre-line"
                  >
                    {block.text}
                  </p>
                ) : (
                  <ul key={j} className="space-y-1.5 pl-4">
                    {block.items.map((item, k) => (
                      <li
                        key={k}
                        className="text-base text-ink-soft leading-[1.7] flex gap-2"
                      >
                        <span className="text-ink/30 select-none shrink-0 mt-0.5">–</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
