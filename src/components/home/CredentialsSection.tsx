import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, FileText, TrendingUp, Bitcoin, Cpu, Building2 } from 'lucide-react';

const expertiseAreas = [
  { icon: FileText, label: 'GAAP & SEC Reporting' },
  { icon: Shield, label: 'Technical Accounting & Controls' },
  { icon: TrendingUp, label: 'Financial Strategy & Analysis' },
  { icon: Bitcoin, label: 'Digital Assets & Crypto' },
  { icon: Cpu, label: 'Systems, Automation & Scale' },
  { icon: Building2, label: 'Community Leadership' },
];

export default function CredentialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="credentials" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Professional Foundation
          </h2>
          <div className="accent-bar mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CPA Credential Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="card-accent p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-forest flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    Certified Public Accountant
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Texas State Board of Public Accountancy
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">Issued September 2015</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">Credential ID: 105770</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <area.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-body font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {area.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
