"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, FileText, CheckCircle2, Rocket } from "lucide-react";

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
            <Card className="h-full text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

