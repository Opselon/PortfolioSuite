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
import { RESERVATIONS_CONTENT } from '../constants';

const Reservations: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section id="reservations" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
         <div className="bg-light-moss/30 dark:bg-pine-bark/30 backdrop-blur-md p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{RESERVATIONS_CONTENT.heading[language]}</h2>
            <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
            <p className="max-w-2xl mx-auto text-forest-green/80 dark:text-light-cream/80 leading-relaxed mt-8 mb-10">
                {RESERVATIONS_CONTENT.description[language]}
            </p>
            <a 
                href="#contact" 
                className="inline-block bg-brass-accent text-cream-white hover:bg-opacity-90 transition-all duration-300 font-medium py-3 px-8 rounded-full text-lg shadow-xl transform hover:scale-105"
            >
                <span className={language === 'fa' ? 'font-vazir' : ''}>
                    {RESERVATIONS_CONTENT.cta[language]}
                </span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
