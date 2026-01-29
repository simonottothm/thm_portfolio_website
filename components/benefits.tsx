"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  Rocket,
  Target,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "ROAS-Fokus & klare KPIs",
    description: "Messbare Ergebnisse stehen im Mittelpunkt jeder Kampagne.",
    icon: Target,
  },
  {
    title: "Schnelle Iteration & kurze Feedback-Loops",
    description: "Agile Prozesse für schnelle Anpassungen und Optimierungen.",
    icon: Zap,
  },
  {
    title: "Transparente, verständliche Reports",
    description: "Klare Kommunikation der Ergebnisse und Handlungsempfehlungen.",
    icon: FileText,
  },
  {
    title: "Saubere Setups (Tracking, Pixel, Feeds)",
    description: "Technisch einwandfreie Implementierung für zuverlässige Daten.",
    icon: CheckCircle2,
  },
  {
    title: "Performance-Landingpages mit Fokus auf Conversion",
    description: "Landingpages, die nicht nur gut aussehen, sondern auch konvertieren.",
    icon: Rocket,
  },
];

export function Benefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-xl hover:shadow-accent-start/15 transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-accent-start/20 group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-start via-accent-end to-accent-light flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent-start/25">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary group-hover:text-accent-start transition-colors">{benefit.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{benefit.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

