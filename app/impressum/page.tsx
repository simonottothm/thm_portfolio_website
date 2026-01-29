import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function Impressum() {
  return (
    <Section>
      <PageHeader title="Impressum" />

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-gray-700">
                Simon Otto
                <br />
                Musterstraße 12
                <br />
                35390 Gießen
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
              <p className="text-gray-700">
                E-Mail: kontakt@simon-otto.de
                <br />
                Telefon: +49 123 123456
                
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="text-gray-700">Simon Otto</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
              <p className="text-gray-700">
                DE123456789
                
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>
                    Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Haftung für Links</h3>
                  <p>
                    Mein Angebot enthält Links zu externen Websites Dritter, auf
                    deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                    diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                    Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Hosting</h2>
              <p className="text-gray-700 text-sm">
                Diese Website wird gehostet bei unserem  eigenenHosting-Anbieter.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

