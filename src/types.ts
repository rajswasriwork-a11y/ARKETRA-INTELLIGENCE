export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  badge: string;
  substeps: string[];
}

export interface BenefitMetric {
  id: string;
  metric: string;
  label: string;
  title: string;
  description: string;
}

export interface DemoVideoType {
  id: string;
  title: string;
  duration: string;
  description: string;
  steps: {
    label: string;
    details: string;
    duration: string;
  }[];
}

export interface BookingDetails {
  fullName: string;
  email: string;
  companyName: string;
  teamSize: string;
  atsUsed: string;
  primaryPainPoint: string;
  date: string;
  time: string;
}
