export interface CareerRole {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights?: string[];
  skills: string[];
}

export const careerRoles: CareerRole[] = [
  {
    id: "abyss",
    company: "Abyss Solutions Ltd",
    title: "Global Finance Controller",
    period: "Dec 2025 – Present",
    location: "Houston, TX",
    type: "On-site",
    description: "Leading global finance operations for an autonomous robotics company enabling inspection-at-scale solutions for risk reduction, preventative maintenance, and sustainability.",
    highlights: [
      "Driving technical accounting and revenue recognition standards",
      "Overseeing month-end close and consolidation processes",
      "Implementing internal controls and process automation initiatives"
    ],
    skills: ["Technical Accounting", "Revenue Recognition", "Month-End Close", "Consolidation", "Internal Controls", "Process Automation"]
  },
  {
    id: "cryptoeq",
    company: "CryptoEQ",
    title: "Partner & Marketing Specialist",
    period: "Jan 2021 – Present",
    location: "Houston, TX",
    type: "Hybrid",
    description: "Driving partnerships and go-to-market strategies to expand distribution and revenue for an independent crypto research and ratings firm.",
    highlights: [
      "Building strategic partnerships across the crypto ecosystem",
      "Developing market analysis and digital marketing initiatives",
      "Expanding firm's reach through innovative distribution channels"
    ],
    skills: ["Accounting", "Bitcoin", "Blockchain", "Crypto", "Market Analysis", "Digital Marketing"]
  },
  {
    id: "orchard",
    company: "Orchard Global",
    title: "Corporate Accounting Manager",
    period: "May 2024 – Dec 2025",
    location: "Houston, TX",
    type: "On-site",
    description: "Transformed corporate accounting operations through standardization, automation, and strategic financial leadership.",
    highlights: [
      "Authored comprehensive ASC 606 revenue recognition manual",
      "Shortened month-end close cycle by 2-3 days through process optimization",
      "Led consolidations and eliminations across US & international entities",
      "Developed monthly management packs with actionable KPIs"
    ],
    skills: ["GAAP", "FP&A", "NetSuite", "SQL", "Budgeting", "Forecasting", "Financial Modeling"]
  },
  {
    id: "drilquip",
    company: "Dril-Quip",
    title: "Senior Financial Reporting Analyst",
    period: "Sep 2023 – May 2024",
    location: "Houston, TX",
    type: "Hybrid",
    description: "Led SEC reporting and technical accounting initiatives for a global oilfield equipment manufacturer.",
    highlights: [
      "Managed SEC filings including 10-K, 10-Q, and 8-K reports",
      "Prepared MD&A narratives and XBRL tie-outs",
      "Drove readiness for ASC 718 and ASC 842 standards"
    ],
    skills: ["SEC Reporting", "GAAP", "Workiva", "Internal Controls", "ASC 718", "ASC 842"]
  },
  {
    id: "usd",
    company: "USD Group LLC",
    title: "Senior Financial Reporting Analyst",
    period: "Sep 2018 – Sep 2023",
    location: "Houston, TX",
    type: "On-site",
    description: "Led financial reporting and technical accounting for a midstream energy infrastructure company over a 5-year tenure.",
    highlights: [
      "Managed SEC filings, earnings materials, and MD&A preparation",
      "Implemented Workiva/XBRL solutions and SOX 404 compliance",
      "Built bitcoin-mining risk models and hedge strategy evaluations",
      "Delivered management reporting packs and technical transaction analysis"
    ],
    skills: ["SEC Reporting", "XBRL", "SOX 404", "Bitcoin", "Risk Modeling", "Workiva"]
  },
  {
    id: "cardtronics",
    company: "Cardtronics",
    title: "Senior Financial Reporting Analyst → Financial Reporting Analyst",
    period: "Jun 2016 – Sep 2018",
    location: "Houston, TX",
    type: "On-site",
    description: "Progressed from analyst to senior role, driving SEC reporting excellence and supporting major corporate transactions.",
    highlights: [
      "Led SEC filings and external auditor liaison",
      "Rebuilt revenue reporting processes for improved efficiency",
      "Supported acquisitions, restructuring, debt, and impairment accounting"
    ],
    skills: ["SEC Reporting", "Revenue Recognition", "M&A", "Restructuring", "Impairment"]
  },
  {
    id: "deloitte",
    company: "Deloitte",
    title: "Audit Senior Associate → Audit Associate",
    period: "Sep 2014 – Jun 2016",
    location: "Houston, TX",
    type: "On-site",
    description: "Built foundational expertise in audit and internal controls at a Big Four accounting firm.",
    highlights: [
      "Conducted financial statement and ICFR audits",
      "Supported SEC filing requirements for public company clients"
    ],
    skills: ["Audit", "ICFR", "SEC Filings", "Financial Statements", "Internal Controls"]
  }
];

export const earlierRoles = [
  {
    company: "GM Trucking",
    title: "Independent Consultant",
    period: "2012 – 2015",
    description: "Developed growth strategies, improved sales approach, and streamlined billing/payroll processes."
  },
  {
    company: "University of Notre Dame",
    title: "Accounting Tutor",
    period: "Oct 2013 – May 2014",
    description: "Tutored upper-level accounting students in advanced financial concepts."
  },
  {
    company: "Deloitte",
    title: "Audit Intern",
    period: "Jun 2013 – Aug 2013",
    description: "Gained hands-on audit experience at a Big Four firm."
  },
  {
    company: "KPMG",
    title: "Corporate Development Intern",
    period: "Jun 2012 – Aug 2012",
    description: "Supported corporate development initiatives and strategic analysis."
  }
];

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const signatureSkills: SkillCategory[] = [
  {
    name: "Reporting & SEC",
    icon: "FileText",
    skills: ["10-K/10-Q/8-K Filings", "MD&A Preparation", "XBRL", "Workiva", "Earnings Materials"]
  },
  {
    name: "Technical Accounting",
    icon: "Calculator",
    skills: ["ASC 606 Revenue", "ASC 718 Stock Comp", "ASC 842 Leases", "GAAP", "Revenue Recognition"]
  },
  {
    name: "Consolidations",
    icon: "Layers",
    skills: ["Multi-Entity Close", "Intercompany Eliminations", "International Entities", "COA Mapping"]
  },
  {
    name: "FP&A",
    icon: "TrendingUp",
    skills: ["Budgeting", "Forecasting", "Financial Modeling", "Cash Flow Analysis", "KPI Development"]
  },
  {
    name: "Crypto & Bitcoin",
    icon: "Bitcoin",
    skills: ["Bitcoin Analysis", "Blockchain", "Risk Modeling", "Hedge Strategies", "Market Research"]
  },
  {
    name: "Systems & Automation",
    icon: "Cpu",
    skills: ["NetSuite", "SQL", "Process Automation", "Internal Controls", "SOX 404"]
  }
];
