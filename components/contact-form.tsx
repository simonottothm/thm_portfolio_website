"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  budget: z.string().min(1, "Bitte wählen Sie eine Budget-Range"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privacy: false,
      budget: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    toast({
      title: "Nachricht gesendet",
      description: "Danke, Ihre Nachricht ist eingegangen. Ich melde mich zeitnah bei Ihnen.",
    });
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          className="mt-1"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">
          E-Mail <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="company">Unternehmen</Label>
        <Input
          id="company"
          {...register("company")}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="budget">
          Budget-Range <span className="text-red-500">*</span>
        </Label>
        <select
          id="budget"
          {...register("budget")}
          className="mt-1 flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-invalid={errors.budget ? "true" : "false"}
        >
          <option value="">Bitte wählen</option>
          <option value="<2k">&lt; 2.000 €</option>
          <option value="2-5k">2.000 – 5.000 €</option>
          <option value="5-10k">5.000 – 10.000 €</option>
          <option value=">10k">&gt; 10.000 €</option>
          <option value="unclear">noch unklar</option>
        </select>
        {errors.budget && (
          <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          Nachricht <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1"
          rows={6}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacy"
          {...register("privacy")}
          className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          aria-invalid={errors.privacy ? "true" : "false"}
        />
        <Label htmlFor="privacy" className="text-sm">
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen. <span className="text-red-500">*</span>
        </Label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-red-500">{errors.privacy.message}</p>
      )}

      <Button type="submit" size="lg" className="w-full">
        Absenden
      </Button>
    </form>
  );
}

