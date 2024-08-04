import ecoHeroPNG from '@/public/projects-images/eco-hero.png';
import movitaPNG from '@/public/projects-images/movita.png';
import portfolioPNG from '@/public/projects-images/portfolio.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: 'Next Portfolio',
    description: 'My personal portfolio website.',
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Material UI',
      'React Email',
      'Framer Motion',
      'Resend',
      'Tailwind',
      'Vercel',
    ],
    imageUrl: portfolioPNG,
  },
  {
    id: 2,
    title: 'Movita Juice Bar',
    description: 'A project i created in school. It is a website for a juice bar.',
    tags: ['React', 'Typescript', 'Material UI', 'SASS', 'Vite', 'Tailwind', 'Vercel'],
    imageUrl: movitaPNG,
  },
  {
    id: 3,
    title: 'Eco Hero',
    description: 'Cool landing page',
    tags: ['React', 'Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'SASS', 'Zod'],
    imageUrl: ecoHeroPNG,
  },
] as const;

export const SKILLS_DATA = [
  'Agile Methodology',
  'CSS/SASS',
  'Cypress',
  'Express',
  'Firebase',
  'Framer Motion',
  'Git',
  'Github',
  'HTML',
  'JavaScript',
  'Jest',
  'TypeScript',
  'MongoDB',
  'Next.js',
  'Node',
  'React',
  'React Testing Library',
  'Redux',
  'UI/UX',
  'C#',
  'SQL',
] as const;

export const EXPERIENCE_DATA = [
  {
    title: '2024',
    cardTitle: 'Hills Golf & Sports Club',
    cardSubtitle: 'Göteborg',
    cardDetailedText: 'I work as a bartender at Hills Golf & Sports Club.',
  },
] as const;
