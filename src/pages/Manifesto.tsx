import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const manifestoSections = [
  {
    title: "On Money",
    content: "Money is not the goal—it's a tool. A tool that, when understood, unlocks doors that would otherwise remain closed. I believe everyone deserves the knowledge to wield this tool with confidence and purpose."
  },
  {
    title: "On Clarity",
    content: "Financial complexity is often manufactured. Systems are made confusing not because they have to be, but because confusion creates dependency. My mission is to dismantle that complexity, one conversation at a time. Clarity is freedom."
  },
  {
    title: "On Education",
    content: "Knowledge hoarded is knowledge wasted. The principles of wealth-building are not secrets—they're skills that should be taught in every home, every school, every community center. I am committed to making financial education accessible, relatable, and actionable."
  },
  {
    title: "On Community",
    content: "Individual success built on community neglect is hollow. True wealth includes the prosperity of those around us. I believe in lifting as I climb, in creating paths for others to follow, and in building systems that serve the many, not just the few."
  },
  {
    title: "On Trust",
    content: "Trust is earned through consistency, transparency, and genuine care. In an industry often marked by opacity and self-interest, I choose a different path. My word is my bond. My work speaks for itself."
  },
  {
    title: "On Long-Term Thinking",
    content: "Quick fixes fade. Generational change endures. Every decision I make, every initiative I lead, is evaluated through the lens of sustainability. What we build today should still be standing—and growing—decades from now."
  },
  {
    title: "On Universal Wealth Care",
    content: "This is my north star: a world where financial wellness is not a privilege of the few, but a right of the many. Where every person, regardless of their starting point, has access to the knowledge, tools, and support they need to build the future they deserve. This is Universal Wealth Care. This is the mission."
  }
];

export default function Manifesto() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Manifesto"
        description="The Universal Wealth Care Manifesto - principles on money, clarity, education, community, trust, and long-term thinking that guide Rayven J. Moore's mission."
        canonical="/manifesto"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream to-background">
          <div className="container-narrow text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block"
            >
              A Personal Manifesto
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"
            >
              What I Believe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
            >
              These are the principles that guide my work, my decisions, and my vision 
              for a more financially empowered world.
            </motion.p>
          </div>
        </section>

        {/* Manifesto Content */}
        <section className="section-padding">
          <div className="container-narrow">
            {manifestoSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-16 last:mb-0"
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 gold-underline inline-block">
                  {section.title}
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mt-6">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 pt-12 border-t border-border text-center"
            >
              <p className="font-display text-xl italic text-muted-foreground mb-4">
                "Converting complexity into clarity, one person at a time."
              </p>
              <p className="font-display text-2xl font-semibold text-foreground">
                — Rayven J. Moore<span className="text-gold">,</span> CPA
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
