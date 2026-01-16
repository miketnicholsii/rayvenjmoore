import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ClarityMetricProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

export default function ClarityMetric({ value, label, suffix = '', delay = 0 }: ClarityMetricProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  // Calculate stroke offset for progress arc (circumference = 2 * PI * 45 ≈ 283)
  const circumference = 283;
  const progress = circumference - (value / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-sage/30"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#terracottaGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isVisible ? { strokeDashoffset: progress } : {}}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="terracottaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(14, 33%, 40%)" />
              <stop offset="100%" stopColor="hsl(14, 33%, 50%)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Value text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-display text-2xl md:text-3xl font-semibold text-dark-forest"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.5 }}
          >
            {value}{suffix}
          </motion.span>
        </div>
      </div>
      <p className="mt-3 font-body text-sm text-olive text-center">{label}</p>
    </motion.div>
  );
}
