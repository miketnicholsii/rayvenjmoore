import { Calculator, Home, Users, ShoppingBag, Coins, BarChart3 } from 'lucide-react';

export interface Venture {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: typeof Calculator;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
  highlights?: string[];
}

export const ventures: Venture[] = [
  {
    id: 'count-it-all-joy',
    title: 'Count It All Joy Tax Group',
    category: 'Tax & Accounting',
    tagline: 'Tailored tax and accounting services in Houston since 1999',
    description: 'A firm large enough to offer a full range of professional services, yet small enough to give you the individual attention you deserve.',
    fullDescription: `If you're looking for a firm that will focus on your individual needs and always treat you like a client who matters, look no further.

Count It All Joy Tax Group has been serving the Houston community since 1999 with comprehensive tax and accounting services. We understand that every financial situation is unique, which is why we take the time to thoroughly and conscientiously study your circumstances.

Our firm is large enough to offer a full range of professional services—from tax preparation and planning to bookkeeping and financial consulting—but small enough to give you the individualized attention that you deserve. We don't believe in one-size-fits-all solutions. Instead, we tailor our advice to your specific needs, goals, and circumstances.

Whether you're an individual looking for tax preparation assistance, a small business owner needing accounting support, or someone seeking strategic financial guidance, we're here to help you navigate the complexities with clarity and confidence.`,
    icon: Calculator,
    ctaText: 'Book An Appointment',
    ctaLink: 'https://countitalljoy.com',
    featured: true,
    highlights: [
      'Serving Houston since 1999',
      'Full-service tax preparation',
      'Small business accounting',
      'Personalized financial guidance',
    ],
  },
  {
    id: 'moore-manor',
    title: 'Moore Manor Hospitality',
    category: 'Hospitality',
    tagline: 'Enhancing travel experiences in Houston',
    description: 'Thoughtfully curated properties for business and leisure travelers, providing comfortable stays in prime Houston locations.',
    fullDescription: `Moore Manor Hospitality is dedicated to enhancing the travel experience for visitors to Houston, whether they're in town for business or leisure.

Our properties are thoughtfully curated to provide comfort, convenience, and a true sense of home away from home. Located in prime Houston neighborhoods, each property offers easy access to the city's business districts, cultural attractions, and entertainment venues.

We believe that where you stay matters. That's why we focus on creating spaces that go beyond basic accommodation—offering amenities and touches that make your time in Houston memorable and productive. From business travelers needing a quiet workspace to families exploring the city, Moore Manor Hospitality provides the perfect base for your Houston experience.`,
    icon: Home,
    ctaText: 'Learn More',
    ctaLink: '#',
    highlights: [
      'Prime Houston locations',
      'Business & leisure accommodations',
      'Thoughtfully curated properties',
      'Home away from home experience',
    ],
  },
  {
    id: 'riverside-civic',
    title: 'Riverside Civic Association',
    category: 'Nonprofit',
    tagline: 'Supporting Riverside Terrace in Houston\'s Third Ward',
    description: 'A nonprofit dedicated to preserving the character and history of the Riverside Terrace community through volunteer efforts and civic engagement.',
    fullDescription: `The Riverside Civic Association is a nonprofit organization dedicated to supporting and strengthening the Riverside Terrace community in Houston's historic Third Ward.

Through volunteer efforts, community programs, and civic engagement, we work to preserve the unique character and rich history of our neighborhood while addressing the evolving needs of our residents.

Our initiatives focus on community beautification, historic preservation, neighborhood safety, and creating opportunities for residents to connect and support one another. We believe that strong communities are built through active participation and shared commitment to our collective wellbeing.

Whether you're a long-time resident or new to the neighborhood, the Riverside Civic Association welcomes your involvement. Together, we're building a community that honors its past while embracing its future.`,
    icon: Users,
    ctaText: 'Get Involved',
    ctaLink: '#',
    highlights: [
      'Community volunteer programs',
      'Historic preservation efforts',
      'Neighborhood beautification',
      'Civic engagement initiatives',
    ],
  },
  {
    id: 'houston-drip-factory',
    title: 'Houston Drip Factory',
    category: 'Fashion & Art',
    tagline: 'Where style meets discovery',
    description: 'An art and fashion hub featuring the latest trends alongside classic pieces, designed for those who love to stand out.',
    fullDescription: `Discover the latest in fashion at Houston Drip Factory. We're more than just a store—we're a hub for art, fashion, and self-expression.

Our carefully curated collection features unique and innovative clothing and accessories designed for those who love to stand out. From the latest trends to timeless classic pieces, we offer something for every style sensibility.

At Houston Drip Factory, shopping is about discovery and inspiration. We believe that what you wear is an expression of who you are, and we're here to help you find pieces that speak to your individuality.

Whether you're looking for a statement piece to elevate your wardrobe or everyday essentials with an edge, Houston Drip Factory is your destination for fashion that makes an impact.`,
    icon: ShoppingBag,
    ctaText: 'Shop With Us',
    ctaLink: '#',
    highlights: [
      'Unique & innovative designs',
      'Latest trends & classic pieces',
      'Art-inspired fashion',
      'Discovery-focused shopping',
    ],
  },
  {
    id: 'universal-wealthcare',
    title: 'Universal WealthCare',
    category: 'Financial Education',
    tagline: 'Clarity-driven wealth building strategies',
    description: 'Your resource for Bitcoin, personal finance, and wealth-building strategies delivered with clarity, data-driven analysis, and no-nonsense insights.',
    fullDescription: `Universal WealthCare is your go-to resource for Bitcoin, personal finance, and wealth-building strategies—delivered with the clarity and directness you deserve.

In a world full of financial noise, hype, and confusion, Universal WealthCare cuts through to what matters. We provide data-driven, no-nonsense analysis that helps you make informed decisions about your financial future.

Our content covers a range of topics including cryptocurrency investing, personal finance fundamentals, wealth-building strategies, and economic analysis. Whether you're just starting your financial journey or looking to optimize an existing portfolio, you'll find actionable insights grounded in research and real-world experience.

Subscribe to join a community of learners committed to building lasting wealth through education and informed decision-making.`,
    icon: Coins,
    ctaText: 'Subscribe',
    ctaLink: 'https://universalwealthcare.substack.com',
    featured: true,
    highlights: [
      'Bitcoin & cryptocurrency insights',
      'Personal finance fundamentals',
      'Data-driven analysis',
      'No-nonsense wealth strategies',
    ],
  },
  {
    id: 'cryptoeq',
    title: 'CryptoEQ',
    category: 'Research & Analysis',
    tagline: 'Independent cryptocurrency research and ratings',
    description: 'An independent agency providing transparent research that analyzes and rates cryptocurrencies, helping investors identify quality projects and avoid scams.',
    fullDescription: `Gain the market insights and tools you need to improve your cryptocurrency investing and trading strategies with CryptoEQ.

As an independent research agency, CryptoEQ is dedicated to providing transparent, unbiased analysis of the cryptocurrency market. We analyze and rate cryptocurrencies based on rigorous criteria, helping investors identify high-quality projects while steering clear of scams and low-quality offerings.

Our services include:
• Real-time market data and analytics
• In-depth research reports on individual cryptocurrencies
• Quality ratings and risk assessments
• Consulting services for serious investors

CryptoEQ is backed by quality independent research—not paid promotions or conflicts of interest. We exist to serve investors, not projects seeking favorable coverage.

Join our growing community of crypto enthusiasts who rely on CryptoEQ for trustworthy information in a market often plagued by misinformation and hype.`,
    icon: BarChart3,
    ctaText: 'Learn More',
    ctaLink: 'https://cryptoeq.io',
    highlights: [
      'Independent research & ratings',
      'Real-time market data',
      'Scam identification',
      'Quality project analysis',
    ],
  },
];

export function getVentureById(id: string): Venture | undefined {
  return ventures.find(v => v.id === id);
}
