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

export interface BilingualText {
  en: string;
  fa: string;
}

export interface NavLink {
  text: BilingualText;
  href: string;
}

export interface MenuItem {
  name: BilingualText;
  description: BilingualText;
  price: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: BilingualText;
}

export interface Testimonial {
  quote: BilingualText;
  author: BilingualText;
}

export interface ChefSpecial {
  heading: BilingualText;
  dishName: BilingualText;
  description: BilingualText;
  image: string;
}

export interface TeamMember {
  name: BilingualText;
  role: BilingualText;
  bio: BilingualText;
  image: string;
}

export interface EventsInfo {
  heading: BilingualText;
  description: BilingualText;
  cta: BilingualText;
}

export interface PhilosophyPoint {
  icon: React.FC<{className?: string}>;
  title: BilingualText;
  description: BilingualText;
}

export interface ReservationsContent {
    heading: BilingualText;
    description: BilingualText;
    cta: BilingualText;
}