import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users, Lightbulb, Target } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import rayvenPortrait from '@/assets/rayven-portrait.jpg';

const timelineMilestones = [
  {
    year: '2012',
    title: 'The Foundation',
    description: 'Earned CPA certification and began career in public accounting, learning the fundamentals of financial systems and client service.',
    icon: GraduationCap,
    highlight: 'CPA Certification',
  },
  {
    year: '2015',
    title: 'The Realization',
    description: 'Recognized a gap in financial literacy access. Started volunteering to teach basic financial concepts in community settings.',
    icon: Lightbulb,
    highlight: 'Community Education Begins',
  },
  {
    year: '2017',
    title: 'Strategic Advisory',
    description: 'Expanded into strategic financial advisory, helping small businesses and entrepreneurs build sustainable financial foundations.',
    icon: Briefcase,
    highlight: 'Advisory Practice Launch',
  },
  {
    year: '2019',
    title: 'Education at Scale',
    description: 'Launched formal financial literacy workshop series, reaching hundreds of participants across community organizations and corporate settings.',
    icon: Users,
    highlight: '500+ Workshop Participants',
  },
  {
    year: '2021',
    title: 'Thought Leadership',
    description: 'Began speaking engagements and media appearances, sharing the message of financial clarity with broader audiences.',
    icon: Award,
    highlight: 'Speaking & Media',
  },
  {
    year: '2024',
    title: 'Universal Wealth Care',
    description: 'Formalized the vision: building a movement to ensure financial education, tools, and support are available to everyone.',
    icon: Target,
    highlight: 'Movement Founded',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About"
        description="Learn about Rayven J. Moore, CPA - a financial educator, entrepreneur, and wealth-building strategist with over a decade of experience guiding individuals and businesses to financial clarity."
        canonical="/about"
      />
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
                  Guiding You Through{' '}
                  <span className="text-gradient-gold">Financial Complexity</span>
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                  Rayven J. Moore is a <span className="text-foreground font-medium">Certified Public Accountant</span>, 
                  entrepreneur, and financial educator with over a decade of experience guiding 
                  individuals and businesses through the complexities of finance.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  His specialty: <span className="text-foreground font-medium">breaking down complex concepts 
                  into actionable insights</span> so people can confidently take control of their financial futures.
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
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
                The Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Career Milestones
              </h2>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20" />
              
              <div className="space-y-0">
                {timelineMilestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}
                      style={{ minHeight: '180px' }}
                    >
                      {/* Content Card */}
                      <div 
                        className={`w-[45%] ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                      >
                        <div className={`bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            <span className="font-display text-2xl font-bold text-gold">{milestone.year}</span>
                          </div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                            {milestone.description}
                          </p>
                          <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gold/10 text-gold">
                            {milestone.highlight}
                          </span>
                        </div>
                      </div>

                      {/* Center Icon */}
                      <div className="absolute left-1/2 -translate-x-1/2 z-10">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-card border-2 border-gold flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <milestone.icon className="w-6 h-6 text-gold" />
                        </motion.div>
                      </div>

                      {/* Empty space for other side */}
                      <div className="w-[45%]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden relative">
              {/* Left Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20" />
              
              <div className="space-y-8">
                {timelineMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-6 pl-16"
                  >
                    {/* Icon */}
                    <div className="absolute left-0 z-10">
                      <div className="w-12 h-12 rounded-full bg-card border-2 border-gold flex items-center justify-center shadow-md">
                        <milestone.icon className="w-5 h-5 text-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-card rounded-xl p-5 border border-border flex-grow">
                      <span className="font-display text-xl font-bold text-gold">{milestone.year}</span>
                      <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                        {milestone.description}
                      </p>
                      <span className="inline-block font-body text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-gold/10 text-gold">
                        {milestone.highlight}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                  <motion.div 
                    key={value.title} 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-display font-semibold">
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
                  </motion.div>
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
                {[
                  { value: 'CPA', label: 'Certified Public Accountant' },
                  { value: '10+', label: 'Years of Experience' },
                  { value: '1000+', label: 'Clients & Participants Served' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-muted/50 rounded-xl p-6 text-center hover:bg-muted/70 transition-colors"
                  >
                    <p className="font-display text-4xl font-semibold text-foreground mb-2">{stat.value}</p>
                    <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
