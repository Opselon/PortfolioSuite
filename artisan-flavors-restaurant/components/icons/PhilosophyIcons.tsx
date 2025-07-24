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

export const QualityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5l2.09 6.42H21l-5.32 3.96 2.09 6.42L12 14.34l-5.77 4.02 2.09-6.42L3 7.92h6.91L12 1.5z" />
  </svg>
);

export const TraditionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.25v19.5M4.5 2.25h15M4.5 21.75h15M9 2.25v19.5m6-19.5v19.5m-10.5-4.5h6m-6-6h6m-6-6h6" />
  </svg>
);

export const InnovationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 0v1.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25V18m-9 0v1.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 18V18m18-6h-1.5m-15 0H2.25m13.5 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);
