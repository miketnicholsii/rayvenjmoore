import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Twitter, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work & Ventures', href: '/ventures' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  secondary: [
    { name: 'Resources', href: '/resources' },
    { name: 'Speaking & Media', href: '/speaking' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rayvenjmoore/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/rayvenjmoorecpa' },
  { name: 'X', icon: Twitter, href: 'https://x.com/rayvenmoore' },
  { name: 'Spotify', icon: Music, href: 'https://open.spotify.com/playlist/6MptPHpTE9KRwh4KczLfEW?si=4d2b42488c17408a' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h3 
              className="font-display text-2xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Rayven J. Moore<span className="text-accent">,</span> CPA
            </motion.h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md mb-6">
              Bringing clarity to complex financial decisions. Helping individuals, businesses, and communities 
              make confident decisions through trusted guidance and strategic expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground group"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <social.icon size={18} className="transition-transform group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wide uppercase mb-5 text-accent">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wide uppercase mb-5 text-accent">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.secondary.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-accent transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-orange my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Rayven J. Moore, CPA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent/70" />
              Clarity · Confidence · Action
            </p>
            <a 
              href="https://helloneko.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 hover:text-accent/60 transition-colors duration-300"
            >
              hello, NÈKO.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
