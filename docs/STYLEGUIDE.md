# Styleguide — Laura Böntert | Her AI Studio

## 1. Markenidee

**Positionierung:**  
Eine persönliche Portfolio- und Business-Website, die zwei Seiten glaubwürdig verbindet:

1. Laura als erfahrene GTM-, E-Commerce- und Führungspersönlichkeit
2. Her AI Studio als moderne AI-Business-Expertise für Marketing, Automatisierung und Commerce

**Leitsatz:**  
**Commercial clarity meets creative AI.**

**Markenattribute:**
- ruhig statt laut
- premium statt verspielt
- feminin, aber nicht „girly“
- technisch, aber menschlich
- strategisch, aber umsetzungsnah
- founder-led und glaubwürdig
- editorial und hochwertig

## 2. Visuelle Richtung

Apple-inspiriertes Interface mit:
- großen, klaren Headlines
- viel Weißraum
- halbtransparenten Glasflächen
- subtiler Tiefe und Licht
- sanften Butter-Yellow-, Blush- und Rosa-Verläufen
- einzelnen dunklen Sektionen als Kontrast
- abstrakten, hochwertigen 3D- oder Lichtobjekten
- reduzierten Scroll-Animationen

Nicht nachbauen:
- keine exakte Kopie der Referenzseite
- keine übernommenen Assets, Texte oder Layoutdetails
- keine generische „AI-Cyberpunk“-Optik
- keine Roboterköpfe, Gehirne, Neon-Netzwerke oder Stock-Illustrationen
- kein übermäßiges Pink
- keine Scroll-Jacking-Effekte

## 3. Farbpalette

### Hauptfarben

```css
:root {
  --ink: #171513;
  --ink-soft: #4A4540;

  --canvas: #F7F5F0;
  --canvas-warm: #FFFBEF;
  --white: #FFFFFF;

  --butter: #F3E39B;
  --butter-light: #FFF4BF;

  --blush: #F4C4D2;
  --rose: #E999B1;
  --rose-deep: #A94768;

  --lavender-mist: #E9E2F8;

  --glass-light: rgba(255, 255, 255, 0.56);
  --glass-light-strong: rgba(255, 255, 255, 0.76);
  --glass-dark: rgba(24, 21, 20, 0.58);

  --border-light: rgba(255, 255, 255, 0.66);
  --border-dark: rgba(255, 255, 255, 0.14);

  --shadow-soft: 0 24px 80px rgba(65, 43, 49, 0.12);
  --shadow-card: 0 18px 50px rgba(65, 43, 49, 0.10);
}
```

### Signature Gradient

```css
background:
  radial-gradient(circle at 18% 20%, rgba(243, 227, 155, .88), transparent 30%),
  radial-gradient(circle at 80% 24%, rgba(244, 196, 210, .82), transparent 32%),
  radial-gradient(circle at 66% 84%, rgba(233, 226, 248, .72), transparent 28%),
  #F7F5F0;
```

### Dark AI Gradient

```css
background:
  radial-gradient(circle at 70% 35%, rgba(233, 153, 177, .30), transparent 28%),
  radial-gradient(circle at 35% 75%, rgba(243, 227, 155, .18), transparent 32%),
  #11100F;
```

### Kontrastregeln

- Fließtext auf hellen Flächen: `--ink`
- Sekundärtext: `--ink-soft`
- Butter Yellow niemals als kleiner Text auf Weiß verwenden
- Rosa primär als Fläche, Glow, Linie oder Akzent einsetzen
- Buttons müssen klaren Hell-Dunkel-Kontrast haben
- Dunkle Sektionen maximal 25–35 % der gesamten Seite

## 4. Typografie

### Primärschrift

**Geist Sans**  
Einsatz für Navigation, Headlines, Body, Buttons und Labels.

### Editorial Accent

**Instrument Serif Italic**  
Nur für einzelne Wörter oder kurze Aussagen, zum Beispiel:
- “human”
- “commercial”
- “built to work”
- “from idea to execution”

Nicht für längere Texte verwenden.

### Typografische Skala

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;

--display-xl: clamp(4rem, 9vw, 9rem);
--display-lg: clamp(3rem, 6.5vw, 6.5rem);
--display-md: clamp(2.25rem, 4.5vw, 4.75rem);
--heading-card: clamp(1.5rem, 2.5vw, 2.5rem);
```

### Regeln

- Hero-H1: Zeilenhöhe 0.9–0.98
- Große Headlines: `letter-spacing: -0.05em`
- Body: 1.55–1.7 Zeilenhöhe
- Section Labels: Uppercase, 0.12–0.18em Tracking
- Pro Textzeile maximal ca. 65–72 Zeichen
- Wenige Schriftgewichte: 400, 500, 600

## 5. Layoutsystem

- Mobile-first
- Maximalbreite: 1280–1360 px
- Standard-Container: `min(100% - 32px, 1280px)`
- Desktop-Raster: 12 Spalten
- Tablet: 8 Spalten
- Mobile: 4 Spalten
- Vertikaler Abstand zwischen Hauptsektionen: 120–200 px
- Hero: mindestens `100svh`
- Narrative Scroll-Sektion: 140–180svh
- CV-Sektion: klar, ruhig, leicht scanbar

### Responsive Breakpoints

```txt
sm: 640 px
md: 768 px
lg: 1024 px
xl: 1280 px
2xl: 1536 px
```

## 6. Formensprache

### Radius

- Pills: 999 px
- Buttons: 999 px oder 18 px
- Standardkarte: 28 px
- Große Featurekarte: 40 px
- Hero-Media: 48 px

### Glass Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.66);
  box-shadow: 0 24px 80px rgba(65, 43, 49, 0.12);
  backdrop-filter: blur(28px) saturate(135%);
  -webkit-backdrop-filter: blur(28px) saturate(135%);
}
```

Fallback ohne Backdrop Filter:
```css
@supports not (backdrop-filter: blur(1px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.92);
  }
}
```

## 7. Komponenten

### Floating Navigation

- schwebende Glas-Pill
- Logo links: `LB / HER AI STUDIO`
- Links: Expertise, Journey, About, Contact
- rechts kleiner CTA: `Let’s talk`
- auf Mobile: kompakter Menü-Button mit zugänglichem Drawer
- kein dauerhaft großes Headerband

### Hero

Desktop:
- linke 7 Spalten: Positionierung, H1, Text, CTAs
- rechte 5 Spalten: Portrait in Glasrahmen plus abstrakter Lichtkörper
- kleine Trust-Pills unterhalb der Copy
- dezente Scroll-Aufforderung

Hero-Headline:
**AI meets commercial execution.**

Alternative:
**Building smarter growth with AI.**

### Expertise Cards

Drei große Karten:
1. AI Marketing Systems
2. Workflow Automation
3. AI Commerce

Jede Karte enthält:
- Nummer
- klare Outcome-Headline
- kurze Beschreibung
- 3 konkrete Deliverables
- kleines visuelles Interface- oder Workflow-Motiv
- keinen erfundenen KPI

### CV / Journey

- keine klassische PDF-Liste über die ganze Seite
- visuelle Timeline mit 5–6 Stationen
- wichtigste Stationen größer hervorheben
- vollständiger CV als Download
- Desktop: zweispaltig
- Mobile: klare vertikale Timeline

### Proof Strip

Nur belegbare Werte:
- 10+ years international experience
- 9 direct reports
- 3 business verticals
- 10-person founder-led team
- 20+ websites and shops per year
- six-figure business built

Nicht verwenden:
- erfundene Conversion-Uplifts
- erfundene Kundenlogos
- erfundene Testimonials
- „trusted by 10k+“
- allgemeine Fantasie-KPIs

### Buttons

Primary:
- dunkler Hintergrund
- helle Schrift
- kleiner Arrow-Icon
- leichtes Scale- und Glow-Feedback

Secondary:
- transparent / glass
- dunkle Schrift
- 1 px Border

## 8. Bildwelt

### Portrait

- Schwarz-Weiß oder sehr entsättigt
- cleaner Hintergrund
- leichte Körnung
- hochwertiger Crop
- Blickrichtung idealerweise zur Hero-Copy
- auf Mobile zentraler Crop

### Abstrakte AI Visuals

Motive:
- transluzente Schleifen
- Lichtbänder
- Glasformen
- schwebende Kugeln
- fließende Datenlinien
- matte Metall- und Glasoberflächen

Farben:
- Butter Yellow
- Blush Pink
- warme weiße Highlights
- sehr dunkler, fast schwarzer Hintergrund für Kontrastsektionen

Keine Assets der Referenzseite übernehmen.

## 9. Motion System

### Grundprinzip

Motion unterstützt die Hierarchie, nicht die Show.

### Erlaubte Effekte

1. **Page Intro**
   - Opacity 0 → 1
   - Y 24 px → 0
   - 700–900 ms
   - gestaffelt in 80–120 ms

2. **Hero Parallax**
   - abstraktes Objekt bewegt sich maximal 8–12 %
   - Portrait maximal 3–5 %
   - auf Mobile deaktivieren

3. **Scroll Reveal**
   - Opacity + Y
   - `once: true`
   - keine Wiederholung beim Hochscrollen

4. **Sticky Expertise Story**
   - linke Textspalte sticky
   - rechts wechseln die drei Expertise-Karten
   - weiche Crossfades
   - keine horizontale Scrollpflicht

5. **Timeline**
   - Linie füllt sich mit Scrollfortschritt
   - Timelinepunkte werden aktiv
   - Text bleibt statisch und lesbar

6. **Microinteractions**
   - Button-Pfeil 3–5 px
   - Card-Lift maximal 4–6 px
   - Border-Glow subtil
   - kein aggressives 3D-Tilt auf Touch-Geräten

### Performance

- primär `transform` und `opacity` animieren
- keine großen Blur-Werte pro Frame animieren
- keine Layout-Eigenschaften wie `top`, `left`, `width` animieren
- `useReducedMotion` berücksichtigen
- alle Animationen ohne Motion verständlich lassen
- keine automatisch laufenden Hintergrundvideos

## 10. Tonalität

### Stimme

- selbstbewusst
- klar
- konkret
- warm
- kein AI-Hype
- keine Buzzword-Ketten
- kein „revolutionary“, „game-changing“ oder „disruptive“ ohne Beleg

### Copy-Muster

Gut:
- “I turn AI experiments into workflows teams can actually use.”
- “From campaign creation to operational automation.”
- “Built with founder speed and enterprise discipline.”

Vermeiden:
- “Unlock the infinite power of AI.”
- “Transform your future today.”
- “Cutting-edge solutions for every business.”
