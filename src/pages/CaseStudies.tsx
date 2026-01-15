import { motion } from 'framer-motion';
import { ArrowRight, Target, Zap, Users, Lightbulb, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import ClarityFramework from '@/components/ui/ClarityFramework';
import WealthCarePillars from '@/components/ui/WealthCarePillars';

const caseStudies = [
  {
    id: 1,
    icon: Users,
    category: 'Individual Client',
    title: 'From Financial Fog to Crystal Clarity',
    transformation: 'Anxiety → Confidence',
    challenge: 'A young professional felt overwhelmed by student loans, unclear on retirement options, and anxious about every financial decision.',
    clarityMove: 'We applied the See Clearly framework—mapping their complete financial picture, identifying hidden patterns, and prioritizing what actually mattered.',
    actionPlan: [
      'Created a visual debt payoff roadmap with clear milestones',
      'Automated savings to remove decision fatigue',
      'Established quarterly review cadence for accountability'
    ],
    outcome: 'Within 18 months, they built a funded emergency account, created a clear debt payoff timeline, and now report feeling genuinely confident about money for the first time.'
  },
  {
    id: 2,
    icon: Lightbulb,
    category: 'Small Business',
    title: 'Scaling a Side Hustle Into a Real Business',
    transformation: 'Chaos → Structure',
    challenge: 'An entrepreneur running a successful side business had no formal bookkeeping, mixed personal and business finances, and was unclear on tax obligations.',
    clarityMove: 'We implemented the Plan Precisely framework—establishing proper structure, systems, and a financial foundation designed for growth.',
    actionPlan: [
      'Established proper business entity and separate accounts',
      'Implemented simple bookkeeping system with monthly reconciliation',
      'Created quarterly tax planning and cash flow projections'
    ],
    outcome: 'The business is now properly structured, tax-efficient, and the owner can make data-driven decisions about growth investments with confidence.'
  },
  {
    id: 3,
    icon: Target,
    category: 'Wealth Building',
    title: 'Building Generational Wealth From Scratch',
    transformation: 'Uncertain → Intentional',
    challenge: 'A first-generation wealth builder wanted to create lasting financial security but had no framework or family precedent to follow.',
    clarityMove: 'We designed a comprehensive wealth system using the Move Confidently approach—creating sustainable habits and structures that will outlast any single decision.',
    actionPlan: [
      'Developed personalized investment roadmap aligned with goals and risk tolerance',
      'Established estate planning foundations including life insurance and beneficiaries',
      'Created family money conversations and financial literacy for their children'
    ],
    outcome: 'They now have diversified investments, proper protection in place, and regular family money conversations—building wealth that will outlast them.'
  },
  {
    id: 4,
    icon: Zap,
    category: 'Community Workshop',
    title: 'Empowering a Community Through Financial Literacy',
    transformation: 'Intimidated → Empowered',
    challenge: 'A community organization wanted to offer financial education but did not know where to start or how to make complex topics accessible to beginners.',
    clarityMove: 'We designed curriculum using the Universal Wealth Care pillars—breaking down intimidating topics into digestible, actionable modules that build on each other.',
    actionPlan: [
      'Designed 6-week workshop series covering budgeting, credit, debt, and investing',
      'Created take-home worksheets and accountability partnerships',
      'Established ongoing office hours for continued support'
    ],
    outcome: 'Participants reported dramatically increased confidence in managing their finances, with several opening their first investment accounts during the program.'
  },
  {
    id: 5,
    icon: Users,
    category: 'Crypto Education',
    title: 'Navigating Digital Assets with Data-Driven Clarity',
    transformation: 'Confused → Informed',
    challenge: 'An investor was curious about Bitcoin and cryptocurrency but overwhelmed by conflicting information, scams, and the complexity of the space.',
    clarityMove: 'We applied data-driven analysis and education—cutting through the noise to focus on fundamentals, risk management, and sustainable strategies.',
    actionPlan: [
      'Provided foundational Bitcoin education with real data and research',
      'Developed risk-appropriate allocation strategy within overall portfolio',
      'Established security protocols and best practices for digital asset custody'
    ],
    outcome: 'They now have a clear understanding of digital assets, a rational approach to the space, and the knowledge to evaluate opportunities independently.'
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Case Studies"
        description="Real transformation stories - see how individuals and businesses moved from financial confusion to clarity using proven frameworks and actionable strategies."
        canonical="/case-studies"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Transformation Through <span className="text-primary">Clarity</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real stories of moving from confusion to clarity, from anxiety to confidence. 
                Every journey is unique, but the framework remains the same.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clarity Framework Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Clarity Framework
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every transformation follows this proven three-step process.
              </p>
            </motion.div>
            <ClarityFramework />
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <study.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-semibold tracking-wider uppercase text-primary">
                          {study.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1">
                          {study.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                        <span className="text-sm font-medium text-primary">
                          {study.transformation}
                        </span>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      {/* The Challenge */}
                      <div className="lg:col-span-1">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-400 rounded-full" />
                          The Challenge
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* The Clarity Move */}
                      <div className="lg:col-span-1">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          The Clarity Move
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {study.clarityMove}
                        </p>
                      </div>

                      {/* The Action Plan */}
                      <div className="lg:col-span-1">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full" />
                          The Action Plan
                        </h3>
                        <ul className="space-y-2">
                          {study.actionPlan.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* The Outcome */}
                      <div className="lg:col-span-1">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full" />
                          The Outcome
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Wealth Care Pillars */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Wealth Care Pillars
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every transformation is built on these foundational principles.
              </p>
            </motion.div>
            <WealthCarePillars />
          </div>
        </section>

        {/* Authenticity Note */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
              These case studies represent composite examples based on real client experiences. 
              Details have been generalized to protect client privacy while illustrating typical transformations.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Write Your <span className="text-secondary">Transformation Story</span>?
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
                Every journey to financial clarity starts with a conversation. 
                Let us explore how I can support your goals.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact" className="group">
                  Start the Conversation
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
