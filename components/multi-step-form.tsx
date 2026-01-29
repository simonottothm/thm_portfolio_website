"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import * as z from "zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const step1Schema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
});

const step2Schema = z.object({
  projectType: z.string().min(1, "Bitte wählen Sie einen Projekttyp"),
  budget: z.string().min(1, "Bitte wählen Sie eine Budget-Range"),
  timeframe: z.string().min(1, "Bitte wählen Sie einen Zeitrahmen"),
});

const step3Schema = z.object({
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
  }),
});

type Step1Values = z.infer<typeof step1Schema>;
type Step2Values = z.infer<typeof step2Schema>;
type Step3Values = z.infer<typeof step3Schema>;

type FormData = Step1Values & Step2Values & Step3Values;

const steps = [
  { id: 1, title: "Persönliche Daten", description: "Ihre Kontaktinformationen" },
  { id: 2, title: "Projekt-Details", description: "Mehr über Ihr Projekt" },
  { id: 3, title: "Nachricht", description: "Ihre Nachricht an mich" },
];

export function MultiStepForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const step1Form = useForm<Step1Values>({
    resolver: zodResolver(step1Schema),
    defaultValues: formData,
  });

  const step2Form = useForm<Step2Values>({
    resolver: zodResolver(step2Schema),
    defaultValues: formData,
  });

  const step3Form = useForm<Step3Values>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      privacy: false,
      ...formData,
    },
  });

  const onStep1Submit = (data: Step1Values) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const onStep2Submit = (data: Step2Values) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(3);
  };

  const onStep3Submit = async (data: Step3Values) => {
    setIsSubmitting(true);
    try {
      const finalData = { ...formData, ...data };
      
      // Store form data in sessionStorage for thank you page FIRST
      if (typeof window !== "undefined") {
        sessionStorage.setItem("formSubmission", JSON.stringify(finalData));
      }
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to thank you page
      router.push("/kontakt/danke");
      // Fallback: if router.push doesn't work, use window.location
      setTimeout(() => {
        if (typeof window !== "undefined" && window.location.pathname !== "/kontakt/danke") {
          window.location.href = "/kontakt/danke";
        }
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    currentStep > step.id
                      ? "bg-accent-start border-accent-start text-white"
                      : currentStep === step.id
                      ? "border-accent-start bg-white text-accent-start"
                      : "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span className="font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                      currentStep > step.id ? "bg-accent-start" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
              <div className="mt-2 text-center">
                <p
                  className={`text-xs font-medium ${
                    currentStep >= step.id ? "text-primary" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-accent-start to-accent-end h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {steps[0].title}
                </h2>
                <p className="text-gray-600 mb-6">{steps[0].description}</p>
              </div>

              <div>
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  {...step1Form.register("name")}
                  className="mt-1"
                  aria-invalid={step1Form.formState.errors.name ? "true" : "false"}
                />
                {step1Form.formState.errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {step1Form.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">
                  E-Mail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...step1Form.register("email")}
                  className="mt-1"
                  aria-invalid={step1Form.formState.errors.email ? "true" : "false"}
                />
                {step1Form.formState.errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {step1Form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company">Unternehmen</Label>
                <Input
                  id="company"
                  {...step1Form.register("company")}
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end pt-4">
                <Button type="submit" size="lg">
                  Weiter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {steps[1].title}
                </h2>
                <p className="text-gray-600 mb-6">{steps[1].description}</p>
              </div>

              <div>
                <Label htmlFor="projectType">
                  Projekttyp <span className="text-red-500">*</span>
                </Label>
                <select
                  id="projectType"
                  {...step2Form.register("projectType")}
                  className="mt-1 flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-invalid={step2Form.formState.errors.projectType ? "true" : "false"}
                >
                  <option value="">Bitte wählen</option>
                  <option value="performance-marketing">Performance Marketing</option>
                  <option value="web-development">Web Development</option>
                  <option value="cro">Conversion Rate Optimization</option>
                  <option value="tracking">Tracking & Analytics</option>
                  <option value="consulting">Beratung</option>
                  <option value="other">Sonstiges</option>
                </select>
                {step2Form.formState.errors.projectType && (
                  <p className="mt-1 text-sm text-red-500">
                    {step2Form.formState.errors.projectType.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="budget">
                  Budget-Range <span className="text-red-500">*</span>
                </Label>
                <select
                  id="budget"
                  {...step2Form.register("budget")}
                  className="mt-1 flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-invalid={step2Form.formState.errors.budget ? "true" : "false"}
                >
                  <option value="">Bitte wählen</option>
                  <option value="<2k">&lt; 2.000 €</option>
                  <option value="2-5k">2.000 – 5.000 €</option>
                  <option value="5-10k">5.000 – 10.000 €</option>
                  <option value=">10k">&gt; 10.000 €</option>
                  <option value="unclear">noch unklar</option>
                </select>
                {step2Form.formState.errors.budget && (
                  <p className="mt-1 text-sm text-red-500">
                    {step2Form.formState.errors.budget.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="timeframe">
                  Zeitrahmen <span className="text-red-500">*</span>
                </Label>
                <select
                  id="timeframe"
                  {...step2Form.register("timeframe")}
                  className="mt-1 flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-invalid={step2Form.formState.errors.timeframe ? "true" : "false"}
                >
                  <option value="">Bitte wählen</option>
                  <option value="asap">So schnell wie möglich</option>
                  <option value="1month">Innerhalb eines Monats</option>
                  <option value="3months">In 2-3 Monaten</option>
                  <option value="6months">In 4-6 Monaten</option>
                  <option value="flexible">Flexibel</option>
                </select>
                {step2Form.formState.errors.timeframe && (
                  <p className="mt-1 text-sm text-red-500">
                    {step2Form.formState.errors.timeframe.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" size="lg" onClick={goToPreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück
                </Button>
                <Button type="submit" size="lg">
                  Weiter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  {steps[2].title}
                </h2>
                <p className="text-gray-600 mb-6">{steps[2].description}</p>
              </div>

              <div>
                <Label htmlFor="message">
                  Nachricht <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...step3Form.register("message")}
                  className="mt-1"
                  rows={6}
                  placeholder="Erzählen Sie mir mehr über Ihr Projekt..."
                  aria-invalid={step3Form.formState.errors.message ? "true" : "false"}
                />
                {step3Form.formState.errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {step3Form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  {...step3Form.register("privacy")}
                  className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  aria-invalid={step3Form.formState.errors.privacy ? "true" : "false"}
                />
                <Label htmlFor="privacy" className="text-sm">
                  Ich habe die{" "}
                  <a
                    href="/datenschutz"
                    className="text-accent-start hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen. <span className="text-red-500">*</span>
                </Label>
              </div>
              {step3Form.formState.errors.privacy && (
                <p className="text-sm text-red-500">
                  {step3Form.formState.errors.privacy.message}
                </p>
              )}

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" size="lg" onClick={goToPreviousStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück
                </Button>
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Absenden
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

