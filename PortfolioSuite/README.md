<div align="center">

# Professional Portfolio & Resume Website

A modern, high-performance, and accessible personal portfolio website built with React, TypeScript, and Tailwind CSS.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/Opselon/PortfolioSuite)
![Repo Size](https://img.shields.io/github/repo-size/Opselon/PortfolioSuite)

</div>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-customization">Customization</a> •
  <a href="#-connect-with-me">Connect with Me</a>
</p>

---

## 📸 Live Demo

![PortfolioSuite Live Demo](https://github.com/Opselon/PortfolioSuite/blob/main/PortfolioSuite/images/website.gif?raw=true)

---

## ✨ Features

- **Component-Driven Architecture:** Small, reusable, and maintainable components for a clean codebase.
- **Centralized Data:** Easily update all portfolio content from a single `resumeData.ts` file.
- **Fully Responsive:** A beautiful and functional layout on all devices, with a slide-in mobile navigation.
- **Interactive AI Art Generator:** Generate images from text prompts using the Google Gemini API in a sleek modal.
- **Persistent Dark Mode:** A user-friendly dark mode toggle that respects user preference via local storage.
- **Smooth Animations:** Subtle, physics-based animations powered by Framer Motion enhance the user experience.
- **Accessibility (A11y) Focused:** Built with semantic HTML, ARIA attributes, and keyboard navigation.
- **Performance Optimized:** Lazy rendering of sections ensures a fast initial load and a smooth user experience.

## 🛠️ Tech Stack

| Technology | Description |
| :--- | :--- |
| **React 18** | A modern JavaScript library for building user interfaces. |
| **TypeScript** | Static typing for robust and scalable application development. |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development. |
| **Framer Motion** | A production-ready motion library for creating fluid animations. |
| **Vite** | Next-generation frontend tooling for a fast development experience. |
| **Google Gemini API** | Powers the AI image generation feature. |

## 📂 Project Structure

The project is organized with a clear separation of concerns, making it easy to navigate and maintain.

```
/
├── public/
│   └── resume.pdf      # Your resume PDF
├── LICENSE
├── index.html
├── README.md
├── App.tsx             # Main application component
├── components/         # Reusable UI components
├── data/
│   └── resumeData.ts   # All personal data for the portfolio
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A **Google Gemini API Key** for the AI feature.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Opselon/PortfolioSuite.git
    cd PortfolioSuite/PortfolioSuite
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the project root (`PortfolioSuite/PortfolioSuite`) and add your API key:
    ```
    VITE_API_KEY=YOUR_GEMINI_API_KEY
    ```

### Running the Development Server

Start the Vite development server:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL provided in your terminal).

## 🎨 Customization

Making this portfolio your own is simple:

1.  **Edit Content:** Open `src/data/resumeData.ts` and replace the placeholder information with your personal details, experience, projects, and skills.
2.  **Add Your Resume:** Place your resume in PDF format inside the `public/` directory and ensure it is named `resume.pdf`.
3.  **Change Theme:** Modify colors, fonts, or other theme settings directly in the `<script>` tag of `index.html` where the Tailwind CSS configuration is located.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Opselon/PortfolioSuite/issues).

## 💖 Show Your Support

If you like this project, please give it a ⭐ on GitHub! It helps motivate me to continue creating and sharing.

## 👤 Connect with me

<p align="left">
<a href="https://github.com/Opselon" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="Opselon" height="30" width="40" /></a>
<a href="YOUR_LINKEDIN_URL" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Your LinkedIn" height="30" width="40" /></a>
<a href="YOUR_TWITTER_URL" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Your Twitter" height="30" width="40" /></a>
</p>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.