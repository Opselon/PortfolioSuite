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
import { MENU_ITEMS, MENU_PREVIEW_CONTENT } from '../constants';
import type { MenuItem } from '../types';
import { useAppContext } from '../contexts/AppContext';
import InteractiveCard from './InteractiveCard';

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
    const { language } = useAppContext();
    return (
        <InteractiveCard>
            <div className="bg-cream-white/70 dark:bg-pine-bark/70 rounded-lg overflow-hidden shadow-xl group backdrop-blur-sm border border-light-moss/50 dark:border-forest-green/50 h-full flex flex-col">
                <img src={item.image} alt={item.name[language]} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <h3 className="font-playfair text-2xl text-forest-green dark:text-cream-white">{item.name[language]}</h3>
                    </div>
                    <span className="text-2xl font-bold text-brass-accent">{item.price}</span>
                    </div>
                    <p className="text-forest-green/80 dark:text-light-cream/80 mt-4 text-sm leading-relaxed flex-grow">{item.description[language]}</p>
                </div>
            </div>
        </InteractiveCard>
    );
};

const MenuPreview: React.FC = () => {
    const { language } = useAppContext();
  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{MENU_PREVIEW_CONTENT.heading[language]}</h2>
          <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuCard key={item.name.en} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;