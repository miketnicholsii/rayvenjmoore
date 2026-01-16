import { motion } from 'framer-motion';
import { BookOpen, Compass, TrendingUp, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: BookOpen,
    title: 'Financial Education & Literacy',
    description: 'Workshops, seminars, and resources that demystify financial concepts—making knowledge accessible so you can make informed decisions with confidence.',
  },
  {
    icon: Compass,
    title: 'Advisory & Strategy',
    description: 'Personalized consultation for individuals and businesses navigating complex financial landscapes. From tax strategy to growth planning, get clarity on your path forward.',
  },
  {
    icon: TrendingUp,
    title: 'Wealth-Building Frameworks',
    description: 'Proven methodologies and clarity systems for sustainable wealth creation—tailored to your unique circumstances and long-term goals.',
  },
  {
    icon: Users,
    title: 'Community Impact & Empowerment',
    description: 'Initiatives focused on bringing financial education to underserved communities, creating universal access to the tools and knowledge that build generational wealth.',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            How I Help
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Clarity Across Every Dimension
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Whether you're an individual seeking financial clarity or a business ready to scale, 
            these are the ways I can support your journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-elevated p-8 group border border-border hover:border-primary/30 cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <service.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
