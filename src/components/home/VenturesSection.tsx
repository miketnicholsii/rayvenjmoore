import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin, Users, ShoppingBag } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

const ventures = [
  {
    id: 'count-it-all-joy',
    icon: Calendar,
    title: 'The Count It All Joy Tax Group',
    tagline: 'Professional. Reliable. Trustworthy.',
    description: 'The Count It All Joy Tax Group has provided tailored tax and accounting services to clients in Houston, Texas since 1999. With deep expertise and a client-first approach, the firm supports both individuals and businesses — no matter how complex the need.',
    cta: 'Book An Appointment',
    ctaLink: '/ventures/count-it-all-joy',
    featured: true,
  },
  {
    id: 'moore-manor',
    icon: MapPin,
    title: 'Moore Manor Hospitality',
    tagline: 'Where Comfort Meets Experience.',
    description: 'Moore Manor Hospitality enhances the travel experience for visitors to Houston. Whether for business or leisure, its properties are thoughtfully located to offer comfort, convenience, and a sense of place in the city.',
    cta: 'Learn More',
    ctaLink: '/ventures/moore-manor',
  },
  {
    id: 'riverside-civic',
    icon: Users,
    title: 'Riverside Civic Association',
    tagline: 'Preserving Community. Strengthening Voices.',
    description: 'The Riverside Civic Association is a nonprofit organization serving the Riverside Terrace community in Houston\'s historic Third Ward. Its mission is to bring residents together, advocate for neighborhood priorities, and preserve the area\'s unique character and history.',
    cta: 'Get Involved',
    ctaLink: '/ventures/riverside-civic',
  },
  {
    id: 'houston-drip',
    icon: ShoppingBag,
    title: 'Houston Drip Factory',
    tagline: 'Culture. Style. Expression.',
    description: 'Houston Drip Factory is an art and fashion hub designed for discovery and inspiration. From the latest trends to timeless pieces, it helps individuals express their personal style with confidence.',
    cta: 'Shop With Us',
    ctaLink: '/ventures/houston-drip',
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Work & Ventures
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Building Toward Universal Wealth
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A portfolio of businesses and initiatives designed to create lasting value for clients, communities, and future generations.
          </p>
          <div className="accent-bar mx-auto mt-6" />
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                venture.featured
                  ? 'bg-forest text-primary-foreground md:col-span-2'
                  : 'bg-card border border-border hover:border-accent/30'
              }`}
            >
              <div className="p-8 md:p-10">
                <div className={`flex flex-col ${venture.featured ? 'md:flex-row md:items-start md:gap-8' : ''}`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      venture.featured 
                        ? 'bg-accent/20' 
                        : 'bg-accent/10 group-hover:bg-accent/20'
                    } transition-colors duration-300`}
                  >
                    <venture.icon className={`w-7 h-7 ${venture.featured ? 'text-accent' : 'text-accent'}`} />
                  </motion.div>

                  <div className="flex-1">
                    {/* Tagline */}
                    <p className={`font-body text-sm font-medium tracking-wide uppercase mb-2 ${
                      venture.featured ? 'text-accent' : 'text-accent'
                    }`}>
                      {venture.tagline}
                    </p>

                    {/* Title */}
                    <h3 className={`font-display text-2xl font-semibold mb-4 ${
                      venture.featured ? 'text-primary-foreground' : 'text-foreground group-hover:text-accent'
                    } transition-colors duration-300`}>
                      {venture.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-body leading-relaxed mb-6 ${
                      venture.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {venture.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant={venture.featured ? 'accent' : 'heroOutline'}
                      size="default"
                      className="group/btn"
                      asChild
                    >
                      <a href={venture.ctaLink}>
                        {venture.cta}
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Orange accent line at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-accent transform origin-left transition-transform duration-300 ${
                venture.featured ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
