import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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

export default function SpeakingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="speaking" className="section-padding bg-forest text-primary-foreground">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Speaking & Media
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
              Conversations That Matter
            </h2>
            <div className="w-12 h-1 rounded-full bg-accent mb-8" />

            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Rayven brings clarity and insight to conversations about finance, business, and community. 
              Available for keynotes, panels, podcasts, and workshops.
            </p>

            {/* Speaking Topics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={topic.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <topic.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-body text-sm font-medium text-primary-foreground/90">
                    {topic.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="accent" size="lg" asChild>
              <Link to="/speaking" className="group">
                Invite Rayven to Speak
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Spotify + Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Speaker Card */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">
                    Book a Speaking Engagement
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    Keynotes · Panels · Podcasts · Workshops
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-primary-foreground/70">
                <p>✓ Financial strategy for executives and business owners</p>
                <p>✓ Community leadership and civic engagement</p>
                <p>✓ Navigating digital assets and emerging technologies</p>
                <p>✓ Building confidence through financial clarity</p>
              </div>
            </div>

            {/* What I'm Listening To */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <h4 className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4">
                What I'm Listening To
              </h4>
              <div className="aspect-[3/1] bg-primary-foreground/5 rounded-xl flex items-center justify-center text-primary-foreground/50 text-sm">
                <span>Spotify Playlist Embed</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary-foreground/10 text-primary-foreground/80 font-body text-sm font-medium hover:bg-accent/20 hover:text-accent transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
