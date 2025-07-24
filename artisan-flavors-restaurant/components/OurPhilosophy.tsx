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
import { PHILOSOPHY_CONTENT } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const OurPhilosophy: React.FC = () => {
  const { language } = useAppContext();

  return (
    <section id="philosophy" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{PHILOSOPHY_CONTENT.heading[language]}</h2>
          <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY_CONTENT.points.map((point, index) => (
            <div key={index} className="bg-cream-white/50 dark:bg-pine-bark/50 p-8 rounded-lg shadow-lg backdrop-blur-sm text-center">
              <div className="flex justify-center mb-4">
                <point.icon className="w-12 h-12 text-brass-accent" />
              </div>
              <h3 className="font-playfair text-2xl text-forest-green dark:text-cream-white mb-2">{point.title[language]}</h3>
              <p className="text-forest-green/80 dark:text-light-cream/80 text-sm leading-relaxed">{point.description[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
