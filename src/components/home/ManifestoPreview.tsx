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
    <section id="manifesto" className="py-20 md:py-28 bg-gradient-to-b from-cream via-warm-beige/20 to-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
            What I Believe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-forest mb-4">
            The <span className="text-terracotta">Universal Wealth Care</span> Manifesto
          </h2>
          <p className="text-lg text-olive max-w-2xl mx-auto">
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
          <div className="relative bg-cream border border-sage/30 rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-terracotta/20" />
            <blockquote className="text-xl md:text-2xl font-medium text-dark-forest text-center leading-relaxed italic">
              "A world where financial wellness is not a privilege of the few, but a right of the many. 
              Where every person has access to the knowledge, tools, and support they need to build 
              the future they deserve."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="text-terracotta font-semibold">— The Universal Wealth Care Vision</p>
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
              whileHover={{ y: -4, scale: 1.01 }}
              className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/30 transition-all duration-300 group cursor-pointer hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-dark-forest mb-2 flex items-center gap-2 group-hover:text-terracotta transition-colors">
                <motion.span 
                  className="w-2 h-2 bg-terracotta rounded-full"
                  whileHover={{ scale: 1.5 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {item.title}
              </h3>
              <p className="text-olive text-sm leading-relaxed group-hover:text-dark-forest/80 transition-colors">
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
            className="inline-flex items-center gap-2 text-terracotta font-medium text-lg group"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-terracotta after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
              Read the Full Manifesto
            </span>
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
