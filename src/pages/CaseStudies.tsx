import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Building, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    icon: Users,
    category: 'Individual Client',
    title: 'From Financial Fog to Crystal Clarity',
    challenge: 'A young professional felt overwhelmed by student loans, unclear on retirement options, and anxious about every financial decision.',
    approach: 'We mapped out a complete financial picture, prioritized debt strategies, and created an automated savings plan aligned with their goals.',
    outcome: 'Within 18 months, they had a funded emergency account, a clear debt payoff timeline, and reported feeling "genuinely confident" about money for the first time.',
    transformation: 'Anxiety → Confidence',
  },
  {
    id: 2,
    icon: Building,
    category: 'Small Business',
    title: 'Scaling a Side Hustle Into a Real Business',
    challenge: 'An entrepreneur running a successful side business had no formal bookkeeping, mixed personal/business finances, and was unclear on tax obligations.',
    approach: 'We established proper business entity structure, implemented bookkeeping systems, and created a quarterly review cadence for financial health.',
    outcome: 'The business is now properly structured, tax-efficient, and the owner can make data-driven decisions about growth investments.',
    transformation: 'Chaos → Structure',
  },
  {
    id: 3,
    icon: TrendingUp,
    category: 'Wealth Building',
    title: 'Building Generational Wealth From Scratch',
    challenge: 'A first-generation wealth builder wanted to create lasting financial security but had no framework or family precedent to follow.',
    approach: 'We developed a comprehensive wealth-building roadmap covering investment fundamentals, estate planning basics, and financial literacy for their children.',
    outcome: 'They now have diversified investments, life insurance, and regular family money conversations—building wealth that will outlast them.',
    transformation: 'Uncertain → Intentional',
  },
  {
    id: 4,
    icon: Lightbulb,
    category: 'Community Workshop',
    title: 'Empowering a Community Through Financial Literacy',
    challenge: 'A community organization wanted to offer financial education but didn\'t know where to start or how to make complex topics accessible.',
    approach: 'We designed and delivered a 6-week workshop series covering budgeting, credit, debt management, and investing basics—tailored for beginners.',
    outcome: '90% of participants reported increased confidence in managing their finances; several opened their first investment accounts.',
    transformation: 'Intimidated → Empowered',
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream to-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                Case Studies
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Real Stories of{' '}
                <span className="text-gradient-gold">Transformation</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Every engagement is unique, but the goal is always the same: move from 
                confusion to clarity, from anxiety to confidence. Here are some of the 
                journeys I've been privileged to support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <study.icon className="w-7 h-7 text-gold" />
                      </div>
                      <div className="flex-grow">
                        <span className="font-body text-xs font-semibold tracking-wider uppercase text-gold">
                          {study.category}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mt-1">
                          {study.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                        <span className="font-body text-sm font-medium text-foreground">
                          {study.transformation}
                        </span>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          The Challenge
                        </h3>
                        <p className="font-body text-foreground/80 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          The Approach
                        </h3>
                        <p className="font-body text-foreground/80 leading-relaxed">
                          {study.approach}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          The Outcome
                        </h3>
                        <p className="font-body text-foreground/80 leading-relaxed">
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

        {/* Note about authenticity */}
        <section className="py-12 bg-muted/30">
          <div className="container-narrow text-center">
            <p className="font-body text-sm text-muted-foreground italic">
              Note: These case studies represent composite examples based on real client experiences. 
              Details have been generalized to protect client privacy while illustrating typical transformations.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Ready to Write Your <span className="text-gold">Transformation Story</span>?
              </h2>
              <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
                Every journey to financial clarity starts with a conversation. 
                Let's explore how I can support your goals.
              </p>
              <Button variant="gold" size="xl" asChild>
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
