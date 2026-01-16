import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export default function SpotifySection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music className="w-5 h-5 text-primary/60" />
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              What I'm Listening To
            </span>
          </div>

          {/* Spotify Embed - Compact Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/6MptPHpTE9KRwh4KczLfEW?utm_source=generator&theme=0"
              className="w-full h-[352px]"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
