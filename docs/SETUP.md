# Setup and Exact Claude Code Workflow

## 1. Voraussetzungen

- Node.js 20.9 oder neuer
- pnpm
- Git
- Claude Code

## 2. Claude Code installieren

macOS, Linux oder WSL:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

macOS mit Homebrew:

```bash
brew install --cask claude-code
```

Windows PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

## 3. Projekt erstellen

```bash
pnpm create next-app@latest laura-her-ai-studio --yes
cd laura-her-ai-studio
```

Die aktuellen Next.js-Defaults umfassen TypeScript, Tailwind CSS, ESLint, App Router und Turbopack.

## 4. Abhängigkeiten ergänzen

```bash
pnpm add motion lucide-react
```

Optional für Utility-Class-Merging:

```bash
pnpm add clsx tailwind-merge
```

## 5. Dateien kopieren

In das Projekt-Root:
```txt
CLAUDE.md
```

In `public/`:
```txt
public/images/laura-portrait.webp
public/laura-boentert-cv.pdf
public/images/og-image.jpg
```

Empfehlungen:
- Portrait als WebP, ungefähr 1600–2200 px Höhe
- Dateigröße möglichst unter 500 KB
- CV vor Veröffentlichung ohne private Telefonnummer exportieren
- OG-Bild: 1200 x 630 px

## 6. Inhalte einfügen

Kopiere `site-content.ts` nach:

```txt
src/data/site-content.ts
```

## 7. Git initialisieren

```bash
git init
git add .
git commit -m "chore: initialize Laura Her AI Studio website"
```

## 8. Claude Code starten

```bash
claude
```

Dann den Master-Prompt aus `PROMPTS.md` einfügen.

## 9. Lokal testen

```bash
pnpm dev
```

Website:
```txt
http://localhost:3000
```

## 10. Qualitätschecks

```bash
pnpm lint
pnpm build
```

Da aktuelle Next.js-Versionen den Linter nicht automatisch im Build ausführen, immer beide Befehle separat ausführen.

## 11. Empfohlene Reihenfolge

1. Master-Prompt
2. Design System
3. Hero
4. Expertise Scroll Story
5. CV und Proof
6. Motion Polish
7. Responsive / Accessibility / Performance
8. SEO
9. Final QA

Nach jeder größeren Phase:

```bash
git add .
git commit -m "feat: describe completed phase"
```

## 12. Deployment

Einfachste Option:
- GitHub Repository erstellen
- Projekt pushen
- in Vercel importieren
- Domain verbinden

Vor dem Launch ergänzen:
- echte Domain in der zentralen Site-Konfiguration
- Impressum
- Datenschutzerklärung
- Favicon
- finales OG-Bild
- Analytics nur nach bewusster Auswahl und Consent-Prüfung

## 13. Asset-Checkliste

Pflicht:
- [ ] Portrait
- [ ] CV ohne Telefonnummer
- [ ] finale E-Mail
- [ ] LinkedIn-Link
- [ ] Domain

Optional:
- [ ] 2–3 eigene Projektbilder
- [ ] Screenshot eines AI-Workflows
- [ ] Her AI Studio Club Visual
- [ ] Logo-Monogramm
- [ ] Social Preview
