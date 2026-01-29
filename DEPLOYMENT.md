# Deployment-Anleitung

## Option 1: Vercel (Empfohlen - Einfachste Methode)

### Via Vercel Dashboard (ohne CLI)

1. **Repository zu GitHub/GitLab pushen:**
   ```bash
   # Falls noch nicht geschehen, Remote hinzufügen
   git remote add origin <IHR-REPO-URL>
   git branch -M main
   git push -u origin main
   ```

2. **Auf Vercel deployen:**
   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Melden Sie sich an (kostenlos mit GitHub-Account)
   - Klicken Sie auf "Add New Project"
   - Wählen Sie Ihr Repository aus
   - Vercel erkennt automatisch Next.js
   - Klicken Sie auf "Deploy"
   - Fertig! Ihre Website ist live

### Via Vercel CLI

```bash
# Vercel CLI installieren (falls nicht vorhanden)
npm i -g vercel

# Im Projektverzeichnis
cd simon-otto-portfolio

# Deployment starten
vercel

# Folgen Sie den Anweisungen:
# - Login bei Vercel
# - Projekt bestätigen
# - Deployment-Optionen wählen
```

## Option 2: Netlify

1. Repository zu GitHub/GitLab pushen
2. Auf [netlify.com](https://netlify.com) anmelden
3. "Add new site" → "Import an existing project"
4. Repository auswählen
5. Build-Einstellungen:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

## Option 3: Andere Plattformen

### Docker (für eigene Server)

Erstellen Sie eine `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Node.js Server

```bash
npm run build
npm start
```

## Nach dem Deployment

1. **Umgebungsvariablen** (falls benötigt) in Vercel/Netlify Dashboard setzen
2. **Custom Domain** konfigurieren (optional)
3. **OG-Image** hinzufügen: `/public/og.jpg` (1200x630px)
4. **Favicon** hinzufügen: `/app/favicon.ico`

## Wichtige Hinweise

- ✅ Build wurde erfolgreich getestet
- ✅ Alle Seiten sind statisch generiert (optimale Performance)
- ⚠️ Platzhalter-Daten (Kontakt, USt-ID) vor Deployment ersetzen
- ⚠️ OG-Image und Favicon noch hinzufügen

