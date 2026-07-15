export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalPage = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export type LegalContent = {
  de: Record<string, LegalPage>;
  en: Record<string, LegalPage>;
};

export const legalContent: LegalContent = {
  de: {
    impressum: {
      title: "Impressum",
      subtitle: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)",
      sections: [
        {
          blocks: [
            {
              type: "p",
              text: "Laura Böntert\nHer AI Studio\nGroßhesseloher Str. 2a\n81479 München\nDeutschland",
            },
          ],
        },
        {
          heading: "Kontakt",
          blocks: [{ type: "p", text: "E-Mail: l.boentert@outlook.de" }],
        },
        {
          heading: "Verbraucherstreitbeilegung",
          blocks: [
            {
              type: "p",
              text: "Ich bin weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
            },
          ],
        },
        {
          heading: "Hinweis zur Unternehmensbezeichnung",
          blocks: [
            {
              type: "p",
              text: "Her AI Studio ist die geschäftliche Bezeichnung von Laura Böntert.",
            },
          ],
        },
      ],
    },

    datenschutz: {
      title: "Datenschutzerklärung",
      lastUpdated: "Stand: Juli 2026",
      sections: [
        {
          heading: "1. Verantwortliche",
          blocks: [
            {
              type: "p",
              text: "Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:",
            },
            {
              type: "p",
              text: "Laura Böntert\nHer AI Studio\nGroßhesseloher Str. 2a\n81479 München\nDeutschland",
            },
            { type: "p", text: "E-Mail: l.boentert@outlook.de" },
          ],
        },
        {
          heading: "2. Allgemeine Hinweise",
          blocks: [
            {
              type: "p",
              text: "Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Personenbezogene Daten werden nur verarbeitet, soweit dies für die Bereitstellung dieser Website, die Bearbeitung von Anfragen oder die Erfüllung gesetzlicher Pflichten erforderlich ist.",
            },
            {
              type: "p",
              text: "Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchen Zwecken dies geschieht und welche Rechte Ihnen zustehen.",
            },
          ],
        },
        {
          heading: "3. Hosting über Netlify",
          blocks: [
            {
              type: "p",
              text: "Diese Website wird über den Hostinganbieter Netlify bereitgestellt.",
            },
            {
              type: "p",
              text: "Anbieter:\n\nNetlify, Inc.\n101 2nd Street\nSan Francisco, CA 94105\nVereinigte Staaten",
            },
            {
              type: "p",
              text: "Beim Aufruf dieser Website verarbeitet Netlify technisch erforderliche Verbindungs- und Zugriffsdaten. Dazu können insbesondere folgende Daten gehören:",
            },
            {
              type: "ul",
              items: [
                "IP-Adresse",
                "Datum und Uhrzeit des Zugriffs",
                "aufgerufene Seite oder Datei",
                "übertragene Datenmenge",
                "Browsertyp und Browserversion",
                "Betriebssystem",
                "Referrer-URL",
                "HTTP-Statuscode",
                "technische Anfrage- und Sicherheitsinformationen",
              ],
            },
            {
              type: "p",
              text: "Die Verarbeitung erfolgt, um die Website technisch bereitzustellen, ihre Stabilität und Sicherheit zu gewährleisten sowie technische Fehler und missbräuchliche Zugriffe erkennen zu können.",
            },
            {
              type: "p",
              text: "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren, stabilen und funktionsfähigen Bereitstellung dieser Website.",
            },
            {
              type: "p",
              text: "Netlify verarbeitet Daten in meinem Auftrag. Soweit erforderlich, erfolgt die Verarbeitung auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.",
            },
            {
              type: "p",
              text: "Da Netlify seinen Sitz in den Vereinigten Staaten hat, kann eine Übermittlung personenbezogener Daten in die USA nicht ausgeschlossen werden. Netlify gibt an, am EU-U.S. Data Privacy Framework teilzunehmen. Soweit erforderlich, werden ergänzende geeignete Garantien für die Datenübermittlung angewendet.",
            },
            {
              type: "p",
              text: "Die Daten werden nur so lange gespeichert, wie dies für die technische Bereitstellung, Sicherheit und Fehleranalyse erforderlich ist oder gesetzliche und vertragliche Aufbewahrungspflichten bestehen. Die konkrete Speicherdauer kann von dem eingesetzten Netlify-Dienst und dem gewählten Tarif abhängen.",
            },
          ],
        },
        {
          heading: "4. Kontaktaufnahme per E-Mail",
          blocks: [
            {
              type: "p",
              text: "Wenn Sie mich per E-Mail kontaktieren, verarbeite ich die von Ihnen übermittelten Daten, insbesondere Ihre E-Mail-Adresse, Ihren Namen, den Inhalt Ihrer Nachricht und gegebenenfalls weitere freiwillig übermittelte Informationen.",
            },
            {
              type: "p",
              text: "Die Verarbeitung erfolgt zur Bearbeitung und Beantwortung Ihrer Anfrage.",
            },
            {
              type: "p",
              text: "Bezieht sich die Anfrage auf einen möglichen oder bestehenden Vertrag, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO. In anderen Fällen erfolgt die Verarbeitung auf Grundlage meines berechtigten Interesses an der Bearbeitung geschäftlicher und allgemeiner Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.",
            },
            {
              type: "p",
              text: "Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere Speicherung bestehen.",
            },
          ],
        },
        {
          heading: "5. Sprachauswahl",
          blocks: [
            {
              type: "p",
              text: "Diese Website ist in deutscher und englischer Sprache verfügbar. Die angezeigte Sprache wird ausschließlich durch den URL-Pfad bestimmt (z. B. /de oder /en). Es werden keine Spracheinstellungen lokal in Ihrem Browser gespeichert.",
            },
          ],
        },
        {
          heading: "6. Lokal bereitgestellte Medien und Schriften",
          blocks: [
            {
              type: "p",
              text: "Das Hero-Video, Bilder und Webschriften werden lokal über diese Website bereitgestellt. Beim Laden dieser Dateien wird daher keine direkte Verbindung zu externen Video-, Bild- oder Schriftanbietern hergestellt.",
            },
          ],
        },
        {
          heading: "7. Externe Links",
          blocks: [
            {
              type: "p",
              text: "Diese Website enthält Links zu externen Angeboten, insbesondere zu LinkedIn und Substack.",
            },
            {
              type: "p",
              text: "Solange Sie diese Links nicht anklicken, wird allein aufgrund der Darstellung des Links keine Verbindung zu den jeweiligen Anbietern hergestellt. Nach dem Anklicken verlassen Sie diese Website. Die weitere Datenverarbeitung erfolgt dann in Verantwortung des jeweiligen Anbieters und nach dessen Datenschutzbestimmungen.",
            },
          ],
        },
        {
          heading: "8. Keine Analyse- oder Werbedienste",
          blocks: [
            {
              type: "p",
              text: "Auf dieser Website werden derzeit keine Analyse-, Tracking-, Profiling- oder personalisierten Werbedienste eingesetzt.",
            },
            {
              type: "p",
              text: "Es werden keine Social-Media-Inhalte, Videos oder sonstigen Inhalte externer Anbieter automatisch eingebettet. Sollte sich dies ändern, wird diese Datenschutzerklärung vor dem Einsatz entsprechend aktualisiert und, soweit erforderlich, eine Einwilligung eingeholt.",
            },
          ],
        },
        {
          heading: "9. Speicherdauer",
          blocks: [
            {
              type: "p",
              text: "Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist. Eine längere Speicherung erfolgt nur, wenn gesetzliche Aufbewahrungspflichten bestehen oder die Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt werden.",
            },
          ],
        },
        {
          heading: "10. Ihre Rechte",
          blocks: [
            {
              type: "p",
              text: "Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht:",
            },
            {
              type: "ul",
              items: [
                "Auskunft über Ihre personenbezogenen Daten zu verlangen",
                "unrichtige Daten berichtigen zu lassen",
                "die Löschung Ihrer Daten zu verlangen",
                "die Einschränkung der Verarbeitung zu verlangen",
                "der Verarbeitung aus Gründen Ihrer besonderen Situation zu widersprechen",
                "Datenübertragbarkeit zu verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind",
                "eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen",
              ],
            },
            {
              type: "p",
              text: "Zur Ausübung Ihrer Rechte können Sie sich per E-Mail an l.boentert@outlook.de wenden.",
            },
          ],
        },
        {
          heading: "11. Beschwerderecht",
          blocks: [
            {
              type: "p",
              text: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.",
            },
            {
              type: "p",
              text: "Für nicht öffentliche Unternehmen und selbstständig Tätige in Bayern ist grundsätzlich zuständig:",
            },
            {
              type: "p",
              text: "Bayerisches Landesamt für Datenschutzaufsicht\nPromenade 18\n91522 Ansbach\nDeutschland",
            },
          ],
        },
        {
          heading: "12. Automatisierte Entscheidungen",
          blocks: [
            {
              type: "p",
              text: "Eine automatisierte Entscheidungsfindung einschließlich Profiling findet über diese Website nicht statt.",
            },
          ],
        },
        {
          heading: "13. Aktualisierung dieser Datenschutzerklärung",
          blocks: [
            {
              type: "p",
              text: "Diese Datenschutzerklärung wird angepasst, wenn sich die eingesetzten Dienste, die technische Gestaltung der Website oder die rechtlichen Anforderungen ändern.",
            },
          ],
        },
      ],
    },
  },

  en: {
    "legal-notice": {
      title: "Legal Notice",
      subtitle:
        "Information pursuant to Section 5 of the German Digital Services Act (Digitale-Dienste-Gesetz – DDG)",
      sections: [
        {
          blocks: [
            {
              type: "p",
              text: "Laura Böntert\nHer AI Studio\nGroßhesseloher Str. 2a\n81479 Munich\nGermany",
            },
          ],
        },
        {
          heading: "Contact",
          blocks: [{ type: "p", text: "Email: l.boentert@outlook.de" }],
        },
        {
          heading: "Consumer dispute resolution",
          blocks: [
            {
              type: "p",
              text: "I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
            },
          ],
        },
        {
          heading: "Business name",
          blocks: [
            {
              type: "p",
              text: "Her AI Studio is the business name used by Laura Böntert.",
            },
          ],
        },
      ],
    },

    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: July 2026",
      sections: [
        {
          heading: "1. Controller",
          blocks: [
            {
              type: "p",
              text: "The controller responsible for the processing of personal data on this website is:",
            },
            {
              type: "p",
              text: "Laura Böntert\nHer AI Studio\nGroßhesseloher Str. 2a\n81479 Munich\nGermany",
            },
            { type: "p", text: "Email: l.boentert@outlook.de" },
          ],
        },
        {
          heading: "2. General information",
          blocks: [
            {
              type: "p",
              text: "The protection of your personal data is important to me. Personal data is processed only to the extent necessary to provide this website, respond to enquiries or comply with legal obligations.",
            },
            {
              type: "p",
              text: "This Privacy Policy explains which personal data may be processed when you visit this website, the purposes for which it is processed and the rights available to you.",
            },
          ],
        },
        {
          heading: "3. Hosting by Netlify",
          blocks: [
            {
              type: "p",
              text: "This website is hosted and delivered through Netlify.",
            },
            {
              type: "p",
              text: "Provider:\n\nNetlify, Inc.\n101 2nd Street\nSan Francisco, CA 94105\nUnited States",
            },
            {
              type: "p",
              text: "When this website is accessed, Netlify processes technical connection and access information required to provide the website. This information may include:",
            },
            {
              type: "ul",
              items: [
                "IP address",
                "date and time of access",
                "requested page or file",
                "amount of data transferred",
                "browser type and version",
                "operating system",
                "referrer URL",
                "HTTP status code",
                "technical request and security information",
              ],
            },
            {
              type: "p",
              text: "The data is processed to provide the website, maintain its stability and security, and detect technical errors or abusive access.",
            },
            {
              type: "p",
              text: "The legal basis is Article 6(1)(f) GDPR. The legitimate interest is the secure, stable and functional provision of this website.",
            },
            {
              type: "p",
              text: "Netlify processes data on my behalf. Where required, the processing is governed by a data processing agreement pursuant to Article 28 GDPR.",
            },
            {
              type: "p",
              text: "As Netlify is based in the United States, personal data may be transferred to the USA. Netlify states that it participates in the EU-U.S. Data Privacy Framework. Where required, additional appropriate safeguards are used for international data transfers.",
            },
            {
              type: "p",
              text: "The data is retained only for as long as necessary to provide and secure the website, investigate technical errors, or comply with applicable legal and contractual retention requirements. The exact retention period may depend on the Netlify service and pricing plan used.",
            },
          ],
        },
        {
          heading: "4. Contact by email",
          blocks: [
            {
              type: "p",
              text: "If you contact me by email, I process the information you provide, particularly your email address, name, message and any other information you submit voluntarily.",
            },
            {
              type: "p",
              text: "The data is processed to respond to your enquiry.",
            },
            {
              type: "p",
              text: "Where the enquiry relates to a potential or existing contract, the legal basis is Article 6(1)(b) GDPR. In other cases, processing is based on my legitimate interest in responding to business and general enquiries under Article 6(1)(f) GDPR.",
            },
            {
              type: "p",
              text: "The data will be deleted once the enquiry has been fully resolved, unless statutory retention obligations or legitimate reasons require further storage.",
            },
          ],
        },
        {
          heading: "5. Language selection",
          blocks: [
            {
              type: "p",
              text: "This website is available in German and English. The displayed language is determined solely by the URL path (e.g. /de or /en). No language preference data is stored in your browser.",
            },
          ],
        },
        {
          heading: "6. Locally hosted media and fonts",
          blocks: [
            {
              type: "p",
              text: "The hero video, images and web fonts are hosted locally through this website. Loading these files therefore does not establish a direct connection to external video, image or font providers.",
            },
          ],
        },
        {
          heading: "7. External links",
          blocks: [
            {
              type: "p",
              text: "This website contains links to external services, particularly LinkedIn and Substack.",
            },
            {
              type: "p",
              text: "No connection to those providers is established solely by displaying the links. When you click an external link, you leave this website. Any further processing is carried out under the responsibility and privacy terms of the respective provider.",
            },
          ],
        },
        {
          heading: "8. No analytics or advertising services",
          blocks: [
            {
              type: "p",
              text: "This website currently does not use analytics, tracking, profiling or personalised advertising services.",
            },
            {
              type: "p",
              text: "Social media content, external videos and other third-party content are not automatically embedded. If this changes, this Privacy Policy will be updated before such services are used and consent will be obtained where required.",
            },
          ],
        },
        {
          heading: "9. Retention",
          blocks: [
            {
              type: "p",
              text: "Personal data is stored only for as long as required for the relevant purpose. Data may be stored for a longer period where statutory retention obligations apply or where it is required for the establishment, exercise or defence of legal claims.",
            },
          ],
        },
        {
          heading: "10. Your rights",
          blocks: [
            {
              type: "p",
              text: "Subject to the applicable legal requirements, you have the right to:",
            },
            {
              type: "ul",
              items: [
                "obtain access to your personal data",
                "request the correction of inaccurate data",
                "request the deletion of your data",
                "request restriction of processing",
                "object to processing on grounds relating to your particular situation",
                "receive your data in a portable format where the legal requirements apply",
                "withdraw consent at any time with effect for the future",
              ],
            },
            {
              type: "p",
              text: "To exercise your rights, contact:\n\nl.boentert@outlook.de",
            },
          ],
        },
        {
          heading: "11. Right to lodge a complaint",
          blocks: [
            {
              type: "p",
              text: "You have the right to lodge a complaint with a data protection supervisory authority.",
            },
            {
              type: "p",
              text: "The supervisory authority generally responsible for private businesses and self-employed individuals in Bavaria is:",
            },
            {
              type: "p",
              text: "Bavarian State Office for Data Protection Supervision\nPromenade 18\n91522 Ansbach\nGermany",
            },
          ],
        },
        {
          heading: "12. Automated decision-making",
          blocks: [
            {
              type: "p",
              text: "This website does not use automated decision-making or profiling.",
            },
          ],
        },
        {
          heading: "13. Updates to this Privacy Policy",
          blocks: [
            {
              type: "p",
              text: "This Privacy Policy may be updated when the services used, the technical design of the website or the applicable legal requirements change.",
            },
          ],
        },
      ],
    },
  },
};

export const validLegalSlugs: Record<string, string[]> = {
  de: ["impressum", "datenschutz"],
  en: ["legal-notice", "privacy"],
};

export const legalSlugMap: Record<string, Record<string, string>> = {
  impressum: { de: "impressum", en: "legal-notice" },
  datenschutz: { de: "datenschutz", en: "privacy" },
  "legal-notice": { de: "impressum", en: "legal-notice" },
  privacy: { de: "datenschutz", en: "privacy" },
};
