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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="Speaking & Media"
        description="Book Rayven J. Moore, CPA for keynotes, panels, workshops, and podcast appearances. Bringing financial clarity to stages and audiences worldwide."
        canonical="/speaking"
      />
      <BreakoutNav title="Speaking & Media" backLabel="Back to Home" sectionId="services" />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-warm-beige/50 to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-6">
                Speaking & Media
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-forest leading-tight mb-6">
                Bringing <span className="text-terracotta">Clarity</span> to Your Stage
              </h1>
              <p className="text-xl text-olive">
                As a speaker and thought leader, I'm passionate about making financial 
                concepts accessible and actionable. Whether it's a keynote, panel, or 
                workshop—I bring clarity to every stage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest">
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
                  className="bg-cream rounded-2xl p-8 text-center border border-sage/30 hover:border-terracotta/40 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-olive/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <format.icon className="w-8 h-8 text-olive" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-forest mb-2">
                    {format.title}
                  </h3>
                  <p className="text-sm text-olive">
                    {format.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Engagements */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
                Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-4">
                Past Speaking Engagements
              </h2>
              <p className="text-olive max-w-2xl mx-auto">
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
                  className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-olive/10 text-olive text-xs font-medium rounded-full">
                      {engagement.type}
                    </span>
                    <span className="text-sm text-olive">{engagement.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-dark-forest mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-sm text-olive mb-4">
                    {engagement.topic}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-olive">
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
        <section className="py-20 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
                Media Appearances
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-4">
                Podcast Features
              </h2>
              <p className="text-olive max-w-2xl mx-auto">
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
                  className={`bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 ${
                    podcast.featured ? 'ring-1 ring-terracotta/20' : ''
                  }`}
                >
                  {/* Play Button */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center hover:bg-olive/20 transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-olive ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-dark-forest">{podcast.show}</h3>
                      {podcast.featured && (
                        <span className="px-2 py-0.5 bg-terracotta/10 text-terracotta text-xs rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-terracotta text-sm font-medium mb-1">{podcast.episode}</p>
                    <p className="text-sm text-olive">{podcast.description}</p>
                  </div>

                  {/* Duration & Link */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="flex items-center gap-1 text-sm text-olive">
                      <Clock className="w-4 h-4" />
                      {podcast.duration}
                    </span>
                    <button className="p-2 hover:bg-warm-beige rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-olive" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics & Testimonials */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">
                  Featured Topics
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-6">
                  Topics That Resonate
                </h2>
                <p className="text-olive leading-relaxed mb-8">
                  From broad themes of financial equity to tactical wealth-building strategies, 
                  I tailor every presentation to meet your audience where they are—and leave 
                  them with actionable clarity.
                </p>
                <ul className="space-y-4">
                  {speakingTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
                      <span className="text-dark-forest">{topic}</span>
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
                <h3 className="text-xl font-semibold text-dark-forest mb-6">
                  What Audiences Say
                </h3>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-cream border border-sage/30 rounded-xl p-6"
                  >
                    <blockquote className="text-dark-forest/80 leading-relaxed mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-sm text-terracotta font-medium">
                      — {testimonial.source}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-olive">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Calendar className="w-12 h-12 mx-auto mb-6 text-cream/80" />
                <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                  Book Rayven for Your Event
                </h2>
                <p className="text-cream/70 max-w-xl mx-auto">
                  Fill out the form below and I'll get back to you within 2 business days 
                  to discuss how we can create impact at your event.
                </p>
              </motion.div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cream/10 backdrop-blur-sm rounded-2xl p-12 text-center border border-cream/20"
                >
                  <div className="w-20 h-20 rounded-full bg-cream/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-cream" />
                  </div>
                  <h3 className="text-2xl font-bold text-cream mb-4">
                    Inquiry Received!
                  </h3>
                  <p className="text-cream/70 max-w-md mx-auto">
                    Thank you for your interest. I'll review your inquiry and respond 
                    within 2 business days to discuss next steps.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cream/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Organization</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                        placeholder="Company or organization name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Event Type *</label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream focus:outline-none focus:border-cream/50 transition-colors"
                      >
                        <option value="" className="text-dark-forest">Select event type</option>
                        <option value="keynote" className="text-dark-forest">Keynote Speaking</option>
                        <option value="panel" className="text-dark-forest">Panel Discussion</option>
                        <option value="workshop" className="text-dark-forest">Workshop</option>
                        <option value="podcast" className="text-dark-forest">Podcast Interview</option>
                        <option value="other" className="text-dark-forest">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Event Date</label>
                      <input
                        type="text"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                        placeholder="Approximate date or timeframe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cream mb-2">Expected Audience Size</label>
                      <input
                        type="text"
                        value={formData.audienceSize}
                        onChange={(e) => setFormData({...formData, audienceSize: e.target.value})}
                        className="w-full h-12 px-4 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                        placeholder="e.g., 50-100 people"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-cream mb-2">Tell me about your event *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors resize-none"
                      placeholder="Share details about your event, audience, and what you'd like me to speak about..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 w-4 h-4" />
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
