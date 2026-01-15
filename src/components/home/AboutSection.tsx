import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import rayvenPortrait from '@/assets/rayven-portrait.webp';

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
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/15 to-transparent" />
            </div>
            {/* Decorative element - Evergreen accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-evergreen/25 rounded-2xl -z-10" />
            <motion.div
              className="absolute -top-4 -left-4 bg-evergreen/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-evergreen/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-display text-3xl font-semibold text-foreground">10+</p>
              <p className="font-body text-sm text-muted-foreground">Years Experience</p>
            </motion.div>
          </motion.div>

          {/* Content - Phase 4 Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-evergreen mb-4 block">
              About Rayven
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Clarity Builds Confidence
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-lg">
              <p>
                Rayven J. Moore is a <span className="text-foreground font-medium">Certified Public Accountant</span> with 
                over a decade of experience working at the intersection of finance, strategy, and leadership.
              </p>
              <p>
                Based in Houston and a proud <span className="text-foreground font-medium">University of Notre Dame alumnus</span>, 
                Rayven has built a career solving complex problems — from SEC reporting and technical accounting 
                to business strategy, digital assets, and community development.
              </p>
              <p>
                What sets Rayven apart is not just technical expertise, but{' '}
                <span className="text-foreground font-medium">how he works with people</span>. He believes clarity builds 
                confidence, trust builds momentum, and relationships build durable success.
              </p>
              <p className="text-foreground font-medium">
                Whether advising organizations, educating communities, or leading civic initiatives, 
                Rayven brings the same approach: listen carefully, simplify intelligently, and act with purpose.
              </p>
            </div>
            
            {/* Expertise Areas - Phase 4 Credentials */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'GAAP & SEC Reporting',
                'Technical Accounting',
                'Financial Strategy & Controls',
                'Digital Assets & Crypto',
                'Systems & Automation',
                'Community Leadership'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-evergreen" />
                  <span className="font-body text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
