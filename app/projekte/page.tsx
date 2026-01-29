"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PageHeader } from "@/components/page-header";
import { ProjectsList } from "@/components/projects-list";
import { Section } from "@/components/section";

export default function Projekte() {
  return (
    <>
      <Section>
        <PageHeader
          title="Projekte & Case Studies"
          description="Konkrete Ergebnisse aus der Praxis – datengetrieben, messbar, erfolgreich"
        />

        {/* Introduction Box with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-accent-start/10 shadow-lg shadow-accent-start/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Projekte & Case Studies
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Konkrete Ergebnisse aus der Praxis – hier zeige ich, wie datengetriebenes Marketing und sauberes Web-Development echte Business-Impact erzeugen.
                </p>
                <p className="text-base text-gray-600">
                  Von ROAS-Steigerungen über Conversion-Optimierungen bis hin zu skalierbaren Performance-Kampagnen: Jedes Projekt steht für messbare Erfolge und praxisnahe Lösungen.
                </p>
              </div>
              
              {/* Right side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center"
              >
                <Image
                  src="/assets/case-studies.png"
                  alt="Case Studies - Projekte und Ergebnisse"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Case Study Blocks */}
        <ProjectsList />
      </Section>
    </>
  );
}

