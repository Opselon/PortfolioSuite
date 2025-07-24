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
import { MEET_THE_CHEF_CONTENT } from '../constants';

const MeetTheChef: React.FC = () => {
  const { language } = useAppContext();
  const { chef } = MEET_THE_CHEF_CONTENT;

  return (
    <section id="chef" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 lg:w-5/12">
            <div className="relative w-fit mx-auto">
               <div className="absolute -inset-2 border-4 border-brass-accent/50 rounded-full animate-pulse"></div>
               <img 
                src={chef.image}
                alt={chef.name[language]}
                className="relative rounded-full shadow-2xl object-cover w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-7/12">
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{MEET_THE_CHEF_CONTENT.heading[language]}</h2>
            <div className="mt-4 mb-6 w-24 h-1 bg-brass-accent"></div>
            <h3 className="font-playfair text-2xl text-forest-green dark:text-cream-white">{chef.name[language]}</h3>
            <p className="text-brass-accent font-medium mb-4">{chef.role[language]}</p>
            <p className="text-forest-green/80 dark:text-light-cream/80 leading-relaxed">
              {chef.bio[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheChef;