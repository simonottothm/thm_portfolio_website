# Simon Otto Portfolio

Portfolio-Website für Simon Otto – Performance Marketing & Web-Development

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Custom Color Palette)
- **shadcn/ui** (UI-Komponenten)
- **Framer Motion** (Animationen)
- **Lucide Icons** (Icons)
- **React Hook Form** + **Zod** (Formular-Validierung)

## Features

- ✅ Responsive Design (Mobile-First)
- ✅ Accessibility (a11y-konform)
- ✅ SEO-optimiert (Meta-Tags, Open Graph)
- ✅ Animations (Framer Motion)
- ✅ Kontaktformular mit Validierung
- ✅ Alle rechtlichen Seiten (Impressum, Datenschutz)
- ✅ Deutsche Inhalte (Sie-Form, professionell)

## Installation

```bash
# Dependencies installieren
npm install

# Development-Server starten
npm run dev

# Production-Build erstellen
npm run build

# Production-Server starten
npm start
```

Die Website läuft dann unter [http://localhost:3000](http://localhost:3000).

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
│   ├── impressum/         # Impressum
│   └── datenschutz/      # Datenschutz
├── components/            # React-Komponenten
│   ├── ui/               # shadcn/ui Komponenten
│   ├── header.tsx        # Header mit Navigation
│   ├── footer.tsx        # Footer
│   ├── hero.tsx          # Hero-Sektion
│   ├── services-grid.tsx # Services-Grid
│   └── ...               # Weitere Komponenten
├── lib/                  # Utilities
│   └── utils.ts          # Helper-Funktionen
└── public/               # Statische Assets
```

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

Alle Inhalte sind in den jeweiligen Seiten-Komponenten unter `app/` definiert. Platzhalter-Daten (Kontaktdaten, Projekte, etc.) sollten durch echte Daten ersetzt werden.

### Kontaktformular

Das Kontaktformular ist derzeit clientseitig implementiert und zeigt nach dem Absenden einen Erfolgs-Toast. Für echten E-Mail-Versand müsste ein Backend-Service (z. B. Resend, SendGrid) integriert werden.

## Deployment

### Vercel (Empfohlen)

1. Repository zu GitHub/GitLab pushen
2. Auf [Vercel](https://vercel.com) einloggen
3. Projekt importieren
4. Automatisches Deployment

### Andere Plattformen

Die Website kann auf jeder Plattform deployed werden, die Next.js unterstützt (Netlify, AWS, etc.).

## Wichtige Hinweise

- **Platzhalter-Daten**: Kontaktdaten, USt-ID, Hosting-Informationen in Impressum/Datenschutz ersetzen
- **OG-Image**: Platzhalter-OG-Image (`/public/og.jpg`) durch echtes Bild ersetzen
- **Favicon**: Favicon in `app/` hinzufügen
- **Tracking**: Derzeit kein Tracking aktiv (Consent-First-Ansatz in Datenschutz dokumentiert)

## License

Privat – Alle Rechte vorbehalten.

