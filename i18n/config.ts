export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export type SiteDict = {
  navigation: readonly { label: string; href: string }[];
  nav: {
    cta: string;
    openMenu: string;
    closeMenu: string;
    menuLabel: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleItalic: string;
    titleAfter: string;
    description: string;
    descriptionMobile: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    tags: readonly string[];
    note: string;
    scrollLabel: string;
  };
  positioning: {
    label: string;
    titleBefore: string;
    titleItalic: string;
    titleAfter: string;
    description: string;
    sides: readonly { title: string; items: readonly string[] }[];
  };
  expertiseSection: {
    label: string;
    titleBefore: string;
    titleItalic: string;
    titleAfter: string;
  };
  expertise: readonly {
    number: string;
    slug: string;
    title: string;
    headline: string;
    description: string;
    deliverables: readonly string[];
    outcome: string;
  }[];
  proofSection: {
    label: string;
  };
  proof: readonly { value: string; label: string }[];
  journeySection: {
    label: string;
    titleBefore: string;
    titleItalic: string;
    titleAfter: string;
    downloadCv: string;
  };
  journey: readonly {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
  founderDna: {
    label: string;
    titleBefore: string;
    titleItalic: string;
    description: string;
    approachLabel: string;
    principles: readonly string[];
  };
  about: {
    titleBefore: string;
    titleItalic: string;
    description: string;
    secondary: string;
    badges: readonly string[];
    altText: string;
  };
  contact: {
    label: string;
    titleBefore: string;
    titleItalic: string;
    titleAfter: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    substackCta: { label: string; href: string; ariaLabel: string };
  };
  footer: {
    downloadCv: string;
    imprint: string;
    privacy: string;
    tagline: string;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
};
