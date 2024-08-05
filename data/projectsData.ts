import dictionaryPNG from '@/public/projects-images/dictionary.png';
import ecoHeroPNG from '@/public/projects-images/eco-hero.png';
import marksToDrinkListPNG from '@/public/projects-images/marks-to-drink-list.png';
import movitaPNG from '@/public/projects-images/movita.png';
import portfolioPNG from '@/public/projects-images/portfolio.png';

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Next Portfolio',
    description: 'A personal portfolio website showcasing my projects and skills',
    githubURL: 'https://github.com/DennisByberg/next-portfolio',
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Material UI',
      'React Email',
      'Framer Motion',
      'Tailwind',
    ],
    imageUrl: portfolioPNG,
  },
  {
    id: 2,
    title: 'Movita Juice Bar',
    description:
      'A UI/UX school project I developed, focused on creating a mini-website with an emphasis on digital accessibility',
    githubURL: '',
    tags: ['React', 'Typescript', 'Material UI', 'SASS', 'Vite', 'Tailwind'],
    imageUrl: movitaPNG,
  },
  {
    id: 3,
    title: 'Dictionary',
    description:
      'A dictionary application I developed, allowing users to look up word definitions using the Free Dictionary API',
    githubURL: '',
    tags: ['React', 'TypeScript', 'Redux', 'SASS', 'Testing'],
    imageUrl: dictionaryPNG,
  },
  {
    id: 4,
    title: 'Marks To Drink List',
    description:
      'A school project I developed, learned Redux and TypeScript through the development of a drink list application',
    githubURL: '',
    tags: ['React', 'TypeScript', 'Redux', 'SASS', 'Vite'],
    imageUrl: marksToDrinkListPNG,
  },
  {
    id: 5,
    title: 'Eco Hero',
    description:
      'A landing page project aimed at promoting environmental awareness and sustainability.',
    githubURL: '',
    tags: ['React', 'Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'SASS', 'Zod'],
    imageUrl: ecoHeroPNG,
  },
] as const;

export default PROJECTS_DATA;
