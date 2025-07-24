# Artisan Flavors Restaurant Website

This is the codebase for a modern, elegant, and fully responsive website for "Artisan Flavors," a gourmet restaurant. The project is built with React and TypeScript, featuring a dynamic design, bilingual content (English & Persian), and a dark/light mode toggle.

It is designed to be easily customizable, even for those with minimal coding experience.

![PortfolioSuite Live Demo](https://github.com/Opselon/PortfolioSuite/blob/main/artisan-flavors-restaurant/demo/demo.gif?raw=true)

## ✨ Key Features

- **Modern & Elegant UI:** A clean, sophisticated design that puts the focus on the food and ambiance.
- **Fully Responsive:** Looks great on all devices, from large desktop monitors to mobile phones.
- **Dark & Light Mode:** A theme toggle allows users to switch between a light and dark version of the site. The user's preference is saved for their next visit.
- **Bilingual Support (EN/FA):** Instantly switch between English and Persian. The layout automatically adjusts to support Right-to-Left (RTL) for Persian.
- **Interactive 3D Background:** A dynamic, multi-layered background with floating elements that gracefully react to the user's cursor, creating an immersive experience.
- **Interactive Cards:** Subtle 3D card tilt effects on menu items, gallery images, and more, create an engaging user experience.
- **Component-Based:** Built with React, the UI is organized into logical, reusable components for each section of the website.
- **Easy to Customize:** All website content (text, images, links) is centralized in a single file, making updates simple and straightforward.

## 🚀 Technology Stack

- **React:** For building the user interface.
- **TypeScript:** For type safety and improved developer experience.
- **Tailwind CSS:** For styling the components with a utility-first approach.
- **Google Fonts:** For elegant and readable typography.
- **No Build Step:** The project uses `es-modules` and an `importmap` to run directly in the browser without needing a complex build setup like Webpack or Vite.

## 📂 Project Structure

The project is organized to be as clear as possible. Here are the key files and directories:

```
├── components/         # Contains all the website sections as React components
│   ├── About.tsx
│   ├── FloatingBackground.tsx
│   └── ...etc
├── contexts/           # Contains the React Context for managing global state
│   └── AppContext.tsx    # Manages theme (dark/light) and language (en/fa)
├── hooks/              # Contains reusable React hooks
│   └── useMousePosition.ts
├── App.tsx             # The main application component that assembles all sections
├── constants.ts        # ★ ALL WEBSITE CONTENT IS HERE! ★
├── types.ts            # TypeScript type definitions for our data
├── index.html          # The main HTML file (fonts, styles, and colors are configured here)
├── index.tsx           # The entry point for the React application
├── metadata.json       # Basic application metadata
└── README.md           # This file
```

## 🏃‍♂️ Getting Started (Running Locally)

Since this project doesn't require a complex build process, you can run it easily using any local web server.

1.  **Download the Files:** Make sure you have all the project files in a single folder on your computer.
2.  **Open in a Code Editor:** Open the project folder in a code editor like VS Code.
3.  **Start a Local Server:**
    *   **Recommended (VS Code):** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. Right-click on the `index.html` file and select "Open with Live Server".
    *   **Alternative (Python):** If you have Python installed, open a terminal in the project directory and run `python -m http.server`. Then open your browser to `http://localhost:8000`.

Your website should now be running locally in your browser!

## 🔧 Customization Guide

This is the most important part! Most user-facing content is located in the **`constants.ts`** file. You only need to edit this file to change the text and most images on the website.

### 1. Changing Text Content

All text—from the hero headline to the contact information—is stored in `constants.ts`.

**Example: Changing the main headline**

1.  Open `constants.ts`.
2.  Find the `HERO_CONTENT` object.
3.  Edit the `en` (English) and `fa` (Persian) values.

```typescript
// Before
export const HERO_CONTENT = {
  headline: { en: "Artisan Flavors, Modern Soul", fa: "طعم‌های هنرمندانه، روح مدرن" },
  cta: { en: "Reserve a Table", fa: "رزرو میز" },
};

// After
export const HERO_CONTENT = {
  headline: { en: "Your New Restaurant Name", fa: "نام رستوران جدید شما" },
  cta: { en: "Book Now", fa: "همین حالا رزرو کنید" },
};
```
This same principle applies to all other content, like the "About Us" text, testimonials, chef's bio, etc.

### 2. Updating Menu Items

The menu items are in an array called `MENU_ITEMS` inside `constants.ts`. You can add, remove, or edit items here.

```typescript
export const MENU_ITEMS: MenuItem[] = [
  {
    name: { en: "Neapolitan Pizza", fa: "پیتزا ناپولیتن" },
    description: { en: "The best pizza in town.", fa: "بهترین پیتزای شهر." },
    price: "$20",
    image: "https://your-image-url.com/pizza.jpg", // <-- Change the image URL here
  },
  // ... add more items here
];
```

### 3. Changing Images & Backgrounds

1.  **Section Images:** Most images (for the menu, gallery, chef, etc.) are defined in `constants.ts`. Simply replace the placeholder URLs (`picsum.photos`) with links to your own images.
2.  **Section Backgrounds:** Full-screen background images for sections like "About Us" and "Events" can be changed by editing the URL in their respective component files (`components/About.tsx`, `components/Events.tsx`).
3.  **Interactive Background Elements:** The floating elements in the global background are defined in `components/FloatingBackground.tsx`. You can customize their appearance, number, and behavior there.

### 4. Changing Fonts

The website uses Google Fonts. To change them:

1.  Go to [Google Fonts](https://fonts.google.com/) and select your desired fonts.
2.  Open `index.html`.
3.  Replace the existing `<link>` tag in the `<head>` section with the new one provided by Google Fonts.
4.  Update the `font-family` CSS rules in the `<style>` tag within `index.html` to use your new font names.

```html
<!-- In index.html -->
<style>
  body {
    font-family: 'Your New Body Font', sans-serif; /* Change here */
  }
  .font-playfair {
    font-family: 'Your New Heading Font', serif; /* Change here */
  }
</style>
```

### 5. Changing Colors

All website colors are defined in one central place for easy editing.

1.  Open `index.html`.
2.  Find the `<script>` tag that contains `tailwind.config`.
3.  Inside the `colors` object, you can change the hex codes for the custom color names. The entire site will update automatically.

```javascript
// In index.html, inside the tailwind.config script
colors: {
  'cream-white': '#F9F6F0',
  'light-cream': '#F0EAD6',
  'forest-green': '#2A4033',
  'dark-forest': '#1C2B22',
  'light-moss': '#DDE0D7',
  'pine-bark': '#3D4F45',
  'brass-accent': '#B89F5D', // Main Accent Color
}
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](https://github.com/Opselon/PortfolioSuite/blob/main/LICENSE) file for details.
