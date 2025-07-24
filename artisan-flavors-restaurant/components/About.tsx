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
import { ABOUT_CONTENT } from '../constants';
import InteractiveCard from './InteractiveCard';

const About: React.FC = () => {
  const { language } = useAppContext();
  return (
    <section 
      id="about" 
      className="py-20 md:py-32 relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
        style={{ backgroundImage: "url('https://picsum.photos/seed/grass/1920/1080')" }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 bg-light-moss/50 dark:bg-pine-bark/50 p-8 md:p-12 rounded-lg shadow-2xl backdrop-blur-sm">
          <div className="md:w-1/2 lg:w-5/12">
            <InteractiveCard className="rounded-lg shadow-lg overflow-hidden">
                <img 
                src="https://picsum.photos/seed/market/800/600" 
                alt="Floating market with fresh ingredients"
                className="rounded-lg object-cover w-full h-full"
                />
            </InteractiveCard>
          </div>
          <div className="md:w-1/2 lg:w-7/12">
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{ABOUT_CONTENT.heading[language]}</h2>
            <div className="mt-4 mb-6 w-24 h-1 bg-brass-accent"></div>
            <p className="text-forest-green/80 dark:text-light-cream/80 leading-relaxed">
              {ABOUT_CONTENT.paragraph1[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;