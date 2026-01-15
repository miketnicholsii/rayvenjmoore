import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import rayvenPortrait from '@/assets/rayven-portrait.jpg';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={rayvenPortrait}
                alt="Rayven J. Moore, CPA - Professional Portrait"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-gold/30 rounded-2xl -z-10" />
            <motion.div
              className="absolute -top-4 -left-4 bg-gold/10 backdrop-blur-sm rounded-xl px-6 py-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-display text-3xl font-semibold text-foreground">10+</p>
              <p className="font-body text-sm text-muted-foreground">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
              About Rayven
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Dedicated to Making Financial Wisdom Accessible
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                As a Certified Public Accountant with over a decade of experience, I've dedicated 
                my career to one mission: transforming the way individuals and businesses understand 
                and navigate complex financial systems.
              </p>
              <p>
                I believe that financial literacy isn't just about numbers—it's about empowerment, 
                confidence, and creating pathways to generational wealth. Too often, financial knowledge 
                is gatekept behind jargon and complexity. My work is about breaking down those barriers.
              </p>
              <p>
                Through strategic advisory, educational initiatives, and community-focused programs, 
                I help people move from confusion to clarity, from anxiety to confidence, and from 
                surviving to thriving.
              </p>
            </div>
            
            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Trust', 'Clarity', 'Community', 'Growth'].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="font-body text-sm font-medium text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
