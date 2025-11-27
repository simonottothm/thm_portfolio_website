import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { BadgeRow } from "@/components/badge-row";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  ads: ["Meta", "TikTok", "Google"],
  tracking: ["GA4", "GTM", "Meta Pixel"],
  web: ["Next.js", "Tailwind", "Webflow"],
  design: ["Figma", "Notion"],
};

export default function UeberMich() {
  return (
    <Section>
      <PageHeader
        title="Über mich"
        description="Medieninformatik-Student mit Fokus auf Performance-Marketing und Web-Development"
      />

      <div className="max-w-3xl mx-auto space-y-8">
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Ich bin Simon Otto, Medieninformatik-Student (THM, B.Sc.) mit
              Fokus auf Performance-Marketing und Web-Development. Ich kombiniere
              fundiertes Plattform-Know-how (Meta/TikTok/Google) mit sauberer
              technischer Umsetzung (Tracking, Landingpages, Analytics).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Meine Stärke liegt darin, Marketing-Strategien technisch
              umzusetzen und dabei immer die Performance im Blick zu behalten.
              Ich arbeite datengetrieben, iteriere schnell und kommuniziere
              transparent – damit Sie genau wissen, was funktioniert und warum.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-display font-bold text-primary mb-4">
              Skills & Tools
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Ads-Plattformen</h3>
                <BadgeRow items={skills.ads} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tracking & Analytics</h3>
                <BadgeRow items={skills.tracking} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web-Development</h3>
                <BadgeRow items={skills.web} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Design & Collaboration</h3>
                <BadgeRow items={skills.design} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

