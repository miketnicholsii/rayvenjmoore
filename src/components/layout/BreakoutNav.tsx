import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BreakoutNavProps {
  title: string;
  backLabel?: string;
  backTo?: string;
  sectionId?: string;
}

export default function BreakoutNav({ title, backLabel = 'Back', backTo = '/', sectionId }: BreakoutNavProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (sectionId) {
      navigate(`/${sectionId ? `#${sectionId}` : ''}`);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-body text-sm">{backLabel}</span>
          </button>

          {/* Page Title */}
          <span className="font-display text-sm font-medium text-foreground hidden sm:block">
            {title}
          </span>

          {/* Home Link */}
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Progress line */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-evergreen to-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
}
