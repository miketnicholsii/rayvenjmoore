import { motion } from 'framer-motion';
import { FileText, Calculator, Layers, TrendingUp, Bitcoin, Cpu } from 'lucide-react';
import { signatureSkills } from '@/data/career';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calculator,
  Layers,
  TrendingUp,
  Bitcoin,
  Cpu
};

// Proficiency levels for visual bars (simulated expertise levels)
const proficiencyLevels: Record<string, number> = {
  "Reporting & SEC": 95,
  "Technical Accounting": 92,
  "Consolidations": 88,
  "FP&A": 85,
  "Crypto & Bitcoin": 80,
  "Systems & Automation": 82,
};

export default function SkillsVisualization() {
  return (
    <div className="space-y-5">
      {signatureSkills.map((category, index) => {
        const IconComponent = iconMap[category.icon];
        const proficiency = proficiencyLevels[category.name] || 75;
        
        return (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            {/* Skill Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </span>
              </div>
              <motion.span 
                className="text-sm font-medium text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {proficiency}%
              </motion.span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
              {/* Animated fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary to-gold rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.2, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ left: '-20%' }}
                animate={{ left: '120%' }}
                transition={{ 
                  delay: index * 0.1 + 1,
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut'
                }}
              />
            </div>
            
            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {category.skills.slice(0, 4).map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.4 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
              {category.skills.length > 4 && (
                <span className="px-2 py-0.5 text-xs text-muted-foreground">
                  +{category.skills.length - 4} more
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
