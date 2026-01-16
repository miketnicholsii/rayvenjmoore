import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BreakoutNav from '@/components/layout/BreakoutNav';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ventures } from '@/data/ventures';

export default function Ventures() {
  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="Ventures & Community"
        description="Explore Rayven J. Moore's ventures including tax services, hospitality, community development, fashion, and cryptocurrency research. Building wealth and impact across multiple industries."
        canonical="/ventures"
      />
      <BreakoutNav title="Ventures & Community" backLabel="Back to Home" sectionId="ventures" />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-warm-beige/50 to-cream">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="font-body text-sm font-semibold tracking-widest uppercase text-terracotta mb-4 block">
                Ventures & Community Engagement
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-forest leading-tight mb-6">
                Building Toward <br />
                <span className="text-terracotta">Universal Wealth Care</span>
              </h1>
              <p className="font-body text-lg text-olive leading-relaxed">
                Every venture I'm involved with shares a common thread: creating value, 
                serving communities, and building pathways to prosperity. From tax services 
                to hospitality, fashion to financial education—here's the work that drives me.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ventures Grid */}
        <section className="section-padding bg-cream">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventures.map((venture, index) => (
                <motion.article
                  key={venture.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                    venture.featured
                      ? 'bg-terracotta'
                      : 'bg-cream border border-sage/30 hover:border-terracotta/40'
                  }`}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        venture.featured ? 'bg-cream/20' : 'bg-olive/10'
                      }`}>
                        <venture.icon className={`w-7 h-7 ${venture.featured ? 'text-cream' : 'text-olive'}`} />
                      </div>
                      {venture.featured && (
                        <span className="font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-cream/20 text-cream">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <span className={`font-body text-xs font-semibold tracking-wider uppercase mb-2 ${
                      venture.featured ? 'text-cream/80' : 'text-terracotta'
                    }`}>
                      {venture.category}
                    </span>

                    {/* Title */}
                    <h2 className={`font-display text-xl font-semibold mb-2 ${
                      venture.featured ? 'text-cream' : 'text-dark-forest'
                    }`}>
                      {venture.title}
                    </h2>

                    {/* Tagline */}
                    <p className={`font-body text-sm italic mb-4 ${
                      venture.featured ? 'text-cream/80' : 'text-olive'
                    }`}>
                      {venture.tagline}
                    </p>

                    {/* Description */}
                    <p className={`font-body text-sm leading-relaxed flex-grow ${
                      venture.featured ? 'text-cream/80' : 'text-olive'
                    }`}>
                      {venture.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-4">
                      <Button 
                        variant={venture.featured ? "secondary" : "outline"} 
                        size="sm"
                        asChild
                      >
                        <Link to={`/ventures/${venture.id}`}>
                          {venture.ctaText}
                          <ArrowUpRight size={16} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="section-padding bg-warm-beige/30">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-dark-forest mb-6">
                The Bigger Picture
              </h2>
              <p className="font-body text-lg text-olive leading-relaxed mb-8">
                These ventures aren't disconnected efforts—they're pieces of a larger puzzle. 
                Each business, each initiative, each community engagement moves us closer to 
                a world where financial wellness and opportunity are accessible to everyone. 
                That's Universal Wealth Care in action.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="group">
                  Let's Work Together
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
