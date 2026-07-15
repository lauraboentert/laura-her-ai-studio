import type { Locale, SiteDict } from "./config";
import de from "./dictionaries/de";
import en from "./dictionaries/en";

const dictionaries: Record<Locale, SiteDict> = { de, en };

export function getDictionary(locale: Locale): SiteDict {
  return dictionaries[locale] ?? dictionaries.de;
}
