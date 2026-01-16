import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase } from 'lucide-react';
import SkillsVisualization from '@/components/ui/SkillsVisualization';

const careerHighlights = [
  { company: "Abyss Solutions", role: "Global Finance Controller", period: "2025–Present" },
  { company: "Orchard Global", role: "Corporate Accounting Manager", period: "2024–2025" },
  { company: "USD Group LLC", role: "Senior Financial Reporting Analyst", period: "2018–2023" },
  { company: "Deloitte", role: "Audit Senior Associate", period: "2014–2016" }
];

const CareerSection = () => {
  return (
    <section id="career" className="py-20 md:py-28 bg-warm-beige/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
            Career & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-forest mb-4">
            12+ Years of <span className="text-terracotta">Financial Leadership</span>
          </h2>
          <p className="text-lg text-olive max-w-2xl mx-auto">
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
              <Briefcase className="w-6 h-6 text-terracotta" />
              <h3 className="text-xl font-semibold text-dark-forest">Career Journey</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3 top-3 bottom-3 w-0.5 bg-gradient-to-b from-olive to-sage" />

              <div className="space-y-6">
                {careerHighlights.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="relative pl-10 group cursor-pointer"
                  >
                    {/* Dot */}
                    <motion.div 
                      className="absolute left-0 top-2 w-6 h-6 bg-cream border-2 border-olive rounded-full flex items-center justify-center transition-all duration-300 group-hover:border-terracotta group-hover:scale-110"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-2 h-2 bg-olive rounded-full group-hover:bg-terracotta transition-colors" />
                    </motion.div>

                    <div className="bg-cream border border-sage/30 rounded-lg p-4 hover:border-terracotta/50 hover:shadow-md transition-all duration-300">
                      <span className="text-xs text-olive">{item.period}</span>
                      <h4 className="font-semibold text-dark-forest group-hover:text-terracotta transition-colors">{item.company}</h4>
                      <p className="text-sm text-terracotta">{item.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 mt-8 text-terracotta font-medium group"
            >
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-terracotta after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                View Full Career Timeline
              </span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Signature Skills - Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-dark-forest mb-6">Signature Skills</h3>
            <SkillsVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
