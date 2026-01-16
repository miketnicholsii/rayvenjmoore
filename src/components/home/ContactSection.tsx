import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
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
      <section id="contact" className="section-padding bg-[#E6E1D2]">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center py-16"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-[#6C7463]/10 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-[#6C7463]" />
            </motion.div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#4B544A] mb-4">
              Message Received
            </h3>
            <p className="font-body text-[#6C7463] max-w-md mx-auto">
              Thank you for reaching out. I personally review every message and will get back 
              to you within 2-3 business days.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-[#E6E1D2]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-sm font-semibold tracking-widest uppercase text-[#7D5C4E] mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl md:text-4xl font-semibold text-[#4B544A] mb-4"
            >
              Let's Talk
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-12 h-1 bg-[#7D5C4E] rounded-full mb-6 origin-left" 
            />
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-body text-[#6C7463] text-lg leading-relaxed mb-8"
            >
              Ready to gain clarity on your financial decisions? Whether you're exploring a partnership, 
              seeking advice, or want to discuss a speaking opportunity — I'd love to hear from you.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#6C7463]/10 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 text-[#6C7463]" />
                </motion.div>
                <div>
                  <p className="font-body text-sm text-[#6C7463]">Email</p>
                  <a href="mailto:rayvenjmoore@gmail.com" className="font-body font-medium text-[#4B544A] hover:text-[#7D5C4E] transition-colors">
                    rayvenjmoore@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#6C7463]/10 flex items-center justify-center"
                >
                  <MapPin className="w-5 h-5 text-[#6C7463]" />
                </motion.div>
                <div>
                  <p className="font-body text-sm text-[#6C7463]">Location</p>
                  <p className="font-body font-medium text-[#4B544A]">Houston, Texas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-[#FAF7F2] rounded-2xl p-8 md:p-10 shadow-card border border-[#959D8D]/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="font-body text-sm font-medium text-[#4B544A] mb-2 block">
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
                  className="h-12 bg-[#E6E1D2]/50 border-[#959D8D]/30 focus:border-[#7D5C4E] text-[#4B544A] placeholder:text-[#959D8D]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <label htmlFor="email" className="font-body text-sm font-medium text-[#4B544A] mb-2 block">
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
                  className="h-12 bg-[#E6E1D2]/50 border-[#959D8D]/30 focus:border-[#7D5C4E] text-[#4B544A] placeholder:text-[#959D8D]"
                />
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6"
            >
              <label htmlFor="subject" className="font-body text-sm font-medium text-[#4B544A] mb-2 block">
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
                className="h-12 bg-[#E6E1D2]/50 border-[#959D8D]/30 focus:border-[#7D5C4E] text-[#4B544A] placeholder:text-[#959D8D]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8"
            >
              <label htmlFor="message" className="font-body text-sm font-medium text-[#4B544A] mb-2 block">
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
                className="resize-none bg-[#E6E1D2]/50 border-[#959D8D]/30 focus:border-[#7D5C4E] text-[#4B544A] placeholder:text-[#959D8D]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
              <p className="font-body text-xs text-[#6C7463] mt-4">
                I typically respond within 2-3 business days.
              </p>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
