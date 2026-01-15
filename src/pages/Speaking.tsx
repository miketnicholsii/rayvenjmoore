import { motion } from 'framer-motion';
import { Mic, Video, Radio, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const speakingTopics = [
  'Financial Literacy for All: Breaking Down Barriers to Wealth',
  'Converting Complexity Into Clarity: A CPA\'s Approach',
  'Building Universal Wealth Care: Vision for Financial Equity',
  'Entrepreneurship & Financial Wellness',
  'Community-Centered Approaches to Financial Education',
  'Long-Term Thinking: Building Generational Wealth',
];

const mediaFormats = [
  { icon: Mic, title: 'Keynote Speaking', description: 'Conferences, summits, and corporate events' },
  { icon: Radio, title: 'Podcast Appearances', description: 'Long-form conversations about finance and education' },
  { icon: Video, title: 'Panel Discussions', description: 'Industry panels and expert roundtables' },
  { icon: BookOpen, title: 'Workshops', description: 'Interactive educational sessions for organizations' },
];

export default function Speaking() {
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
                Speaking & Media
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Bringing <span className="text-gradient-gold">Clarity</span> <br />
                to Your Stage
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                As a speaker and thought leader, I'm passionate about making financial 
                concepts accessible and actionable. Whether it's a keynote, panel, or 
                workshop—I bring clarity to every stage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formats */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                How We Can Work Together
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaFormats.map((format, index) => (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <format.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {format.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {format.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                  Featured Topics
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Topics That Resonate
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  From broad themes of financial equity to tactical wealth-building strategies, 
                  I tailor every presentation to meet your audience where they are—and leave 
                  them with actionable clarity.
                </p>
                <ul className="space-y-4">
                  {speakingTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
              >
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
                  What Audiences Say
                </h3>
                <blockquote className="font-body text-primary-foreground/80 leading-relaxed mb-6 border-l-4 border-gold pl-6">
                  "Rayven has a gift for making complex financial concepts feel approachable 
                  and actionable. Our team left his workshop with real tools they could 
                  apply immediately."
                </blockquote>
                <p className="font-body text-sm text-primary-foreground/60">
                  — Workshop Feedback, Corporate Financial Wellness Program
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Let's Bring Clarity to Your Event
              </h2>
              <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
                Whether you're planning a conference, corporate event, or community workshop—
                I'd love to discuss how we can create impact together.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Inquire About Speaking
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
