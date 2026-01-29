# Simon Otto Portfolio

Portfolio-Website für Simon Otto – Performance Marketing & Web-Development

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (Custom Color Palette)
- **shadcn/ui** (UI-Komponenten)
- **Framer Motion** (Animationen)
- **Lucide React** (Icons)
- **React Hook Form** + **Zod** (Formular-Validierung)
- **Radix UI** (Accessible UI Primitives)

## Projektstruktur

```
simon-otto-portfolio/
├── app/                    # Next.js App Router Seiten
│   ├── page.tsx           # Startseite
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Globale Styles
│   ├── ueber-mich/       # Über mich Seite
│   ├── leistungen/       # Leistungen Seite
│   ├── projekte/         # Projekte Seite
│   ├── vita/             # Vita Seite
│   ├── buchung/          # Buchung Seite
│   ├── kontakt/          # Kontakt Seite
│   │   └── danke/        # Danke-Seite nach Formular
│   ├── impressum/         # Impressum
│   └── datenschutz/      # Datenschutz
├── components/            # React-Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   └── ...               # Feature-Komponenten
├── data/                  # Statische Daten
│   └── projects.ts       # Projekt-Daten
├── types/                 # TypeScript Type-Definitionen
│   ├── project.ts        # Project-Interfaces
│   └── skill.ts          # Skill-Interfaces
├── lib/                  # Utilities
│   └── utils.ts          # Helper-Funktionen (cn, etc.)
└── public/               # Statische Assets
    └── assets/           # Bilder und Medien
```

## Setup

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Development-Server starten
npm run dev

# Production-Build erstellen
npm run build

# Production-Server starten
npm start

# Linting
npm run lint
```

Die Website läuft dann unter [http://localhost:3000](http://localhost:3000).

## Code-Style & Formatierung

Das Projekt nutzt:

- **Prettier** (`.prettierrc`) für Code-Formatierung
- **ESLint** (`.eslintrc.json`) mit Next.js Config
- **EditorConfig** (`.editorconfig`) für konsistente Editor-Einstellungen

### Formatierung ausführen

```bash
# Prettier (falls als Script hinzugefügt)
npx prettier --write .

# ESLint
npm run lint
```

## Architektur-Notizen

### Komponenten-Struktur

- **UI-Komponenten** (`components/ui/`): Wiederverwendbare Basis-Komponenten (shadcn/ui)
- **Feature-Komponenten** (`components/`): Seiten-spezifische Komponenten
- **Types** (`types/`): Zentrale TypeScript-Definitionen
- **Data** (`data/`): Statische Daten (Projekte, etc.)

### Import-Reihenfolge

1. React/Next.js Imports
2. Externe Libraries (framer-motion, lucide-react, etc.)
3. Interne Imports (`@/components`, `@/lib`, `@/types`, `@/data`)
4. Relative Imports (falls vorhanden)

### State Management

- Lokaler State mit `useState` für UI-State
- React Hook Form für Formular-State
- SessionStorage für temporäre Formular-Daten (Danke-Seite)

### Animationen

- Framer Motion für alle Animationen
- Konsistente Animation-Patterns:
  - `initial`, `animate`, `transition` für einfache Animationen
  - `whileInView` für Scroll-Animationen
  - `viewport={{ once: true }}` für Performance

## Customization

### Farben

Die Farbpalette kann in `tailwind.config.ts` angepasst werden:

```typescript
colors: {
  primary: {
    DEFAULT: "#0B1C2E",
    700: "#11263D",
  },
  accent: {
    start: "#0B66FF",
    end: "#6B9CFF",
  },
  // ...
}
```

### Inhalte

- **Projekte**: `data/projects.ts`
- **Skills**: `app/ueber-mich/page.tsx` (könnte in `data/skills.ts` extrahiert werden)
- **Kontaktdaten**: `app/kontakt/page.tsx`

## Deployment

### Vercel (Empfohlen)

1. Repository zu GitHub/GitLab pushen
2. Auf [Vercel](https://vercel.com) einloggen
3. Projekt importieren
4. Automatisches Deployment

Siehe auch `DEPLOYMENT.md` für detaillierte Anleitung.

## Wichtige Hinweise

- **Platzhalter-Daten**: Kontaktdaten, USt-ID, Hosting-Informationen in Impressum/Datenschutz ersetzen
- **OG-Image**: Platzhalter-OG-Image (`/public/og.jpg`) durch echtes Bild ersetzen
- **Favicon**: Favicon in `app/` hinzufügen
- **Tracking**: Derzeit kein Tracking aktiv (Consent-First-Ansatz in Datenschutz dokumentiert)

## Notes

### Design-Entscheidungen

- **Lava-Lamp Animation**: Hero-Sektion nutzt animierte Gradient-Blobs für visuellen Effekt
- **Multi-Step Form**: Kontaktformular in 3 Schritte aufgeteilt für bessere UX
- **Modal-Dialog**: Case Studies öffnen in Modal mit detaillierten Informationen

### Technische Entscheidungen

- **Client Components**: Viele Komponenten sind `"use client"` wegen Framer Motion und Interaktivität
- **Type Safety**: Strikte TypeScript-Konfiguration, Types in separaten Dateien
- **Data Separation**: Statische Daten in `data/` Ordner für bessere Wartbarkeit

## License

Privat – Alle Rechte vorbehalten.
