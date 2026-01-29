import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    employer: "E-Com Labs GmbH",
    client: "UrbanWear",
    industry: "Fashion D2C",
    period: "Q1/2025",
    goal: "ROAS > 3",
    measures: "Meta/TikTok Creatives + LP-Test",
    kpis: "ROAS 1,9 → 3,2; CPA −28%",
    outcome: "Skalierung +30% Spend bei Profitabilität",
    tags: ["Meta Ads", "CRO", "E-Com", "D2C"],
    problem:
      "UrbanWear hatte Schwierigkeiten, profitable Skalierung zu erreichen. Der ROAS lag bei 1,9 und stagnierte trotz steigendem Budget. Die Creative-Performance war inkonsistent und Landingpages konvertierten unterdurchschnittlich.",
    solution:
      "Implementierung eines strukturierten Creative-Testing-Frameworks mit Fokus auf UGC-Content. Parallel A/B-Tests für Landingpages mit datengetriebenen Hypothesen. Optimierung der Advantage+ Kampagnen mit granularer Audience-Segmentierung.",
    learnings: [
      "UGC-Content performte 40% besser als Branded Content",
      "Mobile-First Landingpages erhöhten CR um 23%",
      "Advantage+ benötigt initiale Budget-Allokation für Learning-Phase",
    ],
    metrics: [
      { label: "ROAS", value: "3,2", change: "+68%" },
      { label: "CPA", value: "€ 18,50", change: "-28%" },
      { label: "Conversion Rate", value: "4,2%", change: "+23%" },
      { label: "Revenue", value: "€ 450k", change: "+45%" },
    ],
    description:
      "Performance-Marketing Kampagne für Fashion D2C Brand mit Fokus auf profitable Skalierung und Creative-Optimierung.",
  },
  {
    employer: "FinStart UG",
    client: "Fina",
    industry: "Fintech",
    period: "Q2/2025",
    goal: "Leads↑",
    measures: "Google Search + CRO-Form",
    kpis: "CPL −35%, CR +18%",
    outcome: "qualifiziertere Leads",
    tags: ["Google Ads", "CRO", "Lead Gen"],
    problem:
      "Hohe Lead-Kosten bei gleichzeitig niedriger Qualifikationsrate. Das bestehende Formular war zu lang und führte zu hohen Abbrüchen. Google Ads Kampagnen hatten ineffiziente Keyword-Struktur.",
    solution:
      "Redesign des Lead-Forms mit Progress-Indicator und Smart-Fields. Restrukturierung der Google Ads Account-Struktur mit SKAG-Ansatz. Implementierung von Lead-Scoring für bessere Qualifikation.",
    learnings: [
      "Kürzere Forms erhöhten CR um 18%, ohne Qualität zu verlieren",
      "SKAG-Struktur verbesserte CTR um 15%",
      "Lead-Scoring reduzierte Sales-Zeit um 30%",
    ],
    metrics: [
      { label: "CPL", value: "€ 42", change: "-35%" },
      { label: "Conversion Rate", value: "12,5%", change: "+18%" },
      { label: "Qualified Leads", value: "68%", change: "+22%" },
      { label: "Cost per Qualified", value: "€ 62", change: "-28%" },
    ],
    description:
      "Lead-Generation Optimierung für Fintech-Startup mit Fokus auf Qualität und Effizienz.",
  },
  {
    employer: "Nordlicht E-Commerce GmbH",
    client: "Nordlicht",
    industry: "Home & Living",
    period: "Q3/2025",
    goal: "Neukunden",
    measures: "Advantage+ + UGC",
    kpis: "CTR +22%, CAC −17%",
    outcome: "stabiler Neukundenanteil",
    tags: ["Meta Ads", "UGC", "E-Com"],
    problem:
      "Rückgang des Neukundenanteils trotz steigendem Budget. Bestehende Kampagnen erreichten hauptsächlich Retargeting-Audiences. Creative-Fatigue führte zu sinkenden Engagement-Raten.",
    solution:
      "Launch neuer Advantage+ Kampagnen mit Fokus auf Neukunden-Akquise. Integration von UGC-Content in Creative-Mix. Implementierung von Lookalike-Audiences basierend auf High-Value-Kunden.",
    learnings: [
      "UGC erhöhte Neukunden-Anteil von 35% auf 52%",
      "Advantage+ reduzierte CAC um 17% vs. Manual Campaigns",
      "Diversifizierter Creative-Mix verhinderte Fatigue",
    ],
    metrics: [
      { label: "CTR", value: "2,8%", change: "+22%" },
      { label: "CAC", value: "€ 28", change: "-17%" },
      { label: "New Customer Rate", value: "52%", change: "+17%" },
      { label: "LTV", value: "€ 145", change: "+12%" },
    ],
    description:
      "Neukunden-Akquise Kampagne für Home & Living E-Commerce mit Fokus auf nachhaltiges Wachstum.",
  },
];

