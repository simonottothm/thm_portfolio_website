"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import type { Skill } from "@/types/skill";

interface SkillsBarsProps {
  skills: Skill[];
  category: string;
}

export function SkillsBars({ skills, category }: SkillsBarsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-4">
      <h3 className="font-semibold text-lg text-primary mb-4">{category}</h3>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm font-semibold text-accent-start">{skill.level}/10</span>
          </div>
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-start to-accent-end rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${(skill.level / 10) * 100}%` } : { width: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.1 + 0.3,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

