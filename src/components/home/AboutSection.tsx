import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              About Rayven
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              A Professional Who Solves Problems —<br className="hidden md:block" /> and Builds Relationships
            </h2>
            <div className="accent-bar mx-auto" />
          </motion.div>
          
          {/* Content - Phase 4 Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              Rayven J. Moore is a <span className="text-foreground font-semibold">Certified Public Accountant</span> with 
              over a decade of experience working across finance, accounting, strategy, and leadership.
            </p>
            
            <p>
              A proud <span className="text-foreground font-semibold">University of Notre Dame alumnus</span> and longtime Houston resident, 
              Rayven has built his career helping people and organizations make sense of complex systems — not just through numbers, 
              but through context, collaboration, and trust.
            </p>
            
            <p>
              He has worked across public and private companies, advised leadership teams, supported regulatory reporting, 
              explored digital assets, and led community initiatives. What connects all of this work is a simple belief: 
              <span className="text-foreground font-medium"> clarity builds confidence, and confidence drives better outcomes.</span>
            </p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-l-4 border-accent pl-6 py-2 my-8 bg-secondary/30 rounded-r-lg"
            >
              <p className="text-foreground font-medium italic text-xl">
                "Rayven is known not only for technical expertise, but for being a connector — someone who listens carefully, 
                explains clearly, and helps people move forward with intention."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
