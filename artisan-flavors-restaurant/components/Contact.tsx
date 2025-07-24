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
import { CONTACT_CONTENT } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const Contact: React.FC = () => {
    const { language } = useAppContext();
    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-4xl md:text-5xl text-forest-green dark:text-cream-white">{CONTACT_CONTENT.heading[language]}</h2>
                    <div className="mt-4 w-24 h-1 bg-brass-accent mx-auto"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/2 bg-cream-white/50 dark:bg-pine-bark/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-brass-accent mt-1"><LocationIcon /></span>
                                <div>
                                    <h3 className="font-bold text-lg text-forest-green dark:text-cream-white">Address</h3>
                                    <p className="text-forest-green/80 dark:text-light-cream/80">{CONTACT_CONTENT.address[language]}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-brass-accent mt-1"><PhoneIcon /></span>
                                <div>
                                    <h3 className="font-bold text-lg text-forest-green dark:text-cream-white">Phone</h3>
                                    <a href={`tel:${CONTACT_CONTENT.phone.en}`} className="text-forest-green/80 dark:text-light-cream/80 hover:text-brass-accent transition-colors">{CONTACT_CONTENT.phone[language]}</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-brass-accent mt-1"><MailIcon /></span>
                                <div>
                                    <h3 className="font-bold text-lg text-forest-green dark:text-cream-white">Email</h3>
                                    <a href={`mailto:${CONTACT_CONTENT.email.en}`} className="text-forest-green/80 dark:text-light-cream/80 hover:text-brass-accent transition-colors">{CONTACT_CONTENT.email[language]}</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-brass-accent mt-1"><ClockIcon /></span>
                                <div>
                                    <h3 className="font-bold text-lg text-forest-green dark:text-cream-white">{CONTACT_CONTENT.openingHours.heading[language]}</h3>
                                    <p className="text-forest-green/80 dark:text-light-cream/80">{CONTACT_CONTENT.openingHours.days[language]}</p>
                                    <p className="text-forest-green/80 dark:text-light-cream/80">{CONTACT_CONTENT.openingHours.hours[language]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="lg:w-1/2 h-96 lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719692455806!2d-118.41235368528415!3d34.05101998060682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6005591%3A0x11efe2a524a79a8e!2sBeverly%20Hills%20City%20Hall!5e0!3m2!1sen!2sus!4v1678886543210!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;