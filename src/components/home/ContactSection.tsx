import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll be in touch soon.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="container-narrow" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Message Received
            </h3>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Thank you for reaching out. I personally review every message and will get back 
              to you within 2-3 business days.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-accent mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Let's Talk
            </h2>
            <div className="accent-bar mb-6" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to gain clarity on your financial decisions? Whether you're exploring a partnership, 
              seeking advice, or want to discuss a speaking opportunity — I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@rayvenmoore.com" className="font-body font-medium text-foreground hover:text-accent transition-colors">
                    hello@rayvenmoore.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Location</p>
                  <p className="font-body font-medium text-foreground">Houston, Texas</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-12"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="font-body text-sm font-medium text-foreground mb-2 block">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="h-12"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="font-body text-sm font-medium text-foreground mb-2 block">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your goals and how I can help..."
                rows={5}
                className="resize-none"
              />
            </div>
            <Button 
              type="submit" 
              variant="hero" 
              size="xl" 
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2" size={18} />
                </>
              )}
            </Button>
            <p className="font-body text-xs text-muted-foreground mt-4">
              I typically respond within 2-3 business days.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
