import { DownloadCVButton } from "@/components/download-cv-button";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Timeline } from "@/components/timeline";
import { Card, CardContent } from "@/components/ui/card";

const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Fließend (C1)" },
];

export default function Vita() {
  return (
    <Section>
      <PageHeader
        title="Vita"
        description="Mein Werdegang, Erfahrungen und Qualifikationen"
      />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-8">
          <DownloadCVButton />
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">
            Berufserfahrung & Ausbildung
          </h2>
          <Timeline />
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-primary mb-6">
            Sprachen
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <Card key={lang.name}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{lang.name}</span>
                    <span className="text-sm text-gray-600">{lang.level}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

