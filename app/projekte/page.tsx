import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ProjectsList } from "@/components/projects-list";

export default function Projekte() {
  return (
    <Section>
      <PageHeader
        title="Projekte & Case Studies"
        description="Konkrete Ergebnisse aus der Praxis – datengetrieben, messbar, erfolgreich"
      />

      <ProjectsList />
    </Section>
  );
}

