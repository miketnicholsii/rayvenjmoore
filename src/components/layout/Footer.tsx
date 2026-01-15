import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Ventures', href: '/ventures' },
    { name: 'Resources', href: '/resources' },
    { name: 'Speaking', href: '/speaking' },
  ],
  secondary: [
    { name: 'Manifesto', href: '/manifesto' },
    { name: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Rayven J. Moore<span className="text-gold">,</span> CPA
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md mb-6">
              Converting complexity into clarity. Dedicated to financial education, 
              community development, and creating universal access to wealth-building knowledge.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-gold hover:border-gold hover:text-charcoal"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wide uppercase mb-4 text-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-sm font-semibold tracking-wide uppercase mb-4 text-gold">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.secondary.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Rayven J. Moore, CPA. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/50">
            Building Universal Wealth Care.
          </p>
        </div>
      </div>
    </footer>
  );
}
