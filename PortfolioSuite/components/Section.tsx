
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  const [ref, isOnScreen] = useOnScreen({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 w-full max-w-5xl mx-auto px-6 ${className || ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={isOnScreen ? 'visible' : 'hidden'}
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center text-primary dark:text-primary-light">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};