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
import { TESTIMONIALS_CONTENT } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import InteractiveCard from './InteractiveCard';

const QuoteDots = () => (
    <div className="absolute top-8 right-8 flex gap-1.5" aria-hidden="true">
        <div className="w-3 h-3 bg-brass-accent/60 rounded-full"></div>
        <div className="w-3 h-3 bg-brass-accent/60 rounded-full"></div>
    </div>
);


const Testimonials: React.FC = () => {
    const { language } = useAppContext();
    return (
        <section id="testimonials" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{TESTIMONIALS_CONTENT.heading[language]}</h2>
                    <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
                        <InteractiveCard key={index} className="rounded-lg shadow-lg">
                            <div className="bg-cream-white/80 dark:bg-pine-bark/60 p-8 rounded-lg flex flex-col relative h-full backdrop-blur-sm">
                                <QuoteDots />
                                <p className="text-forest-green/80 dark:text-light-cream/80 mb-6 flex-grow">
                                  "{review.quote[language]}"
                                </p>
                                <p className="font-medium text-forest-green dark:text-light-cream text-right">
                                  - {review.author[language]}
                                </p>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;