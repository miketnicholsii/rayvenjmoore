import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ClarityMetric from '@/components/ui/ClarityMetric';

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
              Philosophy & Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Accessible Knowledge, 
              <br />
              <span className="text-gradient-gold">Lasting Change</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                I believe that financial education should be a right, not a privilege. 
                When people understand their money, they make better decisions—not just 
                for themselves, but for their families and communities.
              </p>
              <p>
                My approach centers on sustainability and long-term thinking. Quick fixes 
                don't build wealth; knowledge, discipline, and confidence do. Every workshop, 
                every consultation, every initiative I lead is designed to create ripple 
                effects that last for generations.
              </p>
              <p className="font-medium text-foreground">
                This is what I mean by Universal Wealth Care—a world where everyone has 
                access to the knowledge they need to build the future they deserve.
              </p>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-3xl" />
            
            <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
                The Clarity Impact
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <ClarityMetric
                  value={95}
                  label="Confidence Gained"
                  suffix="%"
                  delay={0}
                />
                <ClarityMetric
                  value={87}
                  label="Clarity Achieved"
                  suffix="%"
                  delay={0.2}
                />
                <ClarityMetric
                  value={92}
                  label="Goals Defined"
                  suffix="%"
                  delay={0.4}
                />
              </div>
              <p className="font-body text-xs text-muted-foreground text-center mt-8">
                Based on feedback from workshop participants and advisory clients
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
