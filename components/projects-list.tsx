"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
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
  },
];

export function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.client}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <CardTitle className="text-xl">{project.client}</CardTitle>
                  <CardDescription className="mt-1">
                    {project.industry} • {project.period}
                  </CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">Ziel:</p>
                  <p className="text-sm text-gray-600">{project.goal}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">KPIs:</p>
                  <p className="text-sm text-gray-600 font-semibold text-accent-start">
                    {project.kpis}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Outcome:</p>
                  <p className="text-sm text-gray-600">{project.outcome}</p>
                </div>
              </div>
              <button className="mt-4 text-sm font-medium text-primary hover:text-primary-700 flex items-center group">
                Mehr erfahren
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

