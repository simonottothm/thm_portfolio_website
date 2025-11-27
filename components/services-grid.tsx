"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Music,
  Search,
  Globe,
  TrendingUp,
  BarChart3,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Meta Ads (Facebook/Instagram)",
    description: "Testen, skalieren, ROAS sichern.",
    icon: Facebook,
    benefits: [
      "Advantage+ Kampagnen",
      "Creative Testing",
      "Audience-Optimierung",
    ],
  },
  {
    title: "TikTok Ads",
    description: "Creative-First, schnelles Iterieren.",
    icon: Music,
    benefits: [
      "UGC-Strategien",
      "Trend-basierte Creatives",
      "Rapid Testing",
    ],
  },
  {
    title: "Google Ads",
    description: "Intent abholen, effizient ausspielen.",
    icon: Search,
    benefits: [
      "Search & Shopping",
      "Performance Max",
      "Keyword-Optimierung",
    ],
  },
  {
    title: "Landingpages/Websites",
    description: "Schnell, clean, konvertierend.",
    icon: Globe,
    benefits: [
      "Next.js & Webflow",
      "Mobile-First",
      "Conversion-Optimierung",
    ],
  },
  {
    title: "CRO",
    description: "Hypothesengetrieben, A/B-Tests.",
    icon: TrendingUp,
    benefits: [
      "Hypothesen-Formulierung",
      "A/B-Testing",
      "Datengetriebene Optimierung",
    ],
  },
  {
    title: "Tracking/Analytics",
    description: "GA4, GTM, Pixel – sauber & DSGVO-konform (Consent-First).",
    icon: BarChart3,
    benefits: [
      "GA4 Setup",
      "GTM Implementation",
      "DSGVO-konform",
    ],
  },
  {
    title: "Content/Organic",
    description: "Strukturierter Content-Plan, Auswertung.",
    icon: FileText,
    benefits: [
      "Content-Strategie",
      "SEO-Optimierung",
      "Performance-Tracking",
    ],
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 text-accent-start">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

