/*
 * Copyright 2024 Opselon
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information, see: https://github.com/Opselon/PortfolioSuite/
 */

import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const ForkKnifeIcon = () => (
  <svg className="w-8 h-8 text-brass-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 5.25h-4.5a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25h-4.5m0-3V1.5A1.5 1.5 0 0010.5 0h-3A1.5 1.5 0 006 1.5v3.75m1.5 0h3.75m-3.75 0h3.75m0 0v15m0-15h3.75a1.5 1.5 0 011.5 1.5v3.75m-5.25 0v15" />
  </svg>
);
const SunIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const MoonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const MenuIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>;
const CloseIcon = () => <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

const Header: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const perspectiveContainer = document.querySelector('.perspective-container');
    perspectiveContainer?.addEventListener('scroll', handleScroll);
    return () => perspectiveContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetLanguage = (lang: 'en' | 'fa') => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };
  
  const NavLinks: React.FC<{isMobile?: boolean}> = ({ isMobile }) => (
      <>
        {NAVIGATION_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors hover:text-brass-accent ${isMobile ? 'py-3 text-lg' : 'text-sm'}`}
          >
            {link.text[language]}
          </a>
        ))}
      </>
  )

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-cream-white/80 dark:bg-dark-forest/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <ForkKnifeIcon />
            <span className="font-playfair text-xl text-forest-green dark:text-cream-white font-bold">Artisan Flavors</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 font-medium text-forest-green/80 dark:text-light-cream/80">
            <NavLinks />
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSetLanguage(language === 'en' ? 'fa' : 'en')}
              className="p-2 rounded-full transition-colors hover:bg-light-moss dark:hover:bg-pine-bark text-forest-green dark:text-light-cream"
              aria-label="Toggle Language"
            >
              <span className="font-bold text-sm">{language === 'en' ? 'FA' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-light-moss dark:hover:bg-pine-bark text-forest-green dark:text-light-cream"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button className="md:hidden p-2 text-forest-green dark:text-light-cream" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-[72px] left-0 right-0 bottom-0 z-40 bg-cream-white/95 dark:bg-dark-forest/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : (language === 'en' ? '-translate-x-full' : 'translate-x-full') }`}>
        <nav className="container mx-auto px-6 pt-8 flex flex-col items-center gap-6 font-medium text-forest-green dark:text-light-cream">
            <NavLinks isMobile />
        </nav>
      </div>
    </>
  );
};

export default Header;