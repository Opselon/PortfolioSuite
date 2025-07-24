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
import { EVENTS_CONTENT } from '../constants';

const Events: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section 
      id="events" 
      className="py-20 md:py-32 relative" 
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5 bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/eventstable/1920/1080')" }}
      ></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="bg-cream-white/50 dark:bg-dark-forest/50 backdrop-blur-sm p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{EVENTS_CONTENT.heading[language]}</h2>
          <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
          <p className="max-w-3xl mx-auto text-forest-green/80 dark:text-light-cream/80 leading-relaxed mt-8 mb-10">
            {EVENTS_CONTENT.description[language]}
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-brass-accent text-dark-forest hover:bg-opacity-90 transition-all duration-300 font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105"
          >
            <span className={language === 'fa' ? 'font-vazir' : ''}>
              {EVENTS_CONTENT.cta[language]}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;