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

import React, { useRef, ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const rotateX = y * -15; // Max rotation
    const rotateY = x * 15;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    el.style.transition = `transform 0.1s ease-out`;

    const glare = el.querySelector('.glare') as HTMLElement | null;
    if (glare) {
        const glareX = e.clientX - left;
        const glareY = e.clientY - top;
        glare.style.setProperty('--glare-x', `${glareX}px`);
        glare.style.setProperty('--glare-y', `${glareY}px`);
        glare.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    el.style.transition = `transform 0.5s ease-in-out`;
    
    const glare = el.querySelector('.glare') as HTMLElement | null;
    if (glare) {
        glare.style.opacity = '0';
    }
  };

  return (
    <div
      ref={ref}
      className={`interactive-card relative ${className || ''}`}
      style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
        {children}
        <div 
          className="glare"
          style={{ transform: 'translate(var(--glare-x, -50%), var(--glare-y, -50%))' }}
        ></div>
    </div>
  );
};

export default InteractiveCard;