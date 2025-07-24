
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Icon } from './icons/Icon';

export const Hero: React.FC = () => {
  const typedTitle = useTypingEffect(resumeData.titles);

  return (
    <section id="home" className="h-screen flex items-center justify-center text-center bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-heading text-light-text dark:text-dark-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary dark:text-primary-light">{resumeData.name}</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-4xl font-heading text-secondary dark:text-secondary-light mb-8 h-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a <span className="border-b-4 border-accent">{typedTitle}</span>
        </motion.p>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-light-text/80 dark:text-dark-text/80 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {resumeData.about}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light w-full sm:w-auto"
            aria-label="Download my resume"
          >
            <Icon name="download" className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text font-semibold rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};