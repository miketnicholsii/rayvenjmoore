import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface PageLoadAnimationProps {
  children: ReactNode;
  isLoaded: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function PageLoadAnimation({ children, isLoaded }: PageLoadAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

// Export variants for use in child components
export { containerVariants, itemVariants };

// Animated section wrapper for individual sections
export function AnimatedSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
