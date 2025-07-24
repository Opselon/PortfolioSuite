
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Icon } from './icons/Icon';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="p-2 rounded-full text-light-text dark:text-dark-text bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <Icon name="moon" /> : <Icon name="sun" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};