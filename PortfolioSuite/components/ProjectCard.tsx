
import React from 'react';
import { motion } from 'framer-motion';
import type { IProject } from '../types';
import { Icon } from './icons/Icon';

interface ProjectCardProps {
  project: IProject;
  onAiProjectClick: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onAiProjectClick }) => {
  const isAiProject = project.tags.includes('Gemini API');

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg bg-light-card dark:bg-dark-card group"
      variants={cardVariants}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2 text-light-text dark:text-dark-text">{project.title}</h3>
        <p className="text-light-text/80 dark:text-dark-text/80 mb-4 h-20 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className={`px-2 py-1 ${tag === 'Gemini API' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 'bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-light'} text-xs font-semibold rounded-full`}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
        <h3 className="text-xl font-bold font-heading mb-2 text-white text-center">{project.title}</h3>
        <p className="text-white/80 mb-4 text-center">{project.description}</p>
        <div className="flex gap-4">
          {isAiProject ? (
              <button
                onClick={onAiProjectClick}
                aria-label={`Try the AI Art Generator`}
                className="px-4 py-2 bg-accent rounded-lg text-white font-bold hover:bg-accent-dark transition-colors"
              >
                Try it out!
              </button>
          ) : (
            <>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`} className="p-3 bg-accent rounded-full text-white hover:bg-accent-dark transition-colors">
                  <Icon name="link" />
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`} className="p-3 bg-accent rounded-full text-white hover:bg-accent-dark transition-colors">
                  <Icon name="github" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
