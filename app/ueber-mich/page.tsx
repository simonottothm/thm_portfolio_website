"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SkillsBars } from "@/components/skills-bars";
import { Timeline } from "@/components/timeline";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  ads: [
    { name: "Meta Ads", level: 9, category: "Ads-Plattformen" },
    { name: "TikTok Ads", level: 8, category: "Ads-Plattformen" },
    { name: "Google Ads", level: 8, category: "Ads-Plattformen" },
  ],
  tracking: [
    { name: "Google Analytics 4", level: 9, category: "Tracking & Analytics" },
    { name: "Google Tag Manager", level: 9, category: "Tracking & Analytics" },
    { name: "Meta Pixel", level: 8, category: "Tracking & Analytics" },
  ],
  web: [
    { name: "Next.js", level: 8, category: "Web-Development" },
    { name: "React", level: 8, category: "Web-Development" },
    { name: "TypeScript", level: 7, category: "Web-Development" },
    { name: "Tailwind CSS", level: 9, category: "Web-Development" },
    { name: "Webflow", level: 7, category: "Web-Development" },
  ],
  design: [
    { name: "Figma", level: 7, category: "Design & Collaboration" },
    { name: "Notion", level: 8, category: "Design & Collaboration" },
  ],
};

export default function UeberMich() {
  return (
    <>
      <Section>
        <PageHeader
          title="Über mich"
          description="Medieninformatik-Student mit Fokus auf Performance-Marketing und Web-Development"
        />

        {/* About Section with Image Placeholder */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <Card className="overflow-hidden border-2 border-accent-start/20 hover:border-accent-start/50 transition-colors">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px]">
                  <Image
                    src="/assets/SO_5.jpeg"
                    alt="Simon Otto"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-display font-bold text-primary mb-4">
                  Wer ich bin
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ich bin Simon Otto, Medieninformatik-Student (THM, B.Sc.) mit
                  Fokus auf Performance-Marketing und Web-Development. Ich kombiniere
                  fundiertes Plattform-Know-how (Meta/TikTok/Google) mit sauberer
                  technischer Umsetzung (Tracking, Landingpages, Analytics).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Meine Stärke liegt darin, Marketing-Strategien technisch
                  umzusetzen und dabei immer die Performance im Blick zu behalten.
                  Ich arbeite datengetrieben, iteriere schnell und kommuniziere
                  transparent – damit Sie genau wissen, was funktioniert und warum.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Skills & Kenntnisse
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meine Expertise in verschiedenen Bereichen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <SkillsBars skills={skills.ads} category="Ads-Plattformen" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SkillsBars skills={skills.tracking} category="Tracking & Analytics" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SkillsBars skills={skills.web} category="Web-Development" />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <SkillsBars skills={skills.design} category="Design & Collaboration" />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Werdegang
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meine berufliche Entwicklung und Qualifikationen
            </p>
          </motion.div>

          <Card>
            <CardContent className="pt-6">
              <Timeline />
            </CardContent>
          </Card>
        </div>
      </Section>

    </>
  );
}

