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
    <section id="leadership" className="section-padding bg-[#E6CFB8]/20">
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
              className="font-body text-sm font-semibold tracking-widest uppercase text-[#7D5C4E] mb-4 block"
            >
              Leadership & Service
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4B544A] mb-6 leading-tight"
            >
              Leadership Beyond Business
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-1 bg-[#7D5C4E] rounded-full mb-8 origin-left" 
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 font-body text-[#6C7463] leading-relaxed text-lg"
            >
              <p>
                Rayven believes leadership extends beyond the workplace.
              </p>
              
              <p>
                As <span className="text-[#4B544A] font-semibold">President of the Riverside Civic Association</span>, 
                he leads a 501(c)(3) nonprofit serving a historic Houston neighborhood — working with city leaders, 
                law enforcement, and residents to improve safety, infrastructure, and quality of life.
              </p>
              
              <p>
                Earlier in his career, Rayven served as a <span className="text-[#4B544A] font-medium">Volunteer Tax Preparer</span> through 
                Notre Dame's Tax Assistance Program, helping families understand and navigate the tax system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 p-6 bg-[#FAF7F2] border border-[#959D8D]/30 rounded-xl"
            >
              <p className="font-display text-xl font-semibold text-[#4B544A] italic">
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
              className="group bg-[#FAF7F2] border border-[#959D8D]/30 rounded-xl p-6 hover:border-[#7D5C4E]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#6C7463] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6C7463]/80 transition-colors duration-300"
                >
                  <Users className="w-6 h-6 text-[#FAF7F2]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#4B544A] mb-1 group-hover:text-[#7D5C4E] transition-colors duration-300">
                    Riverside Civic Association
                  </h3>
                  <p className="text-sm text-[#7D5C4E] font-medium mb-2">President · 501(c)(3) Nonprofit</p>
                  <p className="text-sm text-[#6C7463]">
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
              className="group bg-[#FAF7F2] border border-[#959D8D]/30 rounded-xl p-6 hover:border-[#7D5C4E]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#7D5C4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7D5C4E]/80 transition-colors duration-300"
                >
                  <Heart className="w-6 h-6 text-[#FAF7F2]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#4B544A] mb-1 group-hover:text-[#7D5C4E] transition-colors duration-300">
                    Volunteer Tax Preparer
                  </h3>
                  <p className="text-sm text-[#7D5C4E] font-medium mb-2">Notre Dame Tax Assistance Program</p>
                  <p className="text-sm text-[#6C7463]">
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
              className="group bg-[#FAF7F2] border border-[#959D8D]/30 rounded-xl p-6 hover:border-[#7D5C4E]/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#959D8D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#959D8D]/80 transition-colors duration-300"
                >
                  <Award className="w-6 h-6 text-[#FAF7F2]" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#4B544A] mb-1 group-hover:text-[#7D5C4E] transition-colors duration-300">
                    Community Impact
                  </h3>
                  <p className="text-sm text-[#7D5C4E] font-medium mb-2">Safety · Infrastructure · Quality of Life</p>
                  <p className="text-sm text-[#6C7463]">
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
