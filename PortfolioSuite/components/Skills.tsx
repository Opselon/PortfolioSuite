
import React, { useMemo } from 'react';
import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import { resumeData } from '../data/resumeData';
import type { ISkill } from '../types';

export const Skills: React.FC = () => {
  const skillsByCategory = useMemo(() => {
    return resumeData.skills.reduce((acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<ISkill['category'], ISkill[]>);
  }, []);

  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="space-y-10">
        {Object.entries(skillsByCategory).map(([category, skills]: [string, ISkill[]]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold font-heading mb-6 text-center text-secondary dark:text-secondary-light">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
