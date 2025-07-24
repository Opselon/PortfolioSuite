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
import { FOOTER_CONTENT } from '../constants';

const Footer: React.FC = () => {
    const { language } = useAppContext();
  return (
    <footer className="bg-light-moss/50 dark:bg-pine-bark/30 py-8 mt-16">
      <div className="container mx-auto px-6 text-center text-forest-green/70 dark:text-light-cream/70">
        <p className="text-sm">{FOOTER_CONTENT.copyright[language]}</p>
        <div className="flex justify-center space-x-6 mt-4">
          {FOOTER_CONTENT.social.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brass-accent transition-colors">
                {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;