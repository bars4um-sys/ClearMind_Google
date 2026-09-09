export interface TariffPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  originalPrice: number;
  currentPrice: number;
  installmentPrice: number;
  installmentMonths: number;
  placesLeft: number;
  features: { text: string; included: boolean; highlight?: boolean }[];
  ctaText: string;
}

export interface SyllabusWeek {
  weekNumber: number;
  title: string;
  subtitle: string;
  cognitiveFocus: string;
  languageOutcome: string;
  topics: string[];
  homework: string;
}

export interface SyllabusModule {
  id: string;
  moduleNumber: number;
  title: string;
  tagline: string;
  weeksSpan: string;
  colorTheme: string;
  iconName: string;
  summary: string;
  weeks: SyllabusWeek[];
}

export interface Testimonial {
  id: string;
  quote: string;
  story: string;
  keyResult: string;
  audioDuration?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'about' | 'process' | 'payment' | 'results';
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    text: string;
    description: string;
    profileType: 'visual' | 'auditory' | 'associative' | 'kinesthetic';
  }[];
}
