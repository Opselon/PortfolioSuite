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

import { NavLink, MenuItem, BilingualText, GalleryImage, Testimonial, TeamMember, ChefSpecial, EventsInfo, PhilosophyPoint, ReservationsContent } from './types';
import { QualityIcon, TraditionIcon, InnovationIcon } from './components/icons/PhilosophyIcons';

export const NAVIGATION_LINKS: NavLink[] = [
  { text: { en: "Home", fa: "خانه" }, href: "#home" },
  { text: { en: "About", fa: "درباره ما" }, href: "#about" },
  { text: { en: "Philosophy", fa: "فلسفه ما" }, href: "#philosophy"},
  { text: { en: "Menu", fa: "منو" }, href: "#menu" },
  { text: { en: "Chef", fa: "سرآشپز" }, href: "#chef" },
  { text: { en: "Gallery", fa: "گالری" }, href: "#gallery" },
  { text: { en: "Events", fa: "رویدادها" }, href: "#events" },
  { text: { en: "Reservations", fa: "رزرو" }, href: "#reservations" },
  { text: { en: "Contact", fa: "تماس" }, href: "#contact" },
];

export const HERO_CONTENT = {
  headline: { en: "Artisan Flavors, Modern Soul", fa: "طعم‌های هنرمندانه، روح مدرن" },
  cta: { en: "Reserve a Table", fa: "رزرو میز" },
};

export const MENU_PREVIEW_CONTENT = {
    heading: { en: "A Taste of Our Menu", fa: "چشیدن طعم منوی ما" },
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: { en: "Neapolitan Pizza", fa: "پیتزا ناپولیتن" },
    description: { en: "Classic pizza with San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil.", fa: "پیتزای کلاسیک با گوجه فرنگی سن مارزانو، موزارلای تازه، ریحان و کمی روغن زیتون." },
    price: "$18",
    image: "https://picsum.photos/seed/pizza1/400/300",
  },
  {
    name: { en: "Gourmet Angus Burger", fa: "برگر انگوس گورمه" },
    description: { en: "Juicy Angus beef patty with aged cheddar, caramelized onions, and our secret sauce on a brioche bun.", fa: "گوشت گوساله انگوس با پنیر چدار، پیاز کاراملی و سس مخصوص ما در نان بریوش." },
    price: "$22",
    image: "https://picsum.photos/seed/burger1/400/300",
  },
  {
    name: { en: "Artisan Sandwich", fa: "ساندویچ آرتیزان" },
    description: { en: "Prosciutto, fig jam, arugula, and goat cheese on freshly baked ciabatta.", fa: "پروשוטو، مربای انجیر، آروگولا و پنیر بز روی نان چاباتا تازه پخته شده." },
    price: "$16",
    image: "https://picsum.photos/seed/sandwich1/400/300",
  },
    {
    name: { en: "Truffle Pasta", fa: "پاستا ترافل" },
    description: { en: "Handmade tagliatelle with a creamy black truffle sauce and shaved parmesan.", fa: "تالیاتله دست ساز با سس خامه ای ترافل سیاه و پارمزان رنده شده." },
    price: "$25",
    image: "https://picsum.photos/seed/pasta1/400/300",
  },
];

export const ABOUT_CONTENT = {
    heading: { en: "Our Story", fa: "داستان ما" },
    paragraph1: { en: "Born from a passion for authentic flavors and culinary innovation, Artisan Flavors is more than just a restaurant—it's an experience. We blend timeless recipes with a modern soul, using only the freshest, locally-sourced ingredients to craft dishes that delight the senses.", fa: "رستوران ما که از اشتیاق به طعم‌های اصیل و نوآوری در آشپزی متولد شده، چیزی فراتر از یک رستوران است - یک تجربه است. ما دستور العمل‌های جاودانه را با روحی مدرن ترکیب می‌کنیم و تنها از تازه‌ترین مواد اولیه محلی برای خلق غذاهایی استفاده می‌کنیم که حواس را به وجد می‌آورد." }
};

export const PHILOSOPHY_CONTENT: { heading: BilingualText; points: PhilosophyPoint[] } = {
  heading: { en: "Our Philosophy", fa: "فلسفه ما" },
  points: [
    {
      icon: QualityIcon,
      title: { en: "Uncompromising Quality", fa: "کیفیت بی‌نظیر" },
      description: { en: "We source the finest, freshest ingredients, treating each one with the utmost respect to bring out its natural flavor.", fa: "ما بهترین و تازه‌ترین مواد اولیه را تهیه می‌کنیم و با هر یک با نهایت احترام رفتار می‌کنیم تا طعم طبیعی آن را به نمایش بگذاریم." },
    },
    {
      icon: TraditionIcon,
      title: { en: "Rooted in Tradition", fa: "ریشه در سنت" },
      description: { en: "Our recipes are inspired by timeless culinary traditions, passed down through generations and perfected in our kitchen.", fa: "دستور پخت‌های ما از سنت‌های آشپزی جاودانه الهام گرفته شده، از نسلی به نسل دیگر منتقل شده و در آشپزخانه ما به کمال رسیده است." },
    },
    {
      icon: InnovationIcon,
      title: { en: "Driven by Innovation", fa: "حرکت با نوآوری" },
      description: { en: "We continuously explore new techniques and flavor combinations to create a modern, unforgettable dining experience.", fa: "ما به طور مداوم در حال کشف تکنیک‌ها و ترکیب‌های طعم جدید هستیم تا تجربه‌ای مدرن و فراموش‌نشدنی از غذا خوردن خلق کنیم." },
    },
  ],
};

export const MEET_THE_CHEF_CONTENT: { heading: BilingualText; chef: TeamMember } = {
    heading: { en: "Meet the Chef", fa: "آشنایی با سرآشپز" },
    chef: {
        name: { en: "Julian Anders", fa: "جولیان آندرس" },
        role: { en: "Executive Chef & Founder", fa: "سرآشپز اجرایی و بنیانگذار" },
        bio: { en: "Chef Julian has spent over two decades mastering the art of culinary fusion. His philosophy is simple: honor the ingredients, innovate with passion, and create unforgettable memories one plate at a time. His journey through the world's finest kitchens inspires every dish at Artisan Flavors.", fa: "سرآشپز جولیان بیش از دو دهه را صرف تسلط بر هنر تلفیق آشپزی کرده است. فلسفه او ساده است: به مواد اولیه احترام بگذار، با اشتیاق نوآوری کن و با هر بشقاب، خاطراتی فراموش نشدنی خلق کن. سفر او در بهترین آشپزخانه‌های جهان، الهام‌بخش هر غذا در طعم‌های هنرمندانه است." },
        image: "https://picsum.photos/seed/chef/500/500",
    }
};

export const CHEF_SPECIAL_CONTENT: ChefSpecial = {
    heading: { en: "Chef's Signature", fa: "امضای سرآشپز" },
    dishName: { en: "Saffron Risotto with Seared Scallops", fa: "ریزوتو زعفرانی با اسکالوپ گریل شده" },
    description: { en: "A vibrant, creamy risotto infused with delicate saffron threads, topped with perfectly seared jumbo scallops and a hint of citrus zest. This dish is a celebration of land and sea, embodying the essence of our culinary spirit.", fa: "یک ریزوتوی خامه‌ای و پرجنب و جوش با رشته‌های ظریف زعفران که با اسکالوپ‌های جامبو کاملاً گریل شده و کمی پوست مرکبات تزئین شده است. این غذا جشنی از زمین و دریاست که جوهر روح آشپزی ما را تجسم می‌بخشد." },
    image: "https://picsum.photos/seed/specialdish/800/800"
};

export const GALLERY_CONTENT = {
    heading: { en: "Our Culinary Gallery", fa: "گالری آشپزی ما" },
    images: [
        { src: "https://picsum.photos/seed/gallery1/600/600", alt: { en: "A delicious looking pizza", fa: "یک پیتزای خوشمزه" } },
        { src: "https://picsum.photos/seed/gallery2/600/600", alt: { en: "A close-up of a gourmet burger", fa: "نمایی نزدیک از یک برگر گورمه" } },
        { src: "https://picsum.photos/seed/gallery3/600/600", alt: { en: "Elegant restaurant interior", fa: "فضای داخلی شیک رستوران" } },
        { src: "https://picsum.photos/seed/gallery4/600/600", alt: { en: "A beautifully plated pasta dish", fa: "یک بشقاب پاستای زیبا" } },
        { src: "https://picsum.photos/seed/gallery5/600/600", alt: { en: "A refreshing cocktail", fa: "یک کوکتل گوارا" } },
        { src: "https://picsum.photos/seed/gallery6/600/600", alt: { en: "Artfully crafted dessert", fa: "دسر هنرمندانه" } },
    ] as GalleryImage[]
};

export const TESTIMONIALS_CONTENT = {
    heading: { en: "What Our Guests Say", fa: "مشتریان ما چه می‌گویند" },
    reviews: [
        {
            quote: { en: "An absolute culinary masterpiece. Every dish was a delight to the senses. The ambiance is perfect for a special night out.", fa: "یک شاهکار آشپزی به تمام معنا. هر غذا لذتی برای حواس بود. محیط برای یک شب خاص عالی است." },
            author: { en: "Jessica Miller", fa: "جسیکا میلر" },
        },
        {
            quote: { en: "The best burger I've had in years. You can taste the quality of the ingredients. I'll be back for more!", fa: "بهترین برگری که در سال‌های اخیر خورده‌ام. کیفیت مواد اولیه را می‌توانید بچشید. برای بیشتر برمی‌گردم!" },
            author: { en: "David Chen", fa: "دیوید چن" },
        },
        {
            quote: { en: "A hidden gem! The service was impeccable and the food was divine. The Persian translation on the menu was a lovely touch.", fa: "یک جواهر پنهان! خدمات بی‌نقص و غذا الهی بود. ترجمه فارسی در منو یک حرکت دوست‌داشتنی بود." },
            author: { en: "Aria Hosseini", fa: "آریا حسینی" },
        }
    ] as Testimonial[]
};

export const EVENTS_CONTENT: EventsInfo = {
    heading: { en: "Private Dining & Events", fa: "ناهارخوری خصوصی و رویدادها" },
    description: { en: "Host your next special occasion at Artisan Flavors. From intimate gatherings to corporate events, our space can be tailored to your needs. Our team will work with you to create a memorable experience with a customized menu and impeccable service.", fa: "مراسم ویژه بعدی خود را در طعم‌های هنرمندانه برگزار کنید. از گردهمایی‌های صمیمی تا رویدادهای شرکتی، فضای ما می‌تواند متناسب با نیازهای شما تنظیم شود. تیم ما با شما همکاری خواهد کرد تا با یک منوی سفارشی و خدمات بی‌نقص، تجربه‌ای به یاد ماندنی خلق کند." },
    cta: { en: "Inquire Now", fa: "اکنون استعلام بگیرید" }
};

export const RESERVATIONS_CONTENT: ReservationsContent = {
    heading: { en: "Experience It Yourself", fa: "خودتان تجربه کنید" },
    description: { en: "Your table is waiting. Reserve your spot to experience the soul of artisan flavors and create unforgettable memories.", fa: "میز شما منتظر است. جای خود را رزرو کنید تا روح طعم‌های هنرمندانه را تجربه کرده و خاطراتی فراموش‌نشدنی بسازید." },
    cta: { en: "Reserve Now", fa: "همین حالا رزرو کنید" }
};

export const CONTACT_CONTENT = {
    heading: { en: "Get In Touch", fa: "تماس با ما" },
    address: { en: "123 Culinary Lane, Foodie City, 90210", fa: "خیابان آشپزی ۱۲۳، شهر فودی، ۹۰۲۱۰" },
    phone: { en: "+1 (234) 567-890", fa: "+۱ (۲۳۴) ۵۶۷-۸۹۰" },
    email: { en: "reservations@artisanflavors.com", fa: "reservations@artisanflavors.com" },
    openingHours: {
        heading: { en: "Opening Hours", fa: "ساعات کاری" },
        days: { en: "Monday - Sunday", fa: "دوشنبه - یکشنبه" },
        hours: { en: "12:00 PM - 11:00 PM", fa: "۱۲:۰۰ ظهر - ۱۱:۰۰ شب" },
    }
};

export const FOOTER_CONTENT = {
    copyright: { en: `© ${new Date().getFullYear()} Artisan Flavors Restaurant. All Rights Reserved.`, fa: `© ${new Date().getFullYear()} تمامی حقوق برای رستوران طعم‌های هنرمندانه محفوظ است.` },
    social: [
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'Twitter', href: '#' }
    ]
};