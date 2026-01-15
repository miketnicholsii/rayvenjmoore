import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const coreValues = [
  { icon: Target, label: 'Clarity-Driven', description: 'Simplifying complexity' },
  { icon: Users, label: 'Relationship-First', description: 'Building trust & momentum' },
  { icon: Award, label: 'Excellence-Focused', description: 'Precision in every detail' },
  { icon: Lightbulb, label: 'Purpose-Led', description: 'Acting with intention' },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-evergreen mb-4 block">
              About Rayven
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Clarity Builds Confidence
            </h2>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg text-center mb-16"
          >
            <p>
              Rayven J. Moore is a <span className="text-foreground font-medium">Certified Public Accountant</span> with 
              over 12 years of experience working at the intersection of finance, strategy, and leadership.
            </p>
            <p>
              Based in Houston and a proud <span className="text-foreground font-medium">University of Notre Dame alumnus</span>, 
              Rayven has built a career solving complex problems — from SEC reporting and technical accounting 
              to business strategy, digital assets, and community development.
            </p>
            <p>
              What sets Rayven apart is not just technical expertise, but{' '}
              <span className="text-foreground font-medium">how he works with people</span>. He believes clarity builds 
              confidence, trust builds momentum, and relationships build durable success.
            </p>
          </motion.div>
          
          {/* Core Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <value.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {value.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
