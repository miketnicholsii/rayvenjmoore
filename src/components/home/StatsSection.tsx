import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  {
    icon: TrendingUp,
    value: 12,
    suffix: '+',
    label: 'Years of Experience',
    description: 'In finance, accounting & leadership',
  },
  {
    icon: Briefcase,
    value: 50,
    suffix: '+',
    label: 'Clients Served',
    description: 'Individuals & businesses',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Community Members',
    description: 'Impacted through civic work',
  },
  {
    icon: Award,
    value: 4,
    suffix: '',
    label: 'Active Ventures',
    description: 'Building lasting value',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-dark-forest relative overflow-hidden">
      {/* Background decorations - subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-terracotta rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-sm font-semibold tracking-widest uppercase text-warm-beige mb-4 block"
          >
            Impact & Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl font-semibold text-cream"
          >
            Numbers That Tell a Story
          </motion.h2>
        </motion.div>

        {/* Stats Grid - High Contrast Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-cream rounded-2xl p-6 md:p-8 shadow-elevated text-center"
            >
              {/* Icon Container - Dark Forest background */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-xl bg-dark-forest flex items-center justify-center mx-auto mb-5 group-hover:bg-olive transition-colors duration-300 shadow-md"
              >
                <stat.icon className="w-7 h-7 text-cream" />
              </motion.div>

              {/* Counter - Terracotta for accent */}
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="font-display text-4xl md:text-5xl font-bold text-terracotta"
                />
              </div>

              {/* Label - Dark Forest for contrast */}
              <h3 className="font-display text-lg font-semibold text-dark-forest mb-1 group-hover:text-olive transition-colors duration-300">
                {stat.label}
              </h3>
              
              {/* Description - Olive for body text */}
              <p className="font-body text-sm text-olive">
                {stat.description}
              </p>

              {/* Accent line - Terracotta */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent origin-center rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
