"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, Home, Mail } from "lucide-react";

import type { FormSubmissionData } from "@/types/form";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function DankePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormSubmissionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get form data from sessionStorage
    if (typeof window !== "undefined") {
      const storedData = sessionStorage.getItem("formSubmission");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setFormData(parsedData);
          setIsLoading(false);
          // Clear sessionStorage after a delay
          setTimeout(() => {
            sessionStorage.removeItem("formSubmission");
          }, 1000);
        } catch (error) {
          console.error("Error parsing form data:", error);
          router.push("/kontakt");
        }
      } else {
        // If no data, redirect to contact page
        router.push("/kontakt");
      }
    }
  }, [router]);

  if (isLoading || !formData) {
    return (
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-24 w-24 rounded-full bg-gray-200 mx-auto mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent-start to-accent-end mb-6">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Vielen Dank!
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Ihre Nachricht wurde erfolgreich übermittelt.
          </p>
          {formData.email && (
            <p className="text-lg text-gray-600 mb-8">
              Ich melde mich zeitnah bei Ihnen unter{" "}
              <a
                href={`mailto:${formData.email}`}
                className="text-accent-start hover:underline font-medium"
              >
                {formData.email}
              </a>
              .
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-blue-50/50 to-white rounded-xl p-6 border border-accent-start/10 mb-8"
        >
          <h2 className="text-lg font-semibold text-primary mb-4">
            Ihre Anfrage im Überblick:
          </h2>
          <div className="text-left space-y-2 text-sm text-gray-700">
            {formData.name && (
              <p>
                <span className="font-medium">Name:</span> {formData.name}
              </p>
            )}
            {formData.email && (
              <p>
                <span className="font-medium">E-Mail:</span> {formData.email}
              </p>
            )}
            {formData.company && (
              <p>
                <span className="font-medium">Unternehmen:</span> {formData.company}
              </p>
            )}
            {formData.projectType && (
              <p>
                <span className="font-medium">Projekttyp:</span> {formData.projectType}
              </p>
            )}
            {formData.budget && (
              <p>
                <span className="font-medium">Budget:</span> {formData.budget}
              </p>
            )}
            {formData.timeframe && (
              <p>
                <span className="font-medium">Zeitrahmen:</span> {formData.timeframe}
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/kontakt">
              <Mail className="mr-2 h-4 w-4" />
              Neue Nachricht
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

