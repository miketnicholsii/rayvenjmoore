import { motion } from 'framer-motion';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

interface MetricProps {
  icon: React.ElementType;
  label: string;
  placeholder: string;
  sublabel?: string;
}

const metrics: MetricProps[] = [
  {
    icon: TrendingUp,
    label: 'Years of Experience',
    placeholder: '10+',
    sublabel: 'Finance & Accounting'
  },
  {
    icon: Users,
    label: 'Community Reach',
    placeholder: '—',
    sublabel: 'Lives impacted'
  },
  {
    icon: BookOpen,
    label: 'Workshops Delivered',
    placeholder: '—',
    sublabel: 'Educational sessions'
  },
  {
    icon: Award,
    label: 'Ventures Launched',
    placeholder: '6',
    sublabel: 'Active businesses'
  }
];

interface InsightsChartProps {
  className?: string;
  showPlaceholders?: boolean;
}

export default function InsightsChart({ className = '', showPlaceholders = true }: InsightsChartProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 group overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Icon */}
            <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3 relative z-10">
              <metric.icon className="w-5 h-5 text-primary" />
            </div>

            {/* Value */}
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {showPlaceholders ? metric.placeholder : '—'}
              </div>
              <div className="text-xs font-medium text-foreground mb-0.5">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="text-xs text-muted-foreground">
                  {metric.sublabel}
                </div>
              )}
            </div>

            {/* Decorative Bar (placeholder for future chart) */}
            {showPlaceholders && metric.placeholder !== '—' && (
              <div className="mt-3 h-1 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <p className="text-center text-xs text-muted-foreground mt-4 italic">
        Real metrics coming soon as we continue to grow and track our community impact.
      </p>
    </div>
  );
}
