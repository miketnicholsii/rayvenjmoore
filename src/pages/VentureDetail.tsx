import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import BreakoutNav from '@/components/layout/BreakoutNav';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getVentureById, ventures } from '@/data/ventures';

export default function VentureDetail() {
  const { id } = useParams<{ id: string }>();
  const venture = id ? getVentureById(id) : undefined;

  if (!venture) {
    return <Navigate to="/ventures" replace />;
  }

  // Get related ventures (excluding current)
  const relatedVentures = ventures.filter(v => v.id !== venture.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <BreakoutNav title={venture.title} backLabel="Back to Ventures" backTo="/ventures" />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-wide">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link 
                to="/ventures" 
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Ventures
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                {/* Icon & Category */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <venture.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary">
                      {venture.category}
                    </span>
                    {venture.featured && (
                      <span className="ml-3 font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                        Featured Venture
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
                  {venture.title}
                </h1>

                {/* Tagline */}
                <p className="font-body text-xl text-primary italic mb-8">
                  {venture.tagline}
                </p>

                {/* Full Description */}
                <div className="prose prose-lg max-w-none">
                  {venture.fullDescription.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="font-body text-muted-foreground leading-relaxed mb-6"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-32 space-y-6">
                  {/* CTA Card */}
                  <div className="bg-accent text-accent-foreground rounded-2xl p-8">
                    <h3 className="font-display text-xl font-semibold mb-4">
                      Ready to Connect?
                    </h3>
                    <p className="font-body text-sm text-accent-foreground/70 mb-6">
                      Take the next step and explore what {venture.title} has to offer.
                    </p>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full"
                      asChild
                    >
                      <a 
                        href={venture.ctaLink} 
                        target={venture.ctaLink.startsWith('http') ? '_blank' : undefined}
                        rel={venture.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {venture.ctaText}
                        {venture.ctaLink.startsWith('http') && <ExternalLink size={16} className="ml-2" />}
                      </a>
                    </Button>
                  </div>

                  {/* Highlights */}
                  {venture.highlights && (
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                        Highlights
                      </h3>
                      <ul className="space-y-3">
                        {venture.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Ventures */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8"
            >
              Explore More Ventures
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVentures.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    to={`/ventures/${related.id}`}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <related.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-body text-xs font-semibold tracking-wider uppercase text-primary">
                        {related.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2">
                      {related.tagline}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}