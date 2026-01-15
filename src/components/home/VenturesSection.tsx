import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const ventures = [
  {
    id: 'count-it-all-joy',
    title: 'Count It All Joy Tax Group',
    category: 'Tax & Accounting',
    description: 'Tailored tax and accounting services in Houston since 1999. Large enough to offer full professional services, small enough for personalized attention.',
    featured: true,
  },
  {
    id: 'moore-manor',
    title: 'Moore Manor Hospitality',
    category: 'Hospitality',
    description: 'Enhancing travel experiences in Houston for business and leisure guests with thoughtfully curated properties.',
  },
  {
    id: 'riverside-civic',
    title: 'Riverside Civic Association',
    category: 'Nonprofit',
    description: 'Supporting the Riverside Terrace community in Houston\'s Third Ward through volunteer efforts and historic preservation.',
  },
  {
    id: 'universal-wealthcare',
    title: 'Universal WealthCare',
    category: 'Education',
    description: 'Your resource for Bitcoin, personal finance, and wealth-building strategies with clarity and data-driven analysis.',
  },
];

export default function VenturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="ventures" className="section-padding bg-background">
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
              Ventures & Community
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
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                venture.featured
                  ? 'md:col-span-2 lg:col-span-1 bg-primary text-primary-foreground'
                  : 'bg-card border border-border hover:border-gold/30'
              }`}
            >
              <Link to={`/ventures/${venture.id}`} className="block p-8 h-full">
                <div className="flex flex-col h-full">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 w-fit transition-all duration-300 ${
                      venture.featured
                        ? 'bg-gold/20 text-gold'
                        : 'bg-gold/10 text-gold group-hover:bg-gold/20'
                    }`}
                  >
                    {venture.category}
                  </motion.span>
                  <h3
                    className={`font-display text-xl font-semibold mb-3 transition-colors duration-300 ${
                      venture.featured ? 'text-primary-foreground' : 'text-foreground group-hover:text-gold'
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
                      className={`transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        venture.featured ? 'text-gold' : ''
                      }`}
                    />
                  </div>
                </div>
              </Link>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
