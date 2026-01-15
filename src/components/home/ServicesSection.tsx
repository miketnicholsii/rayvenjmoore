import { motion } from 'framer-motion';
import { BookOpen, Compass, TrendingUp, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: BookOpen,
    title: 'Financial Education & Literacy',
    description: 'Workshops, seminars, and resources designed to demystify financial concepts and empower informed decision-making.',
  },
  {
    icon: Compass,
    title: 'Strategic Advisory & Guidance',
    description: 'Personalized consultation for individuals and businesses navigating complex financial landscapes with clarity.',
  },
  {
    icon: TrendingUp,
    title: 'Wealth-Building Frameworks',
    description: 'Proven methodologies and systems for sustainable wealth creation, tailored to your unique circumstances.',
  },
  {
    icon: Users,
    title: 'Community Financial Empowerment',
    description: 'Initiatives focused on bringing financial education to underserved communities and creating universal access.',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Clarity Across Every Dimension
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
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
