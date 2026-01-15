import { Bitcoin, Wallet, TrendingUp, Building2, Wrench, LucideIcon } from 'lucide-react';

export interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  resourceCount: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  type: 'article' | 'guide' | 'video' | 'template' | 'tool';
  readTime?: string;
  featured?: boolean;
  comingSoon?: boolean;
  externalUrl?: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'bitcoin-digital',
    name: 'Bitcoin & Digital Assets',
    description: 'Navigate the world of cryptocurrency with data-driven, no-nonsense analysis.',
    icon: 'Bitcoin',
    color: 'from-orange-500/20 to-orange-600/10',
    resourceCount: 0
  },
  {
    id: 'personal-finance',
    name: 'Personal Finance Foundations',
    description: 'Master the fundamentals of budgeting, saving, and building financial security.',
    icon: 'Wallet',
    color: 'from-green-500/20 to-green-600/10',
    resourceCount: 0
  },
  {
    id: 'wealth-systems',
    name: 'Building Wealth Systems',
    description: 'Create sustainable frameworks for long-term wealth accumulation and preservation.',
    icon: 'TrendingUp',
    color: 'from-blue-500/20 to-blue-600/10',
    resourceCount: 0
  },
  {
    id: 'business-finance',
    name: 'Business Finance & Accounting',
    description: 'Essential financial knowledge for entrepreneurs and business owners.',
    icon: 'Building2',
    color: 'from-purple-500/20 to-purple-600/10',
    resourceCount: 0
  },
  {
    id: 'tools-templates',
    name: 'Tools & Templates',
    description: 'Practical resources, calculators, and templates to put knowledge into action.',
    icon: 'Wrench',
    color: 'from-primary/20 to-primary/10',
    resourceCount: 0
  }
];

// Placeholder resources for future content
export const resources: Resource[] = [
  {
    id: 'bitcoin-101',
    title: 'Bitcoin 101: Understanding the Basics',
    description: 'A beginner-friendly introduction to Bitcoin, blockchain technology, and why it matters for your financial future.',
    categoryId: 'bitcoin-digital',
    type: 'guide',
    readTime: '15 min',
    featured: true,
    comingSoon: true
  },
  {
    id: 'emergency-fund',
    title: 'The Emergency Fund Blueprint',
    description: 'How to build and maintain an emergency fund that provides true financial security.',
    categoryId: 'personal-finance',
    type: 'guide',
    readTime: '10 min',
    comingSoon: true
  },
  {
    id: 'wealth-pillars',
    title: 'The 5 Pillars of Wealth Building',
    description: 'A comprehensive framework for building sustainable, generational wealth.',
    categoryId: 'wealth-systems',
    type: 'guide',
    readTime: '20 min',
    featured: true,
    comingSoon: true
  },
  {
    id: 'small-business-finances',
    title: 'Small Business Financial Foundations',
    description: 'Essential bookkeeping and financial management for entrepreneurs.',
    categoryId: 'business-finance',
    type: 'guide',
    readTime: '25 min',
    comingSoon: true
  },
  {
    id: 'budget-template',
    title: 'Monthly Budget Planner',
    description: 'A simple, effective spreadsheet template for tracking income and expenses.',
    categoryId: 'tools-templates',
    type: 'template',
    comingSoon: true
  }
];

export const iconMap: Record<string, LucideIcon> = {
  Bitcoin,
  Wallet,
  TrendingUp,
  Building2,
  Wrench
};
