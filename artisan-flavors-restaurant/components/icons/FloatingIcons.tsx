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

export const SwirlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,50 C20,27.9 37.9,10 60,10 C82.1,10 100,27.9 100,50 C100,72.1 82.1,90 60,90 C37.9,90 20,72.1 20,50" />
        <path d="M40,50 C40,39 49,30 60,30 C71,30 80,39 80,50 C80,61 71,70 60,70 C49,70 40,61 40,50" />
    </svg>
);

export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50,100 C75,75 100,50 100,50 C50,50 25,25 0,0 C0,0 25,25 50,100 Z" />
  </svg>
);

export const DropletIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 C22.38 0 0 22.38 0 50 C0 85 50 100 50 100 S100 85 100 50 C100 22.38 77.62 0 50 0 Z" />
  </svg>
);

export const GrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30,90 C40,70 60,40 70,10" />
        <path d="M35,90 C45,70 65,40 75,10" />
        <path d="M40,90 C50,70 70,40 80,10" />
    </svg>
);