
# Professional Portfolio & Resume Website

This is a modern, high-performance, and accessible personal portfolio website built to showcase professional experience, projects, and skills. It features a clean design, smooth animations, and a dark mode toggle.

This project is licensed under the MIT License and maintained by [Opselon](https://github.com/Opselon).

## Live Demo & Preview

![PortfolioSuite Live Demo](https://github.com/Opselon/PortfolioSuite/blob/main/PortfolioSuite/images/website.gif?raw=true)

## Tech Stack

- **Framework:** React 18+
- **Language:** TypeScript
- **AI:** Google Gemini API (`@google/genai`)
- **Styling:** Tailwind CSS (via CDN with JIT compilation)
- **Animations:** Framer Motion
- **Build Tool:** Vite (or any other modern React setup)

## Features

- **Component-Driven Architecture:** The UI is broken down into small, reusable, and maintainable components.
- **Centralized Data:** All portfolio content is managed from a single `resumeData.ts` file, making updates easy.
- **Responsive Design:** Fully responsive layout with a slide-in mobile navigation menu.
- **Interactive AI Art Generator:** A project card that opens a modal to generate images from text prompts using the Google Gemini API.
- **Dark Mode:** A sleek, user-friendly dark mode that can be toggled and is saved in local storage.
- **Smooth Animations:** Subtle, physics-based animations powered by Framer Motion to enhance user experience.
- **Accessibility (A11y):** Built with accessibility in mind, using semantic HTML, ARIA attributes, and keyboard navigation.
- **Performance Optimized:** Deferred rendering of components to ensure a fast initial user experience.
- **Dynamic Content:** Features like a "typing" effect in the hero section add a dynamic touch.

## Project Structure

```
/
├── public/
│   └── resume.pdf      # Placeholder for your resume PDF
├── LICENSE             # MIT License file
├── index.html          # Main HTML entry point
├── README.md           # This file
├── metadata.json       # App metadata
├── App.tsx             # Main application component
├── index.tsx           # React root renderer
├── types.ts            # Global TypeScript types
├── components/         # Reusable UI components
│   ├── AiImageModal.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── icons/
│   │   └── Icon.tsx
│   ├── LazyRender.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Section.tsx
│   ├── SkillBadge.tsx
│   ├── Skills.tsx
│   ├── ThemeToggle.tsx
│   └── TimelineItem.tsx
├── data/
│   └── resumeData.ts   # All personal data for the portfolio
├── hooks/
│   ├── useOnScreen.ts
│   ├── useTheme.ts
│   └── useTypingEffect.ts
└── lib/
    └── utils.ts        # Utility functions
```

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have Node.js and a package manager like npm or yarn installed.

To use the AI Image Generator, you must have a Google Gemini API key.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Opselon/professional-portfolio.git
    cd professional-portfolio
    ```
2.  Install the required dependencies:
    ```sh
    npm install
    ```
3.  Set up your environment variables. Create a `.env` file in the root of the project and add your API key:
    ```
    VITE_API_KEY=YOUR_GEMINI_API_KEY
    ```
    The application uses `process.env.API_KEY` which Vite makes available from `.env` files.

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```sh
npm run dev
```

This will start the Vite development server, and you can view the application by navigating to `http://localhost:5173` (or the URL provided in your terminal).

### Customization

1.  **Content:** Edit `src/data/resumeData.ts` to replace the placeholder information with your own experience, projects, and skills.
2.  **Resume:** Place your resume in PDF format in the `public/` directory and name it `resume.pdf`.
3.  **Styling:** Modify the Tailwind CSS configuration within the `<script>` tag in `index.html` to change colors, fonts, or other theme settings.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.