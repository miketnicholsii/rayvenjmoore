import { motion } from 'framer-motion';
import { Mic, DollarSign, Brain, Users, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const speakingTopics = [
  { icon: DollarSign, label: 'Financial Clarity & Literacy' },
  { icon: Brain, label: 'Business Decision-Making' },
  { icon: Building, label: 'Crypto & Digital Assets' },
  { icon: Users, label: 'Leadership & Community Development' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rayvenjmoore/' },
  { name: 'Facebook', href: 'https://www.facebook.com/rayvenjmoorecpa' },
  { name: 'X', href: 'https://x.com/rayvenmoore' },
];

const topicVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.1,
      ease: "easeOut" as const,
    },
  }),
};

export default function SpeakingSection() {
  return (
    <section id="speaking" className="section-padding bg-terracotta">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content - Cream text for WCAG AA contrast on terracotta */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-sm font-semibold tracking-widest uppercase text-cream/90 mb-4 block"
            >
              Speaking & Media
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream mb-6 leading-tight"
            >
              Conversations That Matter
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-1 rounded-full bg-warm-beige mb-8 origin-left" 
            />

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-body text-cream text-lg leading-relaxed mb-8"
            >
              Rayven brings clarity and insight to conversations about finance, business, and community. 
              Available for keynotes, panels, podcasts, and workshops.
            </motion.p>

            {/* Speaking Topics - Dark Forest icon containers for contrast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={topic.label}
                  custom={index}
                  variants={topicVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 group"
                >
                  {/* Icon with dark container for visibility */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-lg bg-dark-forest flex items-center justify-center group-hover:bg-olive transition-colors duration-300 shadow-md"
                  >
                    <topic.icon className="w-5 h-5 text-cream" />
                  </motion.div>
                  <span className="font-body text-sm font-medium text-cream">
                    {topic.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA - Cream button for contrast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                asChild 
                className="bg-cream text-dark-forest hover:bg-warm-beige border-0 shadow-lg font-semibold"
              >
                <Link to="/speaking" className="group">
                  Invite Rayven to Speak
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Speaker Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Speaker Card - Cream background for readability */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-cream rounded-2xl p-8 shadow-elevated"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-dark-forest flex items-center justify-center shadow-md"
                >
                  <Mic className="w-8 h-8 text-warm-beige" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-dark-forest">
                    Book a Speaking Engagement
                  </h3>
                  <p className="text-sm text-olive">
                    Keynotes · Panels · Podcasts · Workshops
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-dark-forest">
                <p className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Financial strategy for executives and business owners
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Community leadership and civic engagement
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Navigating digital assets and emerging technologies
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Building confidence through financial clarity
                </p>
              </div>
            </motion.div>

            {/* Social Links - Cream with dark text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-cream text-dark-forest font-body text-sm font-medium hover:bg-warm-beige transition-all duration-300 shadow-md"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
