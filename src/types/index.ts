// 화성시 AI 육아 생태계 프로젝트 타입 정의

export interface ProjectStats {
  investment: {
    total: number
    phases: {
      phase1: number
      phase2: number
      phase3: number
    }
  }
  expectedOutcomes: {
    roi: number
    birthRateIncrease: number
    economicEffect: number
    expandingCities: number
    userSatisfaction: number
    costReduction: number
  }
  timeline: {
    totalMonths: number
    phase1Duration: number
    phase2Duration: number
    phase3Duration: number
  }
}

export interface CoreFeature {
  id: string
  title: string
  description: string
  icon: string
  color: 'primary' | 'success' | 'warm' | 'tech'
  stats: {
    [key: string]: string | number
  }
  benefits: string[]
}

export interface PartnerCompany {
  name: string
  type: string
  contribution: string
  logo: string
}

export interface Risk {
  risk: string
  probability: 'Low' | 'Medium' | 'High'
  impact: 'Low' | 'Medium' | 'High'
  mitigation: string
}

export interface ImplementationPhase {
  phase: number
  title: string
  duration: string
  budget: number
  objectives: string[]
  deliverables: string[]
  risks: Risk[]
}

export interface Scenario {
  name: string
  birthRateIncrease: number
  adoptionRate: number
  economicEffect: number
  roi: number
}

export interface ImpactSimulation {
  scenarios: {
    conservative: Scenario
    realistic: Scenario
    optimistic: Scenario
  }
  assumptions: {
    childRaisingCost: number
    economicContribution: number
    serviceAdoptionPeriod: number
    operationalEfficiency: number
  }
}

export interface CompetitiveAnalysis {
  country: string
  policy: string
  strengths: string[]
  weaknesses: string[]
  applicability: 'Low' | 'Medium' | 'High'
  adaptations: string[]
}

export interface NavItem {
  name: string
  href: string
  external?: boolean
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export interface Stat {
  value: string
  label: string
  icon: string
  color?: string
}

export interface FAQ {
  question: string
  answer: string
  category: 'general' | 'technical' | 'policy' | 'implementation'
}

export interface TrendData {
  date: string
  aiCare: number
  traditionalCare: number
  hwaseongSearch: number
}

export interface AnimationVariant {
  hidden: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
    fill?: boolean
  }[]
}

export interface ROICalculatorInputs {
  investment: number
  birthRateIncrease: number
  adoptionRate: number
  timeframe: number
}

export interface ROICalculatorOutputs {
  roi: number
  economicEffect: number
  costBenefit: number
  paybackPeriod: number
}

export interface AppScreen {
  id: string
  name: string
  description: string
  screenshot: string
  features: string[]
}

export interface UserJourney {
  step: number
  title: string
  description: string
  userAction: string
  systemResponse: string
  duration: string
}

export interface PolicyComparison {
  aspect: string
  traditional: string
  aiEnhanced: string
  improvement: string
}

export interface GeographicData {
  region: string
  population: number
  birthRate: number
  itInfrastructure: number
  adoptionPotential: number
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'milestone' | 'deliverable' | 'review'
  status: 'completed' | 'inProgress' | 'planned'
}

export interface BudgetAllocation {
  category: string
  amount: number
  percentage: number
  description: string
  phase: number
}

export interface KPI {
  name: string
  current: number
  target: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  importance: 'high' | 'medium' | 'low'
}

export interface Technology {
  name: string
  category: 'AI/ML' | 'Frontend' | 'Backend' | 'Infrastructure' | 'Analytics'
  description: string
  maturity: 'emerging' | 'developing' | 'mature'
  criticality: 'essential' | 'important' | 'optional'
}

export interface Stakeholder {
  name: string
  role: string
  organization: string
  influence: 'high' | 'medium' | 'low'
  support: 'strong' | 'moderate' | 'neutral' | 'opposed'
  engagement: string[]
}

// 유틸리티 타입들
export type ColorScheme = 'primary' | 'success' | 'warm' | 'tech'
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade'
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

// 공통 props 타입들
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number
  direction?: AnimationDirection
  duration?: number
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void
  onHover?: () => void
  disabled?: boolean
}
