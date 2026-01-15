import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, Video, Radio, BookOpen, ArrowRight, CheckCircle, Calendar, 
  MapPin, Users, Play, ExternalLink, Clock, Send
} from 'lucide-react';
import SEO from '@/components/SEO';
import BreakoutNav from '@/components/layout/BreakoutNav';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const speakingTopics = [
  'Financial Literacy for All: Breaking Down Barriers to Wealth',
  "Converting Complexity Into Clarity: A CPA's Approach",
  'Building Universal Wealth Care: Vision for Financial Equity',
  'Bitcoin & Digital Assets: Data-Driven Perspectives',
  'Entrepreneurship & Financial Wellness',
  'Community-Centered Approaches to Financial Education',
  'Long-Term Thinking: Building Generational Wealth',
];

const mediaFormats = [
  { icon: Mic, title: 'Keynote Speaking', description: 'Conferences, summits, and corporate events' },
  { icon: Radio, title: 'Podcast Appearances', description: 'Long-form conversations about finance and education' },
  { icon: Video, title: 'Panel Discussions', description: 'Industry panels and expert roundtables' },
  { icon: BookOpen, title: 'Workshops', description: 'Interactive educational sessions for organizations' },
];

const pastEngagements = [
  {
    id: 1,
    title: 'Financial Literacy Summit',
    type: 'Keynote',
    location: 'Houston, TX',
    date: '2024',
    audience: '500+ attendees',
    topic: 'Universal Wealth Care: Building Financial Equity in Our Communities'
  },
  {
    id: 2,
    title: 'Corporate Financial Wellness Program',
    type: 'Workshop Series',
    location: 'Virtual',
    date: '2024',
    audience: 'Fortune 500 Company',
    topic: 'From Paycheck to Prosperity: A 6-Week Financial Transformation'
  },
  {
    id: 3,
    title: 'Third Ward Community Center',
    type: 'Community Workshop',
    location: 'Houston, TX',
    date: '2023',
    audience: '100+ participants',
    topic: 'Building Wealth From Where You Are'
  },
  {
    id: 4,
    title: 'Crypto & Finance Conference',
    type: 'Panel Discussion',
    location: 'Austin, TX',
    date: '2023',
    audience: '1,000+ attendees',
    topic: 'Traditional Finance Meets Digital Assets'
  },
  {
    id: 5,
    title: 'Riverside Civic Association',
    type: 'Community Talk',
    location: 'Houston, TX',
    date: '2023',
    audience: 'Community Members',
    topic: 'Preserving Wealth, Preserving Community'
  }
];

const podcastAppearances = [
  {
    id: 1,
    show: 'The Money Clarity Podcast',
    episode: 'Converting Complexity Into Clarity',
    description: 'A deep dive into financial education strategies and the Universal Wealth Care movement.',
    duration: '58 min',
    featured: true
  },
  {
    id: 2,
    show: 'Entrepreneurs on Fire',
    episode: 'Building Multiple Ventures While Keeping Clarity',
    description: 'How to manage multiple businesses without losing focus on what matters.',
    duration: '45 min',
    featured: false
  },
  {
    id: 3,
    show: 'The CPA Success Show',
    episode: 'From Big Four to Community Impact',
    description: 'Career journey from Deloitte audit to entrepreneurship and financial education.',
    duration: '52 min',
    featured: true
  },
  {
    id: 4,
    show: 'Bitcoin & Beyond',
    episode: 'A CPA Perspective on Digital Assets',
    description: 'Data-driven analysis of cryptocurrency from a traditional finance background.',
    duration: '62 min',
    featured: false
  },
  {
    id: 5,
    show: 'Community Wealth Builders',
    episode: 'Financial Literacy as Liberation',
    description: 'Why financial education is the foundation of community empowerment.',
    duration: '48 min',
    featured: true
  }
];

const testimonials = [
  {
    quote: "Rayven has a gift for making complex financial concepts feel approachable and actionable. Our team left his workshop with real tools they could apply immediately.",
    source: "Corporate Financial Wellness Program"
  },
  {
    quote: "One of the most engaging financial speakers I've ever heard. He connects with the audience in a way that feels genuine and empowering.",
    source: "Financial Literacy Summit Attendee"
  },
  {
    quote: "Rayven brought clarity to a topic that often feels intimidating. Our community members are still talking about his presentation months later.",
    source: "Community Organization Leader"
  }
];

export default function Speaking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventType: '',
    eventDate: '',
    audienceSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Speaking & Media"
        description="Book Rayven J. Moore, CPA for keynotes, panels, workshops, and podcast appearances. Bringing financial clarity to stages and audiences worldwide."
        canonical="/speaking"
      />
      <BreakoutNav title="Speaking & Media" backLabel="Back to Home" sectionId="services" />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Speaking & Media
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Bringing <span className="text-primary">Clarity</span> to Your Stage
              </h1>
              <p className="text-xl text-muted-foreground">
                As a speaker and thought leader, I'm passionate about making financial 
                concepts accessible and actionable. Whether it's a keynote, panel, or 
                workshop—I bring clarity to every stage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How We Can Work Together
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaFormats.map((format, index) => (
                <motion.div
                  key={format.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <format.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {format.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {format.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Engagements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Past Speaking Engagements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From intimate community workshops to large-scale conferences, I've had the privilege 
                of sharing clarity with diverse audiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEngagements.map((engagement, index) => (
                <motion.div
                  key={engagement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {engagement.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{engagement.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {engagement.topic}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {engagement.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {engagement.audience}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Appearances */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Media Appearances
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Podcast Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Long-form conversations diving deep into financial literacy, wealth building, 
                and the Universal Wealth Care mission.
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {podcastAppearances.map((podcast, index) => (
                <motion.div
                  key={podcast.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 ${
                    podcast.featured ? 'ring-1 ring-primary/20' : ''
                  }`}
                >
                  {/* Play Button */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{podcast.show}</h3>
                      {podcast.featured && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium mb-1">{podcast.episode}</p>
                    <p className="text-sm text-muted-foreground">{podcast.description}</p>
                  </div>

                  {/* Duration & Link */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {podcast.duration}
                    </span>
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics & Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Featured Topics
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Topics That Resonate
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  From broad themes of financial equity to tactical wealth-building strategies, 
                  I tailor every presentation to meet your audience where they are—and leave 
                  them with actionable clarity.
                </p>
                <ul className="space-y-4">
                  {speakingTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Testimonials */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What Audiences Say
                </h3>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <blockquote className="text-foreground/80 leading-relaxed mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-sm text-primary font-medium">
                      — {testimonial.source}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Calendar className="w-12 h-12 mx-auto mb-6 opacity-80" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Book Rayven for Your Event
                </h2>
                <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                  Ready to bring clarity to your conference, corporate event, or community gathering? 
                  Fill out the form below and let's start the conversation.
                </p>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary-foreground/10 rounded-2xl p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
                  <h3 className="text-2xl font-bold mb-4">Inquiry Received!</h3>
                  <p className="text-primary-foreground/70">
                    Thank you for your interest. I'll review your inquiry and get back to you within 2-3 business days.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="bg-primary-foreground/10 rounded-2xl p-8 md:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Organization *</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                        placeholder="Company or Organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-primary-foreground/50 transition-colors"
                      >
                        <option value="" className="text-foreground">Select event type</option>
                        <option value="keynote" className="text-foreground">Keynote Speaking</option>
                        <option value="workshop" className="text-foreground">Workshop</option>
                        <option value="panel" className="text-foreground">Panel Discussion</option>
                        <option value="podcast" className="text-foreground">Podcast Interview</option>
                        <option value="corporate" className="text-foreground">Corporate Training</option>
                        <option value="other" className="text-foreground">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Event Date (Approximate)</label>
                      <input
                        type="text"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                        placeholder="March 2025 or TBD"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Expected Audience Size</label>
                      <input
                        type="text"
                        value={formData.audienceSize}
                        onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                        placeholder="50-100 attendees"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Tell Me About Your Event *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
                      placeholder="Share details about your event, audience, and what topics you'd like covered..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
