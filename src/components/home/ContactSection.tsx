import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
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
    
    // Simulate form submission
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
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-narrow" ref={ref}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-gold" />
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
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-gold mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Let's Build Something Together
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to create Universal Wealth Care and take control of your financial future? 
            Let's start the conversation.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border"
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
            className="w-full"
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
          <p className="font-body text-xs text-muted-foreground text-center mt-4">
            I typically respond within 2-3 business days. Looking forward to connecting!
          </p>
        </motion.form>
      </div>
    </section>
  );
}
