import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    icon: TrendingUp,
    title: 'SEC Reporting Transformation',
    challenge: 'A mid-market energy company faced mounting pressure from auditors and regulators due to inconsistent financial reporting.',
    complexity: 'Multiple legacy systems, inconsistent processes, and a tight deadline for 10-K filing.',
    approach: 'Implemented standardized workflows, built cross-functional alignment, and established clear documentation protocols.',
    outcome: 'On-time SEC filing, reduced audit findings, and a sustainable reporting framework for future quarters.',
  },
  {
    icon: Shield,
    title: 'Revenue Recognition Clarity',
    challenge: 'A growing services firm struggled to implement ASC 606 across diverse contract structures.',
    complexity: 'Varied contract terms, multiple performance obligations, and unclear internal ownership.',
    approach: 'Authored a comprehensive revenue recognition manual, trained staff, and created decision trees for contract analysis.',
    outcome: 'Clean audit opinion, confident finance team, and a scalable framework for new contract types.',
  },
  {
    icon: Lightbulb,
    title: 'Digital Asset Strategy',
    challenge: 'An energy infrastructure company explored Bitcoin mining as a treasury strategy but lacked internal expertise.',
    complexity: 'Novel asset class, unclear accounting treatment, and board-level skepticism.',
    approach: 'Built risk models, evaluated hedge strategies, and delivered clear management presentations bridging technical and business perspectives.',
    outcome: 'Informed leadership decision-making and a documented framework for future digital asset initiatives.',
  },
];

export default function CaseStudiesPreview() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Case Studies
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            From Complexity to Clarity
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Real stories of confidence gained, risk reduced, and decisions clarified.
          </p>
          <div className="accent-bar mx-auto mt-6" />
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group card-accent p-8"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300"
              >
                <study.icon className="w-7 h-7 text-accent" />
              </motion.div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 group-hover:text-accent transition-colors duration-300">
                {study.title}
              </h3>

              {/* Structure */}
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">The Challenge</p>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">The Complexity</p>
                  <p className="text-muted-foreground">{study.complexity}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">The Approach</p>
                  <p className="text-muted-foreground">{study.approach}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-accent mb-1">The Outcome</p>
                  <p className="text-foreground font-medium">{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/case-studies" className="group">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
