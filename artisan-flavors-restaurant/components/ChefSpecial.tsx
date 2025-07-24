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
import { CHEF_SPECIAL_CONTENT } from '../constants';

const ChefSpecial: React.FC = () => {
  const { language } = useAppContext();
  
  return (
    <section id="chef-special" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-light-moss/30 dark:bg-pine-bark/30 backdrop-blur-md p-8 md:p-12 rounded-lg">
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={CHEF_SPECIAL_CONTENT.image}
              alt={CHEF_SPECIAL_CONTENT.dishName[language]}
              className="rounded-lg shadow-2xl object-cover w-full max-w-md lg:max-w-none aspect-square transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="font-playfair text-xl text-brass-accent">{CHEF_SPECIAL_CONTENT.heading[language]}</h3>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white mt-2">{CHEF_SPECIAL_CONTENT.dishName[language]}</h2>
            <div className="mt-4 mb-6 w-24 h-1 bg-brass-accent mx-auto lg:mx-0"></div>
            <p className="text-forest-green/80 dark:text-light-cream/80 leading-relaxed">
              {CHEF_SPECIAL_CONTENT.description[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSpecial;