import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, TrendingUp, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import rayvenPortrait from '@/assets/rayven-portrait.webp';

const credentialBadges = [
  { icon: Shield, label: 'Certified Public Accountant' },
  { icon: GraduationCap, label: 'Notre Dame Alumnus' },
  { icon: TrendingUp, label: 'Finance Executive' },
  { icon: Users, label: 'Civic Leader' },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms - portrait moves slower than scroll
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const decorFrameY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const floatingCardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  
  // Background parallax - slower movement for depth
  const bgGradient1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgGradient2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgGradient3Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-platinum-light to-secondary/30">
      {/* Grain texture overlay for editorial feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-overlay z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Parallax background layer - slowest */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgGradient3Y, opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      </motion.div>

      {/* Subtle background decorations - Navy Blue with parallax */}
      <motion.div
        className="absolute top-20 right-0 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(220 75% 33%) 0%, transparent 70%)',
          y: bgGradient1Y,
          scale: bgScale,
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(220 90% 55%) 0%, transparent 70%)',
          y: bgGradient2Y,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      
      {/* Additional parallax accent orb */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
          y: bgGradient1Y,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-wide pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm font-medium text-muted-foreground tracking-wide">
                CPA · Finance Leader · Houston Businessman
              </span>
            </motion.div>

            {/* Main Headline - Phase 3 Copy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.08] mb-6"
            >
              Clarity for{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Complex</span>
                <motion.span
                  className="absolute bottom-1 md:bottom-2 left-0 h-2 md:h-3 bg-primary/20 -z-0 rounded-sm"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                />
              </span>
              <br />
              <span className="text-primary font-bold">Financial Decisions</span>
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Subheadline - Phase 3 Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-4"
            >
              I'm <span className="text-foreground font-semibold">Rayven J. Moore</span>, a Certified Public Accountant, finance leader, and Houston-based businessman.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-4"
            >
              I help organizations, entrepreneurs, and communities navigate complexity, strengthen decision-making, and build{' '}
              <span className="text-foreground font-medium">durable, long-term value</span>.
            </motion.p>

            {/* Supporting Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-body text-sm text-muted-foreground max-w-lg leading-relaxed mb-8 border-l-2 border-primary/40 pl-4 italic"
            >
              From technical accounting and SEC reporting to strategy, digital assets, and civic leadership — I bring structure, perspective, and calm to high-stakes situations.
            </motion.p>

            {/* CTAs - Phase 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <Button variant="hero" size="xl" className="min-w-[160px]" asChild>
                <Link to="/contact" className="group">
                  Let's Talk
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="min-w-[160px]" asChild>
                <a href="#ventures">Explore My Work</a>
              </Button>
            </motion.div>

            {/* Credential Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3"
            >
              {credentialBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: "0 8px 25px -5px hsl(220 90% 55% / 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-2.5 px-4 py-2 rounded-xl bg-secondary/70 backdrop-blur-md border border-border/50 cursor-pointer hover:border-primary/40 hover:bg-secondary/90 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 0, 0],
                      }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      >
                        <badge.icon size={14} className="text-primary group-hover:text-primary transition-colors" />
                      </motion.div>
                  </motion.div>
                  
                  {/* Label with subtle slide effect */}
                  <motion.span 
                    className="relative z-10 font-body text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  >
                    {badge.label}
                  </motion.span>
                  
                  {/* Animated underline on hover */}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative frame with parallax */}
            <motion.div 
              style={{ y: decorFrameY }}
              className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl blur-2xl"
            />
            <motion.div 
              style={{ y: decorFrameY }}
              className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/20 rounded-2xl -z-10" 
            />
            <motion.div 
              style={{ y: decorFrameY }}
              className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" 
            />
            
            {/* Portrait Image with parallax */}
            <motion.div 
              style={{ y: portraitY }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated"
            >
              <img
                src={rayvenPortrait}
                alt="Rayven J. Moore, CPA - Professional Portrait"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
            </motion.div>

            {/* Floating credential card with parallax */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ y: floatingCardY }}
              className="absolute -bottom-4 -left-4 md:left-8 bg-card/95 backdrop-blur-md rounded-xl px-5 py-4 shadow-lg border border-border"
            >
              <p className="font-body text-xs text-muted-foreground mb-1">Based in</p>
              <p className="font-display text-lg font-semibold text-foreground">Houston, TX</p>
            </motion.div>

            {/* Experience badge with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              style={{ y: floatingCardY }}
              className="absolute -top-2 -right-2 md:right-8 bg-accent text-accent-foreground rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="font-display text-2xl font-bold">12+</p>
              <p className="font-body text-xs opacity-80">Years</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="font-body text-xs tracking-widest uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-2 rounded-full border border-border group-hover:border-primary/50 transition-colors"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
