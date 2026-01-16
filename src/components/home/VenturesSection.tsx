import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin, Users, ShoppingBag } from 'lucide-react';
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: "easeOut" as const,
    },
  }),
};

export default function VenturesSection() {
  return (
    <section id="ventures" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block"
          >
            Work & Ventures
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
          >
            Building Toward Universal Wealth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-muted-foreground text-lg"
          >
            A portfolio of businesses and initiatives designed to create lasting value for clients, communities, and future generations.
          </motion.p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="accent-bar mx-auto mt-6 origin-center" 
          />
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                venture.featured
                  ? 'bg-accent text-accent-foreground md:col-span-2'
                  : 'bg-card border border-border hover:border-primary/30'
              }`}
            >
              <div className="p-8 md:p-10">
                <div className={`flex flex-col ${venture.featured ? 'md:flex-row md:items-start md:gap-8' : ''}`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      venture.featured 
                        ? 'bg-primary/20' 
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    } transition-colors duration-300`}
                  >
                    <venture.icon className={`w-7 h-7 ${venture.featured ? 'text-primary' : 'text-primary'}`} />
                  </motion.div>

                  <div className="flex-1">
                    {/* Tagline */}
                    <p className={`font-body text-sm font-medium tracking-wide uppercase mb-2 ${
                      venture.featured ? 'text-primary' : 'text-primary'
                    }`}>
                      {venture.tagline}
                    </p>

                    {/* Title */}
                    <h3 className={`font-display text-2xl font-semibold mb-4 ${
                      venture.featured ? 'text-accent-foreground' : 'text-foreground group-hover:text-primary'
                    } transition-colors duration-300`}>
                      {venture.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-body leading-relaxed mb-6 ${
                      venture.featured ? 'text-accent-foreground/80' : 'text-muted-foreground'
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

              {/* Blue accent line at bottom */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 ${
                venture.featured ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
