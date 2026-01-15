import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'services', label: 'Services' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'stories', label: 'Stories' },
  { id: 'manifesto', label: 'Manifesto' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'cta', label: 'Act' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 200);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'hero' ? 0 : 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-1"
        >
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center gap-3 py-1.5 pr-3 transition-all duration-300"
                aria-label={`Scroll to ${section.label}`}
              >
                {/* Label */}
                <span
                  className={`font-body text-xs tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 text-foreground font-medium'
                      : 'opacity-0 group-hover:opacity-100 text-muted-foreground'
                  }`}
                >
                  {section.label}
                </span>

                {/* Dot/Line indicator */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-3 h-3 bg-evergreen shadow-lg shadow-evergreen/30'
                        : 'w-2 h-2 bg-border group-hover:bg-muted-foreground'
                    }`}
                    layout
                  />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -inset-1 rounded-full border-2 border-evergreen/30"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
