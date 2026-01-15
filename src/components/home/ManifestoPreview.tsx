import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Quote } from 'lucide-react';

const manifestoHighlights = [
  {
    title: 'Clarity Over Complexity',
    text: 'Financial complexity is often manufactured. My mission is to dismantle it, one conversation at a time.'
  },
  {
    title: 'Education as Empowerment',
    text: "The principles of wealth-building are not secrets—they are skills that should be taught in every home and community."
  },
  {
    title: 'Community Uplift',
    text: 'True wealth includes the prosperity of those around us. I believe in lifting as I climb.'
  },
  {
    title: 'Long-Term Thinking',
    text: 'What we build today should still be standing—and growing—decades from now.'
  }
];

export default function ManifestoPreview() {
  return (
    <section id="manifesto" className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I Believe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Universal Wealth Care</span> Manifesto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision, every venture, and every conversation.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground text-center leading-relaxed italic">
              "A world where financial wellness is not a privilege of the few, but a right of the many. 
              Where every person has access to the knowledge, tools, and support they need to build 
              the future they deserve."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="text-primary font-semibold">— The Universal Wealth Care Vision</p>
            </div>
          </div>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {manifestoHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/manifesto"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-lg"
          >
            Read the Full Manifesto
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
