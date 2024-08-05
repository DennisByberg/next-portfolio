import ecoHeroPNG from '@/public/projects-images/eco-hero.png';
import movitaPNG from '@/public/projects-images/movita.png';
import portfolioPNG from '@/public/projects-images/portfolio.png';

export const PROJECTS_DATA = [
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

export default PROJECTS_DATA;
