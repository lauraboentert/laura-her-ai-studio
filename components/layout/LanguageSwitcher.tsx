"use client";

import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { legalSlugMap } from "@/data/legal-content";

interface Props {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    const hash = window.location.hash;
    const segments = pathname.split("/"); // ["", "de", "impressum"] or ["", "en", "privacy"]
    const slug = segments[2];

    if (slug && legalSlugMap[slug]) {
      const mappedSlug = legalSlugMap[slug][next];
      window.location.href = `/${next}/${mappedSlug}${hash}`;
      return;
    }

    const newPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${next}$1`);
    window.location.href = newPath + hash;
  };

  return (
    <div className="flex items-center gap-1">
      <Globe className="size-3.5 text-ink/40 shrink-0" aria-hidden="true" />
      <button
        onClick={() => switchLocale("de")}
        className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
          locale === "de"
            ? "text-ink bg-ink/8"
            : "text-ink/45 hover:text-ink"
        }`}
        aria-current={locale === "de" ? "true" : undefined}
        aria-label="Deutsch"
      >
        DE
      </button>
      <span className="text-ink/20 text-xs select-none">|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
          locale === "en"
            ? "text-ink bg-ink/8"
            : "text-ink/45 hover:text-ink"
        }`}
        aria-current={locale === "en" ? "true" : undefined}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
