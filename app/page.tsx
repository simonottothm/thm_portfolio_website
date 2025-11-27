import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServicesGrid } from "@/components/services-grid";
import { Benefits } from "@/components/benefits";
import { ProjectsList } from "@/components/projects-list";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="leistungen">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Leistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Von Performance-Marketing bis Web-Development – alles aus einer Hand.
          </p>
        </div>
        <ServicesGrid />
      </Section>

      <Section className="bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Warum mit mir arbeiten?
          </h2>
        </div>
        <Benefits />
      </Section>

      <Section id="projekte">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Projekte & Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Konkrete Ergebnisse aus der Praxis.
          </p>
        </div>
        <ProjectsList />
      </Section>

      <Section className="bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Was Kunden sagen
          </h2>
        </div>
        <Testimonials />
      </Section>

      <Section id="faq">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Häufige Fragen
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQ />
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}

