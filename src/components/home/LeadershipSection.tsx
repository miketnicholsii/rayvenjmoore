import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Heart, Award } from 'lucide-react';

export default function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="leadership" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Leadership & Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Leadership Beyond Business
            </h2>
            <div className="accent-bar mb-8" />

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-lg">
              <p>
                Rayven believes leadership extends beyond the workplace.
              </p>
              
              <p>
                As <span className="text-foreground font-semibold">President of the Riverside Civic Association</span>, 
                he leads a 501(c)(3) nonprofit serving a historic Houston neighborhood — working with city leaders, 
                law enforcement, and residents to improve safety, infrastructure, and quality of life.
              </p>
              
              <p>
                Earlier in his career, Rayven served as a <span className="text-foreground font-medium">Volunteer Tax Preparer</span> through 
                Notre Dame's Tax Assistance Program, helping families understand and navigate the tax system.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-card border border-border rounded-xl"
            >
              <p className="font-display text-xl font-semibold text-foreground italic">
                "For Rayven, finance is a tool — people and communities are the purpose."
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Card 1 - Civic Leadership */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group card-accent p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Riverside Civic Association
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">President · 501(c)(3) Nonprofit</p>
                  <p className="text-sm text-muted-foreground">
                    Leading community initiatives in Houston's historic Third Ward
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Community Service */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group card-accent p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Volunteer Tax Preparer
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">Notre Dame Tax Assistance Program</p>
                  <p className="text-sm text-muted-foreground">
                    Helping families navigate the tax system with clarity
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Impact Focus */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group card-accent p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    Community Impact
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">Safety · Infrastructure · Quality of Life</p>
                  <p className="text-sm text-muted-foreground">
                    Working with city leaders and residents for lasting change
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
