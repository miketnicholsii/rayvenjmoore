import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const ventures = [
  {
    title: 'Universal Wealth Care Initiative',
    category: 'Community',
    description: 'A movement to make financial literacy accessible to all, regardless of background or circumstance.',
    featured: true,
  },
  {
    title: 'Financial Clarity Workshops',
    category: 'Education',
    description: 'Interactive sessions breaking down complex financial concepts into actionable knowledge.',
  },
  {
    title: 'CPA Advisory Services',
    category: 'Business',
    description: 'Strategic financial guidance for growing businesses and entrepreneurs.',
  },
  {
    title: 'Wealth Building Masterclass',
    category: 'Program',
    description: 'Comprehensive curriculum for building sustainable, generational wealth.',
  },
];

export default function VenturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
              Ventures & Initiatives
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground max-w-xl">
              Building Toward Universal Wealth Care
            </h2>
          </div>
          <Button variant="heroOutline" asChild>
            <Link to="/ventures">View All Ventures</Link>
          </Button>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                venture.featured
                  ? 'md:col-span-2 lg:col-span-1 bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-gold/30'
              }`}
            >
              <div className="p-8 h-full flex flex-col">
                <span
                  className={`inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 w-fit ${
                    venture.featured
                      ? 'bg-gold/20 text-gold'
                      : 'bg-gold/10 text-gold'
                  }`}
                >
                  {venture.category}
                </span>
                <h3
                  className={`font-display text-xl font-semibold mb-3 ${
                    venture.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {venture.title}
                </h3>
                <p
                  className={`font-body text-sm leading-relaxed flex-grow ${
                    venture.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {venture.description}
                </p>
                <div className="mt-6 flex items-center gap-2 font-body text-sm font-medium group-hover:text-gold transition-colors">
                  <span className={venture.featured ? 'text-gold' : 'text-foreground'}>
                    Learn More
                  </span>
                  <ArrowUpRight
                    size={16}
                    className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      venture.featured ? 'text-gold' : ''
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
