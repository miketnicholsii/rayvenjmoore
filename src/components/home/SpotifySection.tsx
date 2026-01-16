import { motion } from 'framer-motion';

export default function SpotifySection() {
  return (
    <section className="py-10 md:py-12 bg-background border-t border-border/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Minimal Header */}
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 text-center mb-4">
            Currently Playing
          </p>

          {/* Spotify Embed - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-300"
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/6MptPHpTE9KRwh4KczLfEW?utm_source=generator&theme=0"
              className="w-full h-[152px]"
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
