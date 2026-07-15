import { ExternalLink, Mail, Download, BookOpen } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { SiteDict } from "@/i18n/config";

interface Props {
  locale: Locale;
  dict: SiteDict["footer"];
}

export function Footer({ locale, dict }: Props) {
  return (
    <footer className="border-t border-ink/10 bg-canvas py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">
              Laura Böntert | Her AI Studio
            </p>
            <p className="mt-1 text-sm text-ink-soft">Munich, Germany</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3" role="list">
              <li>
                <a
                  href="https://www.linkedin.com/in/laura-b%C3%B6ntert-75462545/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://substack.com/@laurabntert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Substack
                </a>
              </li>
              <li>
                <a
                  href="mailto:l.boentert@outlook.de"
                  className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="/CV_Laura-Boentert.pdf"
                  download
                  className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {dict.downloadCv}
                </a>
              </li>
              <li>
                <a
                  href={locale === "de" ? `/${locale}/impressum` : `/${locale}/legal-notice`}
                  className="text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  {dict.imprint}
                </a>
              </li>
              <li>
                <a
                  href={locale === "de" ? `/${locale}/datenschutz` : `/${locale}/privacy`}
                  className="text-sm text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded"
                >
                  {dict.privacy}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-ink/8 pt-6">
          <p className="text-xs text-ink-soft">{dict.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
