import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function Datenschutz() {
  return (
    <Section>
      <PageHeader title="Datenschutzerklärung" />

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-gray-700 space-y-3 text-sm">
                <h3 className="font-semibold">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                2. Verantwortliche Stelle
              </h2>
              <p className="text-gray-700 text-sm">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
                <br />
                <br />
                Simon Otto
                <br />
                Musterstraße 12
                <br />
                35390 Gießen
                <br />
                Deutschland
                <br />
                <br />
                E-Mail: kontakt@simon-otto.de
                <br />
                Telefon: +49 123 123456
                
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                3. Datenerfassung auf dieser Website
              </h2>
              <div className="text-gray-700 space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Kontaktformular</h3>
                  <p>
                    Wenn Sie mir per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben aus dem Anfrageformular inklusive der
                    von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei mir
                    gespeichert. Diese Daten gebe ich nicht ohne Ihre
                    Einwilligung weiter.
                  </p>
                  <p className="mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
                    6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                    Erfüllung eines Vertrags zusammenhängt oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich ist. In
                    allen übrigen Fällen beruht die Verarbeitung auf meinem
                    berechtigten Interesse an der effektiven Bearbeitung der an
                    mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder
                    auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern
                    diese abgefragt wurde.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                4. Hosting und Logfiles
              </h2>
              <p className="text-gray-700 text-sm">
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die dabei erfassten Logfiles (Zugriffszeiten,
                IP-Adressen, etc.) werden automatisch gelöscht, sobald sie für
                die Bereitstellung der Website nicht mehr erforderlich sind.
                
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                5. Eingebettete Inhalte und Schriften
              </h2>
              <p className="text-gray-700 text-sm">
                Diese Website nutzt Google Fonts (Manrope, Inter) zur
                Darstellung von Schriftarten. Die Schriften werden von Google
                Servern geladen. Dabei kann es zu einer Übermittlung von
                personenbezogenen Daten (IP-Adresse) an Google kommen. Weitere
                Informationen finden Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                6. Tracking und Analyse
              </h2>
              <p className="text-gray-700 text-sm">
                <strong>Hinweis: Derzeit ist kein Tracking aktiv.</strong>
                <br />
                <br />
                Sollte in Zukunft Tracking-Tools (z. B. Google Analytics 4,
                Meta Pixel, TikTok Pixel) eingesetzt werden, würden diese nur
                nach Ihrer expliziten Einwilligung (Consent) geladen. Die
                Einwilligung kann jederzeit widerrufen werden.
                <br />
                <br />
                <strong>Consent-First-Ansatz:</strong> Alle Tracking-Tools
                werden erst nach Ihrer Einwilligung aktiviert. Sie haben jederzeit
                die Möglichkeit, Ihre Einwilligung zu widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                7. Ihre Rechte
              </h2>
              <div className="text-gray-700 space-y-2 text-sm">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15
                    DSGVO)
                  </li>
                  <li>
                    Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)
                  </li>
                  <li>
                    Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)
                  </li>
                  <li>
                    Recht auf Einschränkung der Datenverarbeitung (Art. 18
                    DSGVO)
                  </li>
                  <li>
                    Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                  </li>
                  <li>
                    Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)
                  </li>
                </ul>
                <p className="mt-3">
                  Bei Fragen zur Datenverarbeitung können Sie sich jederzeit an
                  mich wenden: kontakt@simon-otto.de
                  
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                8. Löschfristen
              </h2>
              <p className="text-gray-700 text-sm">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
                Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                9. Auftragsverarbeitung
              </h2>
              <p className="text-gray-700 text-sm">
                Sollten externe Dienstleister (z. B. Hosting-Provider,
                E-Mail-Dienste) personenbezogene Daten in meinem Auftrag
                verarbeiten, erfolgt dies auf Grundlage von
                Auftragsverarbeitungsverträgen gemäß Art. 28 DSGVO.
                
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                10. Stand dieser Datenschutzerklärung
              </h2>
              <p className="text-gray-700 text-sm">
                Diese Datenschutzerklärung wurde zuletzt aktualisiert am:{" "}
                {new Date().toLocaleDateString("de-DE")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

