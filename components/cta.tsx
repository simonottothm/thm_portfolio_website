"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Interessiert? Lassen Sie uns sprechen.",
  description,
  buttonText = "Jetzt kontaktieren",
  buttonHref = "/kontakt",
}: CTAProps) {
  return (
    <div className="bg-gradient-to-tr from-primary to-primary-700 text-white rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <Button asChild size="lg" variant="secondary" className="text-base px-8">
        <Link href={buttonHref}>
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

