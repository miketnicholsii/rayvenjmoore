import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Calculator, Layers, TrendingUp, Bitcoin, Cpu, Briefcase } from 'lucide-react';
import { signatureSkills } from '@/data/career';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calculator,
  Layers,
  TrendingUp,
  Bitcoin,
  Cpu
};

const careerHighlights = [
  { company: "Abyss Solutions", role: "Global Finance Controller", period: "2025–Present" },
  { company: "Orchard Global", role: "Corporate Accounting Manager", period: "2024–2025" },
  { company: "USD Group LLC", role: "Senior Financial Reporting Analyst", period: "2018–2023" },
  { company: "Deloitte", role: "Audit Senior Associate", period: "2014–2016" }
];

const CareerSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Career & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Decade of <span className="text-primary">Financial Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise across SEC reporting, technical accounting, FP&A, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Career Timeline Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Career Journey</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary to-border" />

              <div className="space-y-6">
                {careerHighlights.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-6 h-6 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                      <h4 className="font-semibold text-foreground">{item.company}</h4>
                      <p className="text-sm text-primary">{item.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:underline"
            >
              View Full Career Timeline
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Signature Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Signature Skills</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {signatureSkills.map((category, index) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{category.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {category.skills.length > 3 && (
                        <span className="text-muted-foreground text-xs px-1">
                          +{category.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
