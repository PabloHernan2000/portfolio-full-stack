export type Language = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: LocalizedString;
  sublabel: LocalizedString;
  highlight?: boolean;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  role: LocalizedString;
  tech: string;
  status: 'healthy' | 'active' | 'cached';
  details: LocalizedString;
}

export interface ChartDataPoint {
  concurrency: string;
  withoutCache: number;
  withCache: number;
  dbQueriesWithout: number;
  dbQueriesWith: number;
}

export interface CaseStudy {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  badge: LocalizedString;
  period: string;
  category: LocalizedString;
  role: LocalizedString;
  impactMetrics: {
    label: LocalizedString;
    value: string;
  }[];
  overview: LocalizedString;
  businessProblem: LocalizedString;
  technicalChallenges: LocalizedString[];
  architecturalSolution: {
    summary: LocalizedString;
    highlights: LocalizedString[];
  };
  flowSteps: {
    step: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
  performanceData: ChartDataPoint[];
  stack: string[];
  results: LocalizedString[];
  demoGithubUrl?: string;
  liveDemoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedString[];
  technologies: string[];
  type: 'work' | 'education';
}

export interface TechStackCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  iconName: string;
  skills: {
    name: string;
    level: string;
    tag: string;
  }[];
}

export interface ArchitecturePrinciple {
  title: LocalizedString;
  description: LocalizedString;
  badge: string;
  bullets: LocalizedString[];
}
