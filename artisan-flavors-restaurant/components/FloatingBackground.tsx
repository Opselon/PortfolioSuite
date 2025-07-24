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

import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { DropletIcon, LeafIcon, SwirlIcon, GrainIcon } from './icons/FloatingIcons';

const elements = [
  // Deeper layers (move more)
  { id: 1, Component: SwirlIcon, depth: 0.3, size: 'w-48 h-48', position: { top: '10%', left: '5%' }, initialRotate: 45 },
  { id: 3, Component: DropletIcon, depth: 0.4, size: 'w-32 h-32', position: { top: '60%', left: '10%' }, initialRotate: 0 },
  { id: 7, Component: DropletIcon, depth: 0.35, size: 'w-28 h-28', position: { top: '85%', left: '30%' }, initialRotate: 180 },
  { id: 10, Component: SwirlIcon, depth: 0.25, size: 'w-20 h-20', position: { top: '80%', left: '65%' }, initialRotate: -30 },

  // Mid layers
  { id: 2, Component: LeafIcon, depth: -0.2, size: 'w-24 h-24', position: { top: '20%', left: '80%' }, initialRotate: -45 },
  { id: 5, Component: LeafIcon, depth: 0.18, size: 'w-20 h-20', position: { top: '5%', left: '45%' }, initialRotate: 20 },
  { id: 11, Component: LeafIcon, depth: -0.22, size: 'w-36 h-36', position: { top: '35%', left: '20%' }, initialRotate: 120 },
  { id: 12, Component: DropletIcon, depth: 0.15, size: 'w-16 h-16', position: { top: '15%', left: '60%' }, initialRotate: 0 },
  
  // Shallow layers (move less)
  { id: 4, Component: GrainIcon, depth: -0.1, size: 'w-40 h-40', position: { top: '75%', left: '90%' }, initialRotate: 0 },
  { id: 6, Component: SwirlIcon, depth: -0.08, size: 'w-40 h-40', position: { top: '40%', left: '60%' }, initialRotate: 100 },
  { id: 8, Component: GrainIcon, depth: -0.12, size: 'w-36 h-36', position: { top: '50%', left: '25%' }, initialRotate: 0 },
  { id: 9, Component: GrainIcon, depth: 0.05, size: 'w-64 h-64', position: { top: '90%', left: '5%' }, initialRotate: 0 },
  { id: 13, Component: SwirlIcon, depth: -0.07, size: 'w-56 h-56', position: { top: '5%', left: '95%' }, initialRotate: -90 },
];

const FloatingBackground: React.FC = () => {
  const { x, y } = useMousePosition();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveX = (x - windowSize.width / 2);
  const moveY = (y - windowSize.height / 2);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {elements.map(el => {
        const translateX = -moveX * el.depth;
        const translateY = -moveY * el.depth;
        // Add a subtle dynamic rotation based on horizontal mouse movement
        const dynamicRotate = (moveX * el.depth * 0.03);
        const transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${el.initialRotate + dynamicRotate}deg)`;
        
        return (
          <div
            key={el.id}
            className={`absolute transition-transform duration-500 ease-out ${el.size}`}
            style={{ ...el.position, transform }}
          >
            <el.Component className="w-full h-full text-brass-accent/10 dark:text-light-cream/5" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingBackground;