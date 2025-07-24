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

import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useAppContext();
  
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative z-10 px-4">
      <div>
        <h1 className="font-playfair text-5xl md:text-7xl text-forest-green dark:text-cream-white font-bold drop-shadow-lg leading-tight">
          {HERO_CONTENT.headline[language]}
        </h1>
        <a href="#contact" className="mt-8 inline-block bg-brass-accent text-cream-white hover:bg-opacity-90 transition-all duration-300 font-medium py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105">
          <span className={language === 'fa' ? 'font-vazir' : ''}>
            {HERO_CONTENT.cta[language]}
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;