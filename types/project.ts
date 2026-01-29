export interface ProjectMetric {
  label: string;
  value: string;
  change: string;
}

export interface Project {
  employer: string;
  client: string;
  industry: string;
  period: string;
  goal: string;
  measures: string;
  kpis: string;
  outcome: string;
  tags: string[];
  problem?: string;
  solution?: string;
  learnings?: string[];
  metrics?: ProjectMetric[];
  description?: string;
}

