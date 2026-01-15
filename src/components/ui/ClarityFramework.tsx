import { motion } from 'framer-motion';
import { Eye, Target, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Eye,
    title: 'See Clearly',
    subtitle: 'Assess',
    description: 'Understand your complete financial picture without judgment or overwhelm.',
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    number: '02',
    icon: Target,
    title: 'Plan Precisely',
    subtitle: 'Strategize',
    description: 'Create a customized roadmap aligned with your goals and values.',
    color: 'from-primary/20 to-primary/10'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Move Confidently',
    subtitle: 'Execute',
    description: 'Take consistent action with clarity, accountability, and support.',
    color: 'from-green-500/20 to-green-600/10'
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
              <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] right-0 h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
            )}

            <div className={`relative bg-card border border-border rounded-2xl ${compact ? 'p-4' : 'p-6'} hover:border-primary/30 transition-all duration-300 hover:shadow-lg group`}>
              {/* Step Number Badge */}
              <div className="absolute -top-3 left-4">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className={`${compact ? 'w-10 h-10 mt-2' : 'w-14 h-14 mt-4'} rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <step.icon className={`${compact ? 'w-5 h-5' : 'w-7 h-7'} text-primary`} />
              </div>

              {/* Content */}
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {step.subtitle}
                </span>
                <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-foreground mt-1 mb-2`}>
                  {step.title}
                </h3>
                {!compact && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
