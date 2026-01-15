import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration - subtle circles */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Let's Start a{' '}
            <span className="text-evergreen-light">Meaningful Conversation</span>
            <span className="text-gold">.</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Great partnerships begin with a conversation. Whether you're navigating complex decisions 
            or seeking a trusted advisor — I'm here to listen, guide, and build with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="evergreen" size="xl" asChild>
              <Link to="/contact" className="group">
                Start the Conversation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/ventures">Explore Ventures</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
