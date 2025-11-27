"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Simon hat unseren Meta-ROAS in 6 Wochen von 1,8 auf 3,2 gehoben.",
    author: "Lisa Kramer",
    role: "Marketing Lead",
    company: "Nordlicht E-Commerce GmbH",
  },
  {
    quote:
      "Strukturiert, datengetrieben, zuverlässig – genau das, was wir brauchten.",
    author: "Dr. Paul Neumann",
    role: "Gründer",
    company: "FinStart UG",
  },
  {
    quote:
      "Klarer Prozess, starke Creatives, schnelle Sprints.",
    author: "Mara Vogt",
    role: "Head of Growth",
    company: "UrbanWear",
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-accent-start mb-4" />
              <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

