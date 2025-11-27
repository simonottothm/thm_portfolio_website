"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Welche Tools nutzen Sie am liebsten und warum?",
    answer:
      "Für Performance-Marketing setze ich primär auf Meta Ads Manager, Google Ads und TikTok Ads Manager. Im Tracking-Bereich arbeite ich mit GA4, GTM und den nativen Pixel-Lösungen. Für Web-Development nutze ich Next.js mit TypeScript und Tailwind CSS, für schnelle Prototypen auch Webflow. Die Kombination aus diesen Tools ermöglicht mir, datengetrieben zu arbeiten und schnell zu iterieren.",
  },
  {
    question: "Wie gehen Sie beim Testen neuer Creatives vor?",
    answer:
      "Ich starte mit einer strukturierten Test-Phase: Zuerst definiere ich klare Hypothesen basierend auf bisherigen Daten oder Markt-Research. Dann erstelle ich 3-5 Creative-Varianten mit unterschiedlichen Ansätzen (z.B. verschiedene Hooks, Formate, Stile). Diese teste ich parallel in kleinen Budgets, um schnell zu lernen. Nach 3-5 Tagen wertet ich die ersten Signale aus und skaliere die besten Performer. Wichtig ist dabei, immer nur eine Variable zu testen, um klare Learnings zu ziehen.",
  },
  {
    question: "Was war eine wichtige Erkenntnis aus Meta-Kampagnen?",
    answer:
      "Eine zentrale Erkenntnis: Advantage+ Kampagnen funktionieren am besten, wenn man ihnen genug Budget und Zeit gibt, um zu lernen. Viele Marketer brechen zu früh ab oder geben zu wenig Budget. Außerdem ist die Creative-Qualität entscheidender als die Targeting-Optimierung – Meta's Algorithmus findet die richtige Audience, wenn die Creatives stark sind. Deshalb investiere ich viel Zeit in Creative-Testing und UGC-Strategien.",
  },
  {
    question: "Wie stellen Sie DSGVO-konformes Tracking sicher?",
    answer:
      "Ich setze auf Consent-First-Ansätze: Alle Tracking-Tools (GA4, Meta Pixel, TikTok Pixel) werden erst nach expliziter Einwilligung geladen. Dafür nutze ich Consent-Management-Plattformen oder eigene Lösungen. Die Datenschutzerklärung ist klar formuliert, und Nutzer können jederzeit widersprechen. Server-Side Tracking über GTM minimiert zudem Cookie-Abhängigkeiten. Wichtig ist auch, dass alle Datenverarbeitungen dokumentiert sind und Auftragsverarbeitungsverträge mit Dienstleistern bestehen.",
  },
  {
    question: "Wie sieht ein typischer 4-Wochen-Sprint aus?",
    answer:
      "Woche 1: Briefing, Analyse der aktuellen Performance, Hypothesen-Formulierung. Woche 2: Setup neuer Kampagnen/Creatives, Implementierung von Tracking-Anpassungen. Woche 3: Monitoring, erste Optimierungen basierend auf frühen Signalen. Woche 4: Auswertung, Reporting, Learnings-Dokumentation und Planung des nächsten Sprints. Dabei halte ich wöchentliche Check-ins mit dem Kunden, um transparent zu kommunizieren und schnell reagieren zu können.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

