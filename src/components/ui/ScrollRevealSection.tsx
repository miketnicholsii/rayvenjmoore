import { motion, Variants, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'blur';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

const getVariants = (animation: AnimationType, duration: number): Variants => {
  const easing = [0.22, 1, 0.36, 1] as [number, number, number, number];
  
  const variants: Record<AnimationType, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { duration, ease: easing } 
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration, ease: easing } 
      },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 80 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, ease: easing } 
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: -80 },
      visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration, ease: easing } 
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { duration, ease: easing } 
      },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 30 },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0,
        transition: { duration, ease: easing } 
      },
    },
  };
  
  return variants[animation];
};

export default function ScrollRevealSection({ 
  children, 
  className = '',
  animation = 'slideUp',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: ScrollRevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = getVariants(animation, duration);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.12,
  once = true,
  amount = 0.2,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}

export function StaggerItem({ 
  children, 
  className = '',
  animation = 'slideUp',
}: StaggerItemProps) {
  const variants = getVariants(animation, 0.6);
  
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
