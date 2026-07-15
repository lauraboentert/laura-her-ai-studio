"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/cn";

interface Props {
  locale: Locale;
  navigation: readonly { label: string; href: string }[];
  ctaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  menuLabel: string;
}

export function FloatingNav({
  locale,
  navigation,
  ctaLabel,
  openMenuLabel,
  closeMenuLabel,
  menuLabel,
}: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-1/2 z-50 w-[calc(100%-32px)] max-w-5xl -translate-x-1/2 transition-all duration-300">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 sm:px-5 py-2 sm:py-3 transition-all duration-300",
            scrolled
              ? "glass-card shadow-[0_8px_32px_rgba(65,43,49,0.14)]"
              : "bg-white/20 backdrop-blur-sm border border-white/30"
          )}
          aria-label="Main navigation"
        >
          <a
            href={`/${locale}`}
            className="text-sm font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-label="Laura Böntert | Her AI Studio — home"
          >
            LB{" "}
            <span className="text-ink-soft font-normal">/ HER AI STUDIO</span>
          </a>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-ink-soft hover:text-ink hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <LanguageSwitcher locale={locale} />
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex min-h-[36px] items-center rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {ctaLabel}
            </a>
            <button
              className="md:hidden flex size-11 items-center justify-center rounded-full hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              onClick={() => setMenuOpen(true)}
              aria-label={openMenuLabel}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="size-5 text-ink" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
          aria-label="Navigation menu"
        >
          <div
            className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-canvas p-8 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">{menuLabel}</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex size-11 items-center justify-center rounded-full hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                aria-label={closeMenuLabel}
              >
                <X className="size-5 text-ink" aria-hidden="true" />
              </button>
            </div>
            <ul className="flex flex-col gap-1" role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-ink hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <LanguageSwitcher locale={locale} />
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
