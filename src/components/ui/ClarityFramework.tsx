import { motion } from 'framer-motion';
import { Eye, Target, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Eye,
    title: 'See Clearly',
    subtitle: 'Assess',
    description: 'Understand your complete financial picture without judgment or overwhelm.',
    color: 'from-olive/20 to-olive/10'
  },
  {
    number: '02',
    icon: Target,
    title: 'Plan Precisely',
    subtitle: 'Strategize',
    description: 'Create a customized roadmap aligned with your goals and values.',
    color: 'from-terracotta/20 to-terracotta/10'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Move Confidently',
    subtitle: 'Execute',
    description: 'Take consistent action with clarity, accountability, and support.',
    color: 'from-dark-forest/20 to-dark-forest/10'
  }
];

interface ClarityFrameworkProps {
  className?: string;
  compact?: boolean;
}

export default function ClarityFramework({ className = '', compact = false }: ClarityFrameworkProps) {
  return (
    <div className={className}>
      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-3 gap-4' : 'md:grid-cols-3 gap-6 lg:gap-8'}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative"
          >
            {/* Connector Line (desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] right-0 h-0.5 bg-gradient-to-r from-sage to-transparent z-0" />
            )}

            <div className={`relative bg-cream border border-sage/30 rounded-2xl ${compact ? 'p-4' : 'p-6'} hover:border-terracotta/30 transition-all duration-300 hover:shadow-lg group`}>
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-4">
                <span className="inline-block px-3 py-1 bg-terracotta text-cream text-xs font-bold rounded-full">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`${compact ? 'w-10 h-10 mt-2' : 'w-14 h-14 mt-4'} rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <step.icon className={`${compact ? 'w-5 h-5' : 'w-7 h-7'} text-olive`} />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs font-medium text-olive uppercase tracking-wider">
                  {step.subtitle}
                </span>
                <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-dark-forest mt-1 mb-2`}>
                  {step.title}
                </h3>
                {!compact && (
                  <p className="text-sm text-olive leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
