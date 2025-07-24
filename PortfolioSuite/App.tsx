
import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { resumeData } from './data/resumeData';
import { Icon } from './components/icons/Icon';
import { LazyRender } from './components/LazyRender';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <LazyRender>
          <Experience />
        </LazyRender>
        <LazyRender>
          <Projects />
        </LazyRender>
        <LazyRender>
          <Skills />
        </LazyRender>
        <LazyRender>
          <Contact />
        </LazyRender>
      </main>
      <footer className="bg-light-card dark:bg-dark-card py-6 text-center">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center space-x-6 mb-4">
                 <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light-text/60 dark:text-dark-text/60 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="github" className="w-6 h-6"/></a>
                 <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light-text/60 dark:text-dark-text/60 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="linkedin" className="w-6 h-6"/></a>
                 <a href={`mailto:${resumeData.contact.email}`} aria-label="Email" className="text-light-text/60 dark:text-dark-text/60 hover:text-primary dark:hover:text-primary-light transition-colors"><Icon name="email" className="w-6 h-6"/></a>
            </div>
            <p className="text-sm text-light-text/60 dark:text-dark-text/60">
              Copyright &copy; {new Date().getFullYear()} Opselon. All Rights Reserved.
            </p>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;
