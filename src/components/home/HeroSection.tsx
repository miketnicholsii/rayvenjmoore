import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, TrendingUp, Users, Award, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const credentialBadges = [
  { icon: Shield, label: 'Certified Public Accountant' },
  { icon: GraduationCap, label: 'Notre Dame Alumnus' },
  { icon: TrendingUp, label: 'Finance Executive' },
  { icon: Users, label: 'Civic Leader' },
];

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Subtle, not distracting */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background/98 to-background" />
      
      {/* Decorative Elements - Midnight & Evergreen subtle glows */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(207 60% 11% / 0.3) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, hsl(160 60% 15% / 0.25) 0%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-sm mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-evergreen animate-pulse" />
            <span className="font-body text-sm font-medium text-muted-foreground tracking-wide">
              CPA · Finance Executive · Entrepreneur · Houston, TX
            </span>
          </motion.div>

          {/* Main Headline - Phase 4 Copy */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground max-w-5xl mx-auto leading-[1.08] mb-8"
          >
            I Convert{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Complexity</span>
              <motion.span
                className="absolute bottom-2 md:bottom-4 left-0 h-3 md:h-4 bg-evergreen/20 -z-0 rounded-sm"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
              />
            </span>
            <br className="hidden sm:block" />
            Into{' '}
            <span className="text-gradient-gold">Clarity</span>
            <span className="text-gold">.</span>
          </motion.h1>

          {/* Subheadline - Phase 4 Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
          >
            I help individuals, businesses, and communities make{' '}
            <span className="text-foreground font-medium">confident decisions</span>{' '}
            by simplifying complex financial systems and aligning them with real-world goals.
          </motion.p>

          {/* CTAs - Phase 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="min-w-[180px]" asChild>
              <Link to="/contact" className="group">
                Let's Talk
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="min-w-[180px]" asChild>
              <Link to="/ventures">Explore My Work</Link>
            </Button>
          </motion.div>

          {/* Credential Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {credentialBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/60 backdrop-blur-sm border border-border/50"
              >
                <badge.icon size={16} className="text-gold" />
                <span className="font-body text-xs md:text-sm text-muted-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-evergreen transition-colors duration-300 cursor-pointer group"
          aria-label="Scroll to About section"
        >
          <span className="font-body text-xs tracking-widest uppercase">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full border border-border group-hover:border-evergreen/50 transition-colors"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
