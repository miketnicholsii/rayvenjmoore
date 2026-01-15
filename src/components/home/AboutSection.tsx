import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block"
            >
              About Rayven
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight"
            >
              A Professional Who Solves Problems —<br className="hidden md:block" /> and Builds Relationships
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="accent-bar mx-auto origin-left" 
            />
          </motion.div>
          
          {/* Content - Phase 4 Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Rayven J. Moore is a <span className="text-foreground font-semibold">Certified Public Accountant</span> with 
              over a decade of experience working across finance, accounting, strategy, and leadership.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A proud <span className="text-foreground font-semibold">University of Notre Dame alumnus</span> and longtime Houston resident, 
              Rayven has built his career helping people and organizations make sense of complex systems — not just through numbers, 
              but through context, collaboration, and trust.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              He has worked across public and private companies, advised leadership teams, supported regulatory reporting, 
              explored digital assets, and led community initiatives. What connects all of this work is a simple belief: 
              <span className="text-foreground font-medium"> clarity builds confidence, and confidence drives better outcomes.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
