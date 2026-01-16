import { motion } from 'framer-motion';
import { Shield, FileText, TrendingUp, Bitcoin, Cpu, Building2 } from 'lucide-react';

const expertiseAreas = [
  { icon: FileText, label: 'GAAP & SEC Reporting' },
  { icon: Shield, label: 'Technical Accounting & Controls' },
  { icon: TrendingUp, label: 'Financial Strategy & Analysis' },
  { icon: Bitcoin, label: 'Digital Assets & Crypto' },
  { icon: Cpu, label: 'Systems, Automation & Scale' },
  { icon: Building2, label: 'Community Leadership' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CredentialsSection() {
  return (
    <section id="credentials" className="section-padding bg-warm-beige/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-sm font-semibold tracking-widest uppercase text-terracotta mb-4 block"
          >
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-forest mb-4"
          >
            Professional Foundation
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-16 h-1 rounded-full bg-terracotta mx-auto origin-center" 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CPA Credential Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-cream rounded-2xl p-8 border border-sage/30 shadow-md">
              <div className="flex items-start gap-5">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-xl bg-olive flex items-center justify-center flex-shrink-0"
                >
                  <Shield className="w-8 h-8 text-cream" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-dark-forest mb-2">
                    Certified Public Accountant
                  </h3>
                  <p className="font-body text-olive mb-4">
                    Texas State Board of Public Accountancy
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-terracotta" />
                      <span className="text-olive">Issued September 2015</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-terracotta" />
                      <span className="text-olive">Credential ID: 105770</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Areas of Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-xl font-semibold text-dark-forest mb-6">
              Areas of Expertise
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {expertiseAreas.map((area) => (
                <motion.div
                  key={area.label}
                  variants={itemVariants}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="group flex items-center gap-3 p-4 bg-cream border border-sage/30 rounded-xl hover:border-terracotta/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-olive/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors duration-300">
                    <area.icon className="w-5 h-5 text-olive group-hover:text-terracotta transition-colors duration-300" />
                  </div>
                  <span className="font-body font-medium text-dark-forest group-hover:text-terracotta transition-colors duration-300">
                    {area.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
