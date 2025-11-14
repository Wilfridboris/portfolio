import { Project, Experience, Education, Skill, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, TypeScript, and modern web technologies. Features include product catalog, shopping cart, checkout process, user authentication, and admin dashboard.',
    shortDescription: 'Modern e-commerce solution with React & TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Development',
    featured: true,
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and detailed analytics dashboard.',
    shortDescription: 'Collaborative task tracking with real-time updates',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'React DnD'],
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    ],
    githubUrl: 'https://github.com',
    category: 'Web Development',
    featured: true,
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'An elegant weather dashboard providing real-time weather information, forecasts, and interactive maps. Features location-based weather, multi-city comparison, and weather alerts.',
    shortDescription: 'Real-time weather tracking with interactive maps',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Development',
    featured: false,
  },
  {
    id: 'portfolio-generator',
    title: 'Portfolio Generator',
    description: 'A dynamic portfolio generator that allows developers to create beautiful, responsive portfolios without writing code. Includes multiple themes, customization options, and export functionality.',
    shortDescription: 'Create stunning portfolios with no code',
    technologies: ['React', 'TypeScript', 'Styled Components', 'React Router'],
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
    ],
    githubUrl: 'https://github.com',
    category: 'Tools',
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: 'Present',
    current: true,
    description: [
      'Led development of core platform features using React and TypeScript',
      'Implemented responsive design patterns and accessibility standards',
      'Mentored junior developers and conducted code reviews',
      'Reduced bundle size by 40% through code splitting and optimization',
    ],
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    startDate: '2020-06',
    endDate: '2021-12',
    current: false,
    description: [
      'Built responsive web applications for various clients',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Integrated RESTful APIs and GraphQL endpoints',
      'Improved application performance and user experience',
    ],
  },
  {
    id: '3',
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    location: 'Austin, TX',
    startDate: '2019-01',
    endDate: '2020-05',
    current: false,
    description: [
      'Developed and maintained company website and internal tools',
      'Wrote clean, maintainable code following best practices',
      'Participated in agile development processes',
      'Contributed to open-source projects',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'California, USA',
    startDate: '2015',
    endDate: '2019',
    description: 'Focused on software engineering, web development, and algorithms',
  },
  {
    id: '2',
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Code Academy',
    location: 'Online',
    startDate: '2018',
    endDate: '2018',
    description: 'Intensive program covering modern web development technologies',
  },
];

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'JavaScript', category: 'frontend', level: 95 },
  { name: 'HTML/CSS', category: 'frontend', level: 95 },
  { name: 'Tailwind CSS', category: 'frontend', level: 90 },
  { name: 'Redux', category: 'frontend', level: 85 },
  { name: 'Next.js', category: 'frontend', level: 80 },
  { name: 'Node.js', category: 'backend', level: 75 },
  { name: 'Express', category: 'backend', level: 70 },
  { name: 'REST API', category: 'backend', level: 80 },
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'Webpack', category: 'tools', level: 75 },
  { name: 'Vite', category: 'tools', level: 85 },
  { name: 'Jest', category: 'tools', level: 80 },
  { name: 'CI/CD', category: 'tools', level: 75 },
];

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile',
  twitter: 'https://twitter.com/yourprofile',
};
