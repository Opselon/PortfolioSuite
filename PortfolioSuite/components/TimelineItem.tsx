
import React from 'react';
import { motion } from 'framer-motion';
import type { IExperience } from '../types';

interface TimelineItemProps {
  item: IExperience;
  isLast: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <motion.div className="relative pl-8 sm:pl-12" variants={itemVariants}>
      {/* Timeline connector */}
      <div className="absolute left-2.5 sm:left-4 top-2 h-full">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        {!isLast && <div className="absolute top-2 left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>}
      </div>

      {/* Content */}
      <div className="mb-10">
        <p className="text-sm font-medium text-accent dark:text-accent-light">{item.date}</p>
        <h3 className="text-xl font-bold font-heading text-light-text dark:text-dark-text mt-1">{item.role}</h3>
        <p className="text-md font-medium text-secondary dark:text-secondary-light mb-4">{item.company}</p>
        <ul className="space-y-2 list-disc list-inside text-light-text/80 dark:text-dark-text/80">
          {item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};