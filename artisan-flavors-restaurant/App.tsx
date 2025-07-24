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
import Header from './components/Header';
import Hero from './components/Hero';
import MenuPreview from './components/MenuPreview';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MeetTheChef from './components/MeetTheChef';
import ChefSpecial from './components/ChefSpecial';
import Events from './components/Events';
import FloatingBackground from './components/FloatingBackground';
import OurPhilosophy from './components/OurPhilosophy';
import Reservations from './components/Reservations';

const App: React.FC = () => {
  return (
    <div className="perspective-container bg-cream-white dark:bg-dark-forest text-forest-green dark:text-light-cream min-h-screen transition-colors duration-500">
      <FloatingBackground />
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <OurPhilosophy />
          <MeetTheChef />
          <MenuPreview />
          <ChefSpecial />
          <Gallery />
          <Testimonials />
          <Events />
          <Reservations />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;