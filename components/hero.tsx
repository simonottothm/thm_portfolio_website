"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const badges = [
  "Meta Certified",
  "Google Partner",
  "Webflow Expert",
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-tr from-accent-start/20 to-accent-end/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-start/10 to-accent-end/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary mb-6"
          >
            Digitale Performance,
            <br />
            messbar gemacht.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4"
          >
            Ich verbinde aktuelles Online-Marketing-Know-how mit sauberem
            Web-Development – für Marken, die Ergebnisse sehen wollen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Fokus auf ROAS, schnelle Iteration, klare Reports – fundiert,
            datengetrieben, praxisnah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/kontakt">
                Jetzt kontaktieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="/vita">Vita ansehen</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {badges.map((badge, index) => (
              <Badge
                key={badge}
                variant="secondary"
                className="text-sm px-4 py-1"
              >
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

