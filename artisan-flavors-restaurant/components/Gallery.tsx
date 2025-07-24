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
import { GALLERY_CONTENT } from '../constants';
import { useAppContext } from '../contexts/AppContext';
import InteractiveCard from './InteractiveCard';

const Gallery: React.FC = () => {
    const { language } = useAppContext();
    return (
        <section id="gallery" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{GALLERY_CONTENT.heading[language]}</h2>
                    <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {GALLERY_CONTENT.images.map((image, index) => (
                       <InteractiveCard key={index} className="rounded-lg shadow-lg overflow-hidden">
                         <div className="group relative aspect-square">
                            <img
                                src={image.src}
                                alt={image.alt[language]}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                       </InteractiveCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;