
import type { IResumeData } from '../types';

export const resumeData: IResumeData = {
  name: 'Alex Doe',
  title: 'Senior Frontend Engineer',
  titles: [
    'Senior Frontend Engineer',
    'React Specialist',
    'UI/UX Advocate',
    'Creative Technologist',
  ],
  contact: {
    email: 'alex.doe@email.com',
    linkedin: 'https://linkedin.com/in/alexdoe',
    github: 'https://github.com/alexdoe',
  },
  about: "A passionate and creative developer with over a decade of experience in building beautiful, performant, and accessible user interfaces. I thrive on solving complex problems and turning ideas into reality.",
  experience: [
    {
      role: 'Lead Frontend Engineer',
      company: 'Innovate Inc.',
      date: 'Jan 2020 - Present',
      description: [
        'Led a team of 5 engineers in developing a new design system, improving development velocity by 40%.',
        'Architected and built a highly scalable and performant e-commerce platform using React and Next.js.',
        'Championed accessibility standards, achieving WCAG 2.1 AA compliance across all products.',
        'Mentored junior engineers and established best practices for code quality and testing.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Tech Solutions LLC',
      date: 'Jun 2016 - Dec 2019',
      description: [
        'Developed and maintained a large-scale data visualization dashboard with React and D3.js.',
        'Improved application load times by 60% through code splitting, lazy loading, and performance profiling.',
        'Collaborated with UX designers to create intuitive and user-friendly interfaces.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Agency',
      date: 'Aug 2013 - May 2016',
      description: [
        'Built pixel-perfect, responsive websites for a variety of clients using HTML, CSS, and JavaScript.',
        'Transitioned the team from jQuery-based projects to modern React frameworks.',
      ],
    },
  ],
  projects: [
    {
      title: 'Project Alpha',
      description: 'A cutting-edge data dashboard that provides real-time analytics and visualizations for enterprise clients.',
      tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'GraphQL'],
      imageUrl: 'https://picsum.photos/seed/alpha/400/300',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A fully-featured online store with a custom CMS, payment gateway integration, and a focus on UX.',
      tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      imageUrl: 'https://picsum.photos/seed/ecommerce/400/300',
      liveUrl: '#',
    },
    {
      title: 'Mobile Task Manager',
      description: 'A cross-platform productivity app built with React Native to help users organize their daily tasks.',
      tags: ['React Native', 'Firebase', 'Redux'],
      imageUrl: 'https://picsum.photos/seed/task/400/300',
      repoUrl: '#',
    },
     {
      title: 'AI Art Generator',
      description: 'A web application that uses generative AI to create unique images from text prompts.',
      tags: ['React', 'Framer Motion', 'Gemini API'],
      imageUrl: 'https://picsum.photos/seed/art/400/300',
      liveUrl: '#',
      repoUrl: '#',
    },
  ],
  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Vite', category: 'Tools' },
    { name: 'Webpack', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
    { name: 'UI/UX Design', category: 'Other' },
    { name: 'Accessibility', category: 'Other' },
  ],
};