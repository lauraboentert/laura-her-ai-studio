import type { SiteDict } from "../config";

const en: SiteDict = {
  navigation: [
    { label: "Expertise", href: "#expertise" },
    { label: "Journey", href: "#journey" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  nav: {
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuLabel: "Menu",
  },
  hero: {
    eyebrow: "LAURA BÖNTERT · HER AI STUDIO",
    titleBefore: "AI meets",
    titleItalic: "commercial",
    titleAfter: "execution.",
    description:
      "I build AI-powered digital marketing, automation and commerce systems — combining founder speed, enterprise execution and more than a decade of digital growth experience.",
    descriptionMobile:
      '„I build AI-powered systems for digital marketing, automation and commerce — efficient, scalable and practical.“',
    primaryCta: { label: "Explore my expertise", href: "#expertise" },
    secondaryCta: { label: "Download CV", href: "/CV_Laura-Boentert.pdf" },
    tags: ["AI Digital Marketing", "Workflow Automation", "AI Commerce", "GTM & Leadership"],
    note: "Munich-based · Working internationally",
    scrollLabel: "Scroll to expertise",
  },
  positioning: {
    label: "TWO SIDES. ONE ADVANTAGE.",
    titleBefore: "Business operator by experience.",
    titleItalic: "AI builder",
    titleAfter: "by conviction.",
    description:
      "My work sits where strategy meets execution. I have built and exited a digital agency, launched and scaled an e-commerce marketplace, worked across international fashion and retail, and now lead commercial teams and P&L responsibilities. Her AI Studio brings that operating experience into practical AI systems for modern businesses.",
    sides: [
      {
        title: "Business Operator",
        items: [
          "Go-to-market strategy",
          "P&L and revenue forecasting",
          "Team leadership",
          "Partner negotiations",
          "E-commerce and omnichannel execution",
        ],
      },
      {
        title: "AI Builder",
        items: [
          "AI content and campaign workflows",
          "No-code and API-based automations",
          "AI-supported commerce operations",
          "Tool evaluation and workflow design",
          "Community-led experimentation",
        ],
      },
    ],
  },
  expertiseSection: {
    label: "EXPERTISE",
    titleBefore: "Three ways AI creates",
    titleItalic: "business momentum.",
    titleAfter: "",
  },
  expertise: [
    {
      number: "01",
      slug: "ai-marketing",
      title: "AI Digital Marketing Systems",
      headline: "Create more. Keep the brand human.",
      description:
        "I design repeatable AI workflows for campaign concepts, content production and digital marketing operations — so teams move faster without losing quality, tone or strategic focus.",
      deliverables: [
        "AI-assisted campaign and content workflows",
        "Brand voice and prompt systems",
        "Content repurposing pipelines",
        "Review and quality-control processes",
      ],
      outcome: "Less blank-page work. More consistent execution.",
    },
    {
      number: "02",
      slug: "automation",
      title: "Workflow Automation",
      headline: "Remove repetitive work from the growth engine.",
      description:
        "I map manual processes and turn the right ones into reliable automations across digital marketing, CRM, reporting and internal operations.",
      deliverables: [
        "Workflow and process audit",
        "Automation concepts and prototypes",
        "CRM and tool integrations",
        "Human-in-the-loop approval systems",
      ],
      outcome: "Automation where it helps. Human judgment where it matters.",
    },
    {
      number: "03",
      slug: "ai-commerce",
      title: "AI Commerce",
      headline: "Build a smarter commerce operation.",
      description:
        "I connect AI with real e-commerce needs — from product content and merchandising to customer journeys, campaign planning and operational efficiency.",
      deliverables: [
        "Product content workflows",
        "AI-supported merchandising concepts",
        "Customer journey and retention use cases",
        "Shopify and WooCommerce workflow design",
      ],
      outcome: "Commerce expertise first. AI applied with purpose.",
    },
  ],
  proofSection: {
    label: "Built from real operating experience.",
  },
  proof: [
    { value: "10+", label: "years international digital experience" },
    { value: "9", label: "direct reports in current leadership role" },
    { value: "3", label: "commercial verticals with P&L responsibility" },
    { value: "10", label: "people in a founder-led cross-functional team" },
    { value: "20+", label: "websites and online shops delivered per year" },
    { value: "6-figure", label: "marketplace and retail business built" },
  ],
  journeySection: {
    label: "SELECTED JOURNEY",
    titleBefore: "From digital marketing to",
    titleItalic: "founder-led",
    titleAfter: "AI execution.",
    downloadCv: "Download the full CV",
  },
  journey: [
    {
      company: "PAYBACK GmbH",
      role: "Team Lead Key Account — Aftersales",
      period: "2025 — today",
      description:
        "Leading nine Key Account Managers across three verticals, with P&L ownership, revenue forecasting, partner negotiations and cross-functional commercial execution.",
    },
    {
      company: "Her AI Studio Club",
      role: "Founder",
      period: "Ongoing",
      description:
        "Building a practitioner community for hands-on AI testing, workflow building and shared reviews of real-world outputs.",
    },
    {
      company: "BRIDECYCLE",
      role: "Founder & CEO",
      period: "2021 — ongoing wind-down",
      description:
        "Built a digital marketplace and premium pop-up retail concept for bridal fashion, generated six-figure annual revenue and led a ten-person cross-functional team.",
    },
    {
      company: "Trust in Digital",
      role: "Founder & CEO",
      period: "2018 — 2023 · Exited",
      description:
        "Founded and scaled a Shopify and WooCommerce development agency delivering more than 20 websites and online shops per year. Sold the business in 2023.",
    },
    {
      company: "Ralph Lauren",
      role: "Senior E-Commerce & Digital Marketing Manager",
      period: "2016 — 2021",
      description:
        "Worked across European wholesale e-commerce and APAC direct-to-consumer growth, including the launch of RalphLauren.jp in Japan.",
    },
    {
      company: "White Communications",
      role: "Digital Marketing Manager",
      period: "2014 — 2015",
      description:
        "Managed digital accounts for international fashion and luxury brands and was named Employee of the Year in 2015.",
    },
  ],
  founderDna: {
    label: "FOUNDER DNA",
    titleBefore: "AI workflows that support teams",
    titleItalic: "and make growth scalable.",
    description:
      "As a founder with extensive experience in e-commerce and digital marketing, I understand the operational reality behind growth. I know where teams lose time and how AI can support them effectively — through consistent workflows, scalable automation and systems that integrate reliably into day-to-day operations.",
    approachLabel: "How I approach every engagement",
    principles: [
      "Start with the business problem",
      "Prototype close to the real workflow",
      "Build for adoption, not presentation",
    ],
  },
  about: {
    titleBefore: "Strategy, systems and a",
    titleItalic: "bias for action.",
    description:
      "I am a Munich-based GTM professional, serial founder and AI community builder with international experience across fashion, e-commerce, digital marketing and commercial leadership. I combine structured problem solving with the pragmatism of someone who has built companies and teams herself.",
    secondary:
      "Through Her AI Studio, I explore how AI changes the way businesses create, operate and grow — always with a focus on practical implementation.",
    badges: [
      "McKinsey Academy Forward Alumni",
      "German · Native",
      "English · C1",
      "Munich · Germany",
    ],
    altText: "Portrait of Laura Böntert",
  },
  contact: {
    label: "LET'S BUILD SOMETHING USEFUL.",
    titleBefore: "AI should create",
    titleItalic: "business momentum.",
    titleAfter: "",
    description:
      "For consulting, collaboration, speaking or practical AI projects, get in touch.",
    primaryCta: {
      label: "Email Laura",
      href: "mailto:l.boentert@outlook.de",
    },
    secondaryCta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/laura-b%C3%B6ntert-75462545/",
    },
    substackCta: {
      label: "Read on Substack",
      href: "https://substack.com/@laurabntert",
      ariaLabel: "Open Laura Böntert on Substack",
    },
  },
  footer: {
    downloadCv: "Download CV",
    imprint: "Imprint",
    privacy: "Privacy",
    tagline: "Built with clarity, curiosity and AI.",
  },
  meta: {
    title: "Laura Böntert | Her AI Studio — AI Digital Marketing, Automation & Commerce",
    description:
      "Laura Böntert combines founder experience, GTM leadership and e-commerce expertise to build practical AI systems for digital marketing, automation and commerce.",
    ogTitle: "AI meets commercial execution.",
    ogDescription:
      "AI digital marketing, workflow automation and AI commerce — built with founder speed and enterprise discipline.",
  },
};

export default en;
