export interface StrategyItem {
  id: string;
  badge: string;
  quote: string;
  subquote: string;
  desc: string;
  recommendation: string;
  isPrimary?: boolean;
  costImpact: string;
  focus: string[];
}

export interface ProcessPhase {
  id: number;
  timeframe: string;
  title: string;
  highlight?: boolean;
  items: string[];
  deliverables: string[];
}

export interface ServiceOffering {
  title: string;
  domain: 'Web' | 'Apps' | 'Digital Marketing';
  tagline: string;
  description: string;
  deliverables: string[];
  proofMetric: string;
}
