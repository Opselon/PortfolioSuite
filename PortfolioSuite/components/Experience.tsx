
import React from 'react';
import { Section } from './Section';
import { TimelineItem } from './TimelineItem';
import { resumeData } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative">
        {resumeData.experience.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isLast={index === resumeData.experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};
