"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Facebook,
  FileText,
  Globe,
  Music,
  Search,
  TrendingUp,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <Card className="h-full hover:shadow-xl hover:shadow-accent-start/20 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-accent-start/20 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-start via-accent-end to-accent-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-start/30">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent-start transition-colors">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      <span className="mr-2 text-accent-start font-bold">•</span>
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

