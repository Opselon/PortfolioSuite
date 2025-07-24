
import React from 'react';
import { motion } from 'framer-motion';
import type { ISkill } from '../types';

interface SkillBadgeProps {
  skill: ISkill;
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <motion.div
      className="px-4 py-2 bg-light-card dark:bg-dark-card rounded-lg shadow-md flex items-center justify-center text-center"
      variants={badgeVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <p className="font-medium text-light-text dark:text-dark-text">{skill.name}</p>
    </motion.div>
  );
};