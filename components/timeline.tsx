"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timelineItems = [
  {
    type: "work",
    title: "Werkstudent Performance Marketing",
    company: "E-Com Labs GmbH",
    period: "2025 – heute",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Medieninformatik (THM)",
    description: "Schwerpunkt Online-Marketing & Webdev",
    period: "2023 – 2025",
    icon: GraduationCap,
  },
  {
    type: "certificate",
    title: "Meta Certified",
    period: "2024",
    icon: Award,
  },
  {
    type: "certificate",
    title: "Google Ads Zertifikat",
    period: "2024",
    icon: Award,
  },
];

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8">
        {timelineItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20"
            >
              <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
              <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-accent-start to-accent-end flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    {item.company && (
                      <p className="text-gray-600 mb-1">{item.company}</p>
                    )}
                    {item.description && (
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    )}
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

