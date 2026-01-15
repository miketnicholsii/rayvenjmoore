import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container-narrow relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
            Let's Connect
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Ready to Start a{' '}
            <span className="text-gradient-orange">Meaningful Conversation</span>
            <span className="text-accent">?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Great partnerships begin with a conversation. Whether you're navigating complex decisions 
            or seeking a trusted advisor — I'm here to listen, guide, and build with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact" className="group">
                Start the Conversation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#ventures">Explore Ventures</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
