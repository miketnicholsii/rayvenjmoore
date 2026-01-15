import { motion } from 'framer-motion';
import { ArrowUpRight, Target, Users, Briefcase, GraduationCap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ventures = [
  {
    title: 'Universal Wealth Care Initiative',
    icon: Users,
    category: 'Community Impact',
    description: 'A movement dedicated to making financial literacy accessible to all, regardless of background, education, or circumstance. Through partnerships with schools, community organizations, and local governments, we bring wealth-building knowledge directly to those who need it most.',
    impact: 'Reaching underserved communities with accessible financial education',
    status: 'Active & Growing',
    featured: true,
  },
  {
    title: 'Financial Clarity Workshops',
    icon: GraduationCap,
    category: 'Education',
    description: 'Interactive, hands-on workshops designed for individuals and small groups. From understanding credit to building investment portfolios, these sessions transform complex concepts into actionable knowledge.',
    impact: 'Empowering individuals with practical financial skills',
    status: 'Ongoing',
  },
  {
    title: 'CPA Advisory Services',
    icon: Briefcase,
    category: 'Professional Services',
    description: 'Strategic financial guidance for growing businesses and ambitious entrepreneurs. From tax strategy to financial planning, I help businesses make informed decisions that support sustainable growth.',
    impact: 'Helping businesses build solid financial foundations',
    status: 'By Consultation',
  },
  {
    title: 'Wealth Building Masterclass',
    icon: Target,
    category: 'Digital Program',
    description: 'A comprehensive curriculum covering everything from emergency funds to estate planning. This self-paced program is designed for those ready to take control of their financial future.',
    impact: 'Creating systematic pathways to generational wealth',
    status: 'Coming Soon',
  },
];

export default function Ventures() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream to-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                Ventures & Initiatives
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Building Toward <br />
                <span className="text-gradient-gold">Universal Wealth Care</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Every initiative I lead is connected by a common thread: the belief that 
                financial clarity should be universal, not exclusive. Here's how I'm working 
                to make that vision a reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ventures Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-8">
              {ventures.map((venture, index) => (
                <motion.div
                  key={venture.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                    venture.featured
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border hover:border-gold/30'
                  }`}
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${
                          venture.featured ? 'bg-gold/20' : 'bg-gold/10'
                        }`}
                      >
                        <venture.icon className={`w-8 h-8 ${venture.featured ? 'text-gold' : 'text-gold'}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className={`font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                              venture.featured
                                ? 'bg-gold/20 text-gold'
                                : 'bg-gold/10 text-gold'
                            }`}
                          >
                            {venture.category}
                          </span>
                          <span
                            className={`font-body text-xs ${
                              venture.featured ? 'text-primary-foreground/60' : 'text-muted-foreground'
                            }`}
                          >
                            {venture.status}
                          </span>
                        </div>
                        <h2
                          className={`font-display text-2xl md:text-3xl font-semibold mb-4 ${
                            venture.featured ? 'text-primary-foreground' : 'text-foreground'
                          }`}
                        >
                          {venture.title}
                        </h2>
                        <p
                          className={`font-body leading-relaxed mb-6 max-w-3xl ${
                            venture.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}
                        >
                          {venture.description}
                        </p>
                        <div className="flex items-center gap-2 font-body text-sm font-medium group-hover:text-gold transition-colors">
                          <span className={venture.featured ? 'text-gold' : 'text-foreground'}>
                            {venture.impact}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              venture.featured ? 'text-gold' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                The Bigger Picture
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                These ventures aren't disconnected efforts—they're pieces of a larger puzzle. 
                Each workshop, each consultation, each community initiative moves us closer to 
                a world where financial wellness is the norm, not the exception. That's 
                Universal Wealth Care in action.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 border border-gold/20">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="font-body text-sm text-gold font-medium">
                  New initiatives launching throughout 2026
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
