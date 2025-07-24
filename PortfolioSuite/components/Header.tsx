
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { resumeData } from '../data/resumeData';
import { cn } from '../lib/utils';
import { Icon } from './icons/Icon';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-md'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold font-heading text-primary dark:text-primary-light" aria-label="Home">
            {resumeData.name}
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-card transition-colors"
                aria-label="Open navigation menu"
              >
                <Icon name="menu" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-light-bg dark:bg-dark-bg z-50 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-lg font-bold font-heading text-primary dark:text-primary-light">Navigation</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-card transition-colors"
                  aria-label="Close navigation menu"
                >
                  <Icon name="x" className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-semibold text-xl text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
