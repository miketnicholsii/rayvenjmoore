import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavLink {
  name: string;
  href: string;
  isAnchor: boolean;
}

// Phase 2 Navigation Structure
const navLinks: NavLink[] = [
  { name: 'Home', href: '#hero', isAnchor: true },
  { name: 'About', href: '#about', isAnchor: true },
  { name: 'Work & Ventures', href: '#ventures', isAnchor: true },
  { name: 'Leadership', href: '#leadership', isAnchor: true },
  { name: 'Case Studies', href: '/case-studies', isAnchor: false },
  { name: 'Resources', href: '/resources', isAnchor: false },
  { name: 'Speaking', href: '/speaking', isAnchor: false },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rayvenjmoore/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/rayvenjmoorecpa' },
  { name: 'X', icon: Twitter, href: 'https://x.com/rayvenmoore' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['contact', 'speaking', 'leadership', 'ventures', 'credentials', 'about', 'hero'];
        const scrollPosition = window.scrollY + 150;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = sectionId === '#hero' ? 0 : 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (link: NavLink) => {
    if (link.isAnchor) {
      return isHomePage && activeSection === link.href.replace('#', '');
    }
    return location.pathname === link.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/98 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('#hero')}
          className="group flex items-center gap-2"
        >
          <motion.span 
            className="font-display text-xl md:text-2xl font-semibold text-dark-forest tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Rayven J. Moore
            <span className="text-terracotta">,</span>
            <span className="text-olive font-body text-sm ml-1 font-normal">CPA</span>
          </motion.span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative font-body text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link)
                    ? 'text-dark-forest'
                    : 'text-olive hover:text-dark-forest hover:bg-sage/20'
                }`}
              >
                {link.name}
                {isActive(link) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-terracotta rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`relative font-body text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link)
                    ? 'text-dark-forest'
                    : 'text-olive hover:text-dark-forest hover:bg-sage/20'
                }`}
              >
                {link.name}
                {isActive(link) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-terracotta rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            )
          ))}
        </div>

        {/* Desktop Right Side - Social + CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <div className="flex items-center gap-1 mr-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-olive hover:text-terracotta hover:bg-terracotta/10 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          <Button variant="hero" size="default" onClick={() => scrollToSection('#contact')}>
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-dark-forest hover:bg-sage/20 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-cream border-t border-sage/30 overflow-hidden"
          >
            <div className="container-wide py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.isAnchor ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`block w-full text-left font-body text-base py-3 px-4 rounded-lg transition-all duration-300 ${
                        isActive(link)
                          ? 'text-terracotta bg-terracotta/10'
                          : 'text-dark-forest hover:text-terracotta hover:bg-sage/20'
                      }`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block font-body text-base py-3 px-4 rounded-lg transition-all duration-300 ${
                        isActive(link)
                          ? 'text-terracotta bg-terracotta/10'
                          : 'text-dark-forest hover:text-terracotta hover:bg-sage/20'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center gap-2 mt-4 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-olive hover:text-terracotta hover:bg-terracotta/10 transition-all duration-300 border border-sage/30"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              <Button variant="hero" size="lg" className="mt-4 mx-4" onClick={() => scrollToSection('#contact')}>
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
