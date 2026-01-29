"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";

export function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card 
              className="h-full hover:shadow-2xl hover:shadow-accent-start/30 transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-accent-start/30 group cursor-pointer overflow-hidden relative"
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-start/0 to-accent-end/0 group-hover:from-accent-start/5 group-hover:to-accent-end/5 transition-all duration-300 pointer-events-none" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-primary group-hover:text-accent-start transition-colors">{project.client}</CardTitle>
                        <CardDescription className="mt-0.5 flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            {project.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.period}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-accent-start/30 text-accent-start group-hover:bg-gradient-to-r group-hover:from-accent-start/10 group-hover:to-accent-end/10 transition-all group-hover:border-accent-start/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-lg p-3 border border-accent-start/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="h-4 w-4 text-accent-start" />
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Ziel</p>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{project.goal}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50/50 to-white rounded-lg p-3 border border-green-200/30">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">KPIs</p>
                    </div>
                    <p className="text-sm text-gray-700 font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
                      {project.kpis}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50/50 to-white rounded-lg p-3 border border-purple-200/30">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Outcome</p>
                    </div>
                    <p className="text-sm text-gray-700">{project.outcome}</p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-accent-start to-accent-end text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-accent-start/30 transition-all duration-300 flex items-center justify-center group/btn">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
              <DialogHeader className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <DialogTitle className="text-3xl font-display font-bold text-primary mb-1">
                          {selectedProject.client}
                        </DialogTitle>
                        <DialogDescription className="text-base text-gray-600 flex items-center gap-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            {selectedProject.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {selectedProject.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {selectedProject.employer}
                          </span>
                        </DialogDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-accent-start/30 text-accent-start bg-gradient-to-r from-accent-start/5 to-accent-end/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <motion.div 
                className="space-y-6 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {selectedProject.description && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 rounded-xl p-6 border-2 border-accent-start/20 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary">Ziel</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.goal}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="bg-gradient-to-br from-green-50/50 via-white to-green-50/30 rounded-xl p-6 border-2 border-green-200/30 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary">Maßnahmen</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.measures}</p>
                  </motion.div>
                </div>

                {selectedProject.problem && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-red-50/70 via-white to-red-50/50 rounded-xl p-6 border-2 border-red-200/50 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">!</span>
                      </div>
                      <h3 className="font-semibold text-lg text-primary">Problem</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.problem}</p>
                  </motion.div>
                )}

                {selectedProject.solution && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="bg-gradient-to-br from-green-50/70 via-white to-green-50/50 rounded-xl p-6 border-2 border-green-200/50 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary">Lösung</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.solution}</p>
                  </motion.div>
                )}

                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="h-5 w-5 text-accent-start" />
                      <h3 className="font-semibold text-lg text-primary">Metrics & Ergebnisse</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProject.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                          className="bg-gradient-to-br from-accent-start/10 via-white to-accent-end/10 rounded-xl p-5 border-2 border-accent-start/20 hover:shadow-xl hover:shadow-accent-start/30 hover:scale-105 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <BarChart3 className="h-4 w-4 text-accent-start opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{metric.label}</span>
                          </div>
                          <p className="text-3xl font-bold text-primary mb-2 group-hover:text-accent-start transition-colors">{metric.value}</p>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <p className="text-sm font-bold text-green-600">{metric.change}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {selectedProject.learnings && selectedProject.learnings.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-yellow-50/70 via-white to-yellow-50/50 rounded-xl p-6 border-2 border-yellow-200/50 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg text-primary">Key Learnings</h3>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.learnings.map((learning, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.45 + index * 0.1 }}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-start to-accent-end flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="leading-relaxed">{learning}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <motion.div 
                  className="bg-gradient-to-r from-accent-start/10 to-accent-end/10 rounded-xl p-5 border border-accent-start/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-accent-start" />
                    <h3 className="font-semibold text-lg text-primary">Outcome</h3>
                  </div>
                  <p className="text-gray-700 font-medium">{selectedProject.outcome}</p>
                </motion.div>
              </motion.div>
            </DialogContent>
        )}
      </Dialog>
    </>
  );
}

