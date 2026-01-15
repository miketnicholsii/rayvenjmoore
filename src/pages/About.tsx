import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import rayvenPortrait from '@/assets/rayven-portrait.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-cream to-background">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                  About Rayven
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                  Converting Complexity Into{' '}
                  <span className="text-gradient-gold">Clarity</span>
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  For over a decade, I've dedicated my career to one mission: making 
                  financial wisdom accessible to everyone who seeks it.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={rayvenPortrait}
                    alt="Rayven J. Moore, CPA"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/30 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I became a CPA because I believed in the power of numbers to tell stories—
                stories about where we've been, where we are, and where we're capable of going. 
                But early in my career, I realized something troubling: the people who needed 
                financial clarity the most were often the ones with the least access to it.
              </p>
              <p>
                That realization changed everything for me. I stopped seeing my role as 
                simply preparing returns or auditing books. Instead, I began to see myself 
                as a translator—someone who could take the complex language of finance and 
                make it accessible, understandable, and empowering.
              </p>
              <p>
                Over the past decade, I've worked with individuals, families, small businesses, 
                and community organizations. I've led workshops in community centers and 
                boardrooms alike. Through every engagement, my goal has remained the same: 
                to leave people with more clarity than they had when we started.
              </p>
              <p className="font-medium text-foreground">
                Today, I'm focused on building what I call Universal Wealth Care—a movement 
                to ensure that financial education, tools, and support are available to 
                everyone, regardless of their starting point.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 gold-underline inline-block">
                Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {[
                  {
                    title: 'Clarity Over Complexity',
                    description: 'If it can\'t be explained simply, it hasn\'t been understood well enough.',
                  },
                  {
                    title: 'Access for All',
                    description: 'Financial knowledge should never be gatekept by jargon or circumstance.',
                  },
                  {
                    title: 'Long-Term Thinking',
                    description: 'Sustainable wealth is built through patience, discipline, and vision.',
                  },
                  {
                    title: 'Community Focus',
                    description: 'True wealth includes the prosperity of those around us.',
                  },
                ].map((value, index) => (
                  <div key={value.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-display font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="font-body text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 pt-12 border-t border-border"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 gold-underline inline-block">
                Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="font-display text-3xl font-semibold text-foreground mb-2">CPA</p>
                  <p className="font-body text-sm text-muted-foreground">Certified Public Accountant</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="font-display text-3xl font-semibold text-foreground mb-2">10+</p>
                  <p className="font-body text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="font-display text-3xl font-semibold text-foreground mb-2">1000+</p>
                  <p className="font-body text-sm text-muted-foreground">Clients & Participants Served</p>
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
