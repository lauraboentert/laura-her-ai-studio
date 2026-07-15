import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-content";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const dict = getDictionary(validLocale);
  const pageUrl = `${siteConfig.url}/${validLocale}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        de: `${siteConfig.url}/de`,
        en: `${siteConfig.url}/en`,
        "x-default": `${siteConfig.url}/de`,
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      siteName: "Laura Böntert | Her AI Studio",
      locale: validLocale === "de" ? "de_DE" : "en_GB",
      type: "website",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: "Laura Böntert | Her AI Studio",
      description: dict.meta.ogDescription,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const dict = getDictionary(validLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Laura Böntert",
        jobTitle: "AI Digital Marketing & Commerce Consultant",
        url: siteConfig.url,
        sameAs: ["https://www.linkedin.com/in/laura-b%C3%B6ntert-75462545/"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Munich",
          addressCountry: "DE",
        },
      },
      {
        "@type": "ProfessionalService",
        name: "Her AI Studio",
        description:
          "Practical AI systems for digital marketing, workflow automation and commerce — built by Laura Böntert.",
        url: siteConfig.url,
        founder: { "@type": "Person", name: "Laura Böntert" },
        areaServed: "Worldwide",
        serviceType: ["AI Digital Marketing", "Workflow Automation", "AI Commerce"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FloatingNav
        locale={validLocale}
        navigation={dict.navigation}
        ctaLabel={dict.nav.cta}
        openMenuLabel={dict.nav.openMenu}
        closeMenuLabel={dict.nav.closeMenu}
        menuLabel={dict.nav.menuLabel}
      />
      <main>{children}</main>
      <Footer locale={validLocale} dict={dict.footer} />
    </>
  );
}
