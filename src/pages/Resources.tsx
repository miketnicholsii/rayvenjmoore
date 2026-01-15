import { motion } from 'framer-motion';
import { FileText, BookOpen, Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const resourceCategories = [
  {
    title: 'Financial Guides',
    icon: FileText,
    description: 'In-depth articles and guides covering essential financial topics.',
    items: ['Emergency Fund Essentials', 'Understanding Credit Scores', 'Investment Basics'],
    comingSoon: true,
  },
  {
    title: 'Educational Content',
    icon: BookOpen,
    description: 'Video lessons, webinars, and interactive learning materials.',
    items: ['Monthly Webinar Series', 'Video Library', 'Self-Paced Courses'],
    comingSoon: true,
  },
  {
    title: 'Tools & Calculators',
    icon: Calculator,
    description: 'Practical tools to help you plan and track your financial journey.',
    items: ['Budget Planner', 'Retirement Calculator', 'Debt Payoff Tracker'],
    comingSoon: true,
  },
];

export default function Resources() {
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
                Education & Resources
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Your Financial <br />
                <span className="text-gradient-gold">Learning Hub</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Free resources, guides, and tools designed to help you build financial 
                clarity and confidence—at your own pace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="py-8 bg-gold/10 border-y border-gold/20">
          <div className="container-wide">
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="font-body text-sm text-foreground">
                <span className="font-semibold">Resource Hub launching soon!</span>{' '}
                <span className="text-muted-foreground">
                  Sign up below to be notified when new content drops.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden"
                >
                  {category.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Get Notified When Resources Launch
              </h2>
              <p className="font-body text-primary-foreground/70 mb-8 max-w-lg mx-auto">
                Be the first to access new guides, tools, and educational content 
                as they become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow h-14 px-6 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body focus:outline-none focus:border-gold"
                />
                <Button variant="gold" size="xl">
                  Notify Me
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Resource Preview */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-grow">
                  <span className="font-body text-xs font-semibold tracking-wider uppercase text-gold mb-3 block">
                    Featured Preview
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    The 5 Pillars of Financial Clarity
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    A foundational framework for understanding and organizing your financial life. 
                    This guide introduces the core principles I use in all my work—and it will be 
                    completely free when the resource hub launches.
                  </p>
                  <Button variant="heroOutline" asChild>
                    <Link to="/contact" className="group">
                      Get Early Access
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
