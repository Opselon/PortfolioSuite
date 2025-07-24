
export interface IExperience {
  role: string;
  company: string;
  date: string;
  description: string[];
}

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ISkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface IResumeData {
  name: string;
  title: string;
  titles: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
  about: string;
  experience: IExperience[];
  projects: IProject[];
  skills: ISkill[];
}
