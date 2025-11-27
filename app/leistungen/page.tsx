import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Music,
  Search,
  Globe,
  TrendingUp,
  BarChart3,
  FileText,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Meta Ads (Facebook/Instagram)",
    description: "Testen, skalieren, ROAS sichern.",
    icon: Facebook,
    details: [
      "Advantage+ Kampagnen für maximale Performance",
      "Creative Testing mit strukturierten Test-Phasen",
      "Audience-Optimierung basierend auf Performance-Daten",
      "Budget-Optimierung und Skalierung profitabler Kampagnen",
    ],
    useCases: [
      "E-Commerce: ROAS-Optimierung für Online-Shops",
      "Lead-Gen: Kostenoptimierte Lead-Generierung",
      "Brand Awareness: Reichweiten-Kampagnen mit Performance-Fokus",
    ],
  },
  {
    title: "TikTok Ads",
    description: "Creative-First, schnelles Iterieren.",
    icon: Music,
    details: [
      "UGC-Strategien für authentische Creatives",
      "Trend-basierte Creative-Entwicklung",
      "Rapid Testing für schnelle Learnings",
      "Community-basierte Targeting-Ansätze",
    ],
    useCases: [
      "D2C-Brands: Junge Zielgruppen erreichen",
      "App-Installationen: Performance-optimierte App-Kampagnen",
      "E-Commerce: TikTok Shop Integration",
    ],
  },
  {
    title: "Google Ads",
    description: "Intent abholen, effizient ausspielen.",
    icon: Search,
    details: [
      "Search & Shopping Kampagnen",
      "Performance Max für maximale Reichweite",
      "Keyword-Optimierung und Bidding-Strategien",
      "Landingpage-Optimierung für bessere Quality Scores",
    ],
    useCases: [
      "E-Commerce: Shopping-Kampagnen optimieren",
      "Lead-Gen: Search-Kampagnen für qualifizierte Leads",
      "Local Business: Lokale Suche und Maps-Optimierung",
    ],
  },
  {
    title: "Landingpages/Websites",
    description: "Schnell, clean, konvertierend.",
    icon: Globe,
    details: [
      "Next.js & Webflow für schnelle Umsetzung",
      "Mobile-First Design für beste UX",
      "Conversion-Optimierung durch A/B-Tests",
      "Performance-Optimierung (Ladezeiten, Core Web Vitals)",
    ],
    useCases: [
      "Campaign Landingpages: Optimiert für Paid Traffic",
      "E-Commerce: Online-Shops mit Fokus auf Conversion",
      "Lead-Gen: Formular-optimierte Landingpages",
    ],
  },
  {
    title: "CRO",
    description: "Hypothesengetrieben, A/B-Tests.",
    icon: TrendingUp,
    details: [
      "Hypothesen-Formulierung basierend auf Daten",
      "A/B-Testing mit klaren Erfolgsmetriken",
      "Datengetriebene Optimierung",
      "Reporting und Learnings-Dokumentation",
    ],
    useCases: [
      "E-Commerce: Checkout-Optimierung",
      "Lead-Gen: Formular-Optimierung",
      "SaaS: Onboarding-Funnel-Optimierung",
    ],
  },
  {
    title: "Tracking/Analytics",
    description: "GA4, GTM, Pixel – sauber & DSGVO-konform (Consent-First).",
    icon: BarChart3,
    details: [
      "GA4 Setup und Konfiguration",
      "GTM Implementation für flexibles Tracking",
      "DSGVO-konforme Consent-Lösungen",
      "Server-Side Tracking für bessere Datenqualität",
    ],
    useCases: [
      "E-Commerce: Conversion-Tracking optimieren",
      "Lead-Gen: Lead-Tracking und Attribution",
      "Multi-Channel: Cross-Platform Tracking",
    ],
  },
  {
    title: "Content/Organic",
    description: "Strukturierter Content-Plan, Auswertung.",
    icon: FileText,
    details: [
      "Content-Strategie entwickeln",
      "SEO-Optimierung für bessere Rankings",
      "Performance-Tracking und Auswertung",
      "Content-Kalender und Planung",
    ],
    useCases: [
      "Blog-Optimierung: SEO-optimierte Artikel",
      "Social Media: Content-Strategie für Organics",
      "E-Commerce: Produktbeschreibungen optimieren",
    ],
  },
];

export default function Leistungen() {
  return (
    <Section>
      <PageHeader
        title="Leistungen"
        description="Von Performance-Marketing bis Web-Development – alles aus einer Hand"
      />

      <div className="space-y-12">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center mr-6 flex-shrink-0">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent-start mr-2" />
                      Leistungsdetails
                    </h3>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 text-accent-start">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-accent-start mr-2" />
                      Typische Use-Cases
                    </h3>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase) => (
                        <li
                          key={useCase}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 text-accent-start">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

