import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export default function Buchung() {
  return (
    <Section>
      <PageHeader
        title="Buchung"
        description="Unverbindliche Anfrage – Lassen Sie uns über Ihr Projekt sprechen"
      />

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              Füllen Sie das Formular aus, und ich melde mich zeitnah bei Ihnen.
              Gemeinsam finden wir heraus, wie ich Sie bei Ihrem
              Performance-Marketing oder Web-Development-Projekt unterstützen
              kann.
            </p>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

