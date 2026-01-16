import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, BookOpen, Lightbulb, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Protection',
    description: 'Build financial security through emergency funds and risk management'
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Invest strategically for long-term wealth accumulation'
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Continuous learning to make informed financial decisions'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Lift as you climb and create generational impact'
  },
  {
    icon: Lightbulb,
    title: 'Clarity',
    description: 'Transform complexity into actionable understanding'
  },
  {
    icon: Heart,
    title: 'Purpose',
    description: 'Align finances with your values and life goals'
  }
];

interface WealthCarePillarsProps {
  className?: string;
  showDescriptions?: boolean;
}

export default function WealthCarePillars({ className = '', showDescriptions = true }: WealthCarePillarsProps) {
  return (
    <div className={className}>
      <div className={`grid grid-cols-2 ${showDescriptions ? 'md:grid-cols-3 lg:grid-cols-6 gap-4' : 'md:grid-cols-6 gap-3'}`}>
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`group text-center ${showDescriptions ? 'p-4' : 'p-3'}`}
          >
            <div className={`${showDescriptions ? 'w-14 h-14' : 'w-10 h-10'} mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300`}>
              <pillar.icon className={`${showDescriptions ? 'w-7 h-7' : 'w-5 h-5'} text-primary`} />
            </div>
            <h4 className={`${showDescriptions ? 'text-sm' : 'text-xs'} font-semibold text-foreground mb-1`}>
              {pillar.title}
            </h4>
            {showDescriptions && (
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
