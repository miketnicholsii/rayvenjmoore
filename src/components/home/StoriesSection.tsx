import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stories = [
  {
    quote: "Before working with Rayven, financial planning felt like navigating in the dark. Now I have clarity, confidence, and a roadmap I actually understand.",
    author: "Sarah M.",
    role: "Small Business Owner",
    transformation: "From overwhelmed to empowered",
  },
  {
    quote: "Rayven doesn't just explain numbers—he translates them into real-life decisions. That's a gift that keeps on giving.",
    author: "Marcus T.",
    role: "Healthcare Professional",
    transformation: "From confused to in control",
  },
  {
    quote: "The financial literacy workshop changed how I think about money entirely. It's not just about saving—it's about building a future.",
    author: "Denise R.",
    role: "Community Workshop Participant",
    transformation: "From anxious to hopeful",
  },
];

export default function StoriesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
            Transformations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Stories of Clarity
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            Real transformations from confusion to confidence, fear to freedom.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-gold" />
              </div>
              <blockquote className="font-body text-foreground leading-relaxed mb-6">
                "{story.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <p className="font-body text-xs font-semibold tracking-wider uppercase text-gold mb-2">
                  {story.transformation}
                </p>
                <p className="font-display text-lg font-semibold text-foreground">
                  {story.author}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {story.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
