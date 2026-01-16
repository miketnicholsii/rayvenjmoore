import { motion } from 'framer-motion';
import { Users, Heart, Award } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-padding bg-warm-beige/20">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-sm font-semibold tracking-widest uppercase text-terracotta mb-4 block"
            >
              Leadership & Service
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-forest mb-6 leading-tight"
            >
              Leadership Beyond Business
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-1 bg-terracotta rounded-full mb-8 origin-left" 
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 font-body text-olive leading-relaxed text-lg"
            >
              <p>
                Rayven believes leadership extends beyond the workplace.
              </p>
              
              <p>
                As <span className="text-dark-forest font-semibold">President of the Riverside Civic Association</span>, 
                he leads a 501(c)(3) nonprofit serving a historic Houston neighborhood — working with city leaders, 
                law enforcement, and residents to improve safety, infrastructure, and quality of life.
              </p>
              
              <p>
                Earlier in his career, Rayven served as a <span className="text-dark-forest font-medium">Volunteer Tax Preparer</span> through 
                Notre Dame's Tax Assistance Program, helping families understand and navigate the tax system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 p-6 bg-cream border border-sage/30 rounded-xl shadow-sm"
            >
              <p className="font-display text-xl font-semibold text-dark-forest italic">
                "For Rayven, finance is a tool — people and communities are the purpose."
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Cards */}
          <div className="space-y-6">
            {/* Card 1 - Civic Leadership */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* Icon container - Olive background */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-olive flex items-center justify-center flex-shrink-0 group-hover:bg-dark-forest transition-colors duration-300 shadow-sm"
                >
                  <Users className="w-6 h-6 text-cream" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark-forest mb-1 group-hover:text-terracotta transition-colors duration-300">
                    Riverside Civic Association
                  </h3>
                  <p className="text-sm text-terracotta font-medium mb-2">President · 501(c)(3) Nonprofit</p>
                  <p className="text-sm text-olive">
                    Leading community initiatives in Houston's historic Third Ward
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Community Service */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* Icon container - Terracotta for emphasis */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-terracotta flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta-dark transition-colors duration-300 shadow-sm"
                >
                  <Heart className="w-6 h-6 text-cream" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark-forest mb-1 group-hover:text-terracotta transition-colors duration-300">
                    Volunteer Tax Preparer
                  </h3>
                  <p className="text-sm text-terracotta font-medium mb-2">Notre Dame Tax Assistance Program</p>
                  <p className="text-sm text-olive">
                    Helping families navigate the tax system with clarity
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Impact Focus */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* Icon container - Sage variety */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-sage flex items-center justify-center flex-shrink-0 group-hover:bg-olive transition-colors duration-300 shadow-sm"
                >
                  <Award className="w-6 h-6 text-cream" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-dark-forest mb-1 group-hover:text-terracotta transition-colors duration-300">
                    Community Impact
                  </h3>
                  <p className="text-sm text-terracotta font-medium mb-2">Safety · Infrastructure · Quality of Life</p>
                  <p className="text-sm text-olive">
                    Working with city leaders and residents for lasting change
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
