import { MapPin, Mail, Phone } from "lucide-react";

import { MultiStepForm } from "@/components/multi-step-form";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "kontakt@simon-otto.de",
    href: "mailto:kontakt@simon-otto.de",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 641 123456",
    href: "tel:+49641123456",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "35390 Gießen, Deutschland",
    href: null,
  },
];

export default function Kontakt() {
  return (
    <Section>
      <PageHeader
        title="Kontakt"
        description="Lassen Sie uns über Ihr Projekt sprechen"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Kontaktdaten
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label}>
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Icon className="h-5 w-5 text-accent-start mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-900 hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              Nachricht senden
            </h2>
            <Card>
              <CardContent className="pt-6">
                <MultiStepForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

