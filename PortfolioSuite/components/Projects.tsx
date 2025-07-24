
import React, { useState } from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { resumeData } from '../data/resumeData';
import { AiImageModal } from './AiImageModal';

export const Projects: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <>
      <Section id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project}
              onAiProjectClick={() => setIsAiModalOpen(true)}
            />
          ))}
        </div>
      </Section>
      <AiImageModal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
      />
    </>
  );
};
