import ecoHeroPNG from "@/public/projects-images/eco-hero.png";
import movitaPNG from "@/public/projects-images/movita.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Movita Juice Bar",
    description: "A project i created in school. It is a website for a juice bar.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: movitaPNG,
  },
  {
    id: 2,
    title: "Eco Hero",
    description: "Cool landing page",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ecoHeroPNG,
  },
] as const;

export const SKILLS_DATA = [
  "Agila Metoder",
  "Cypress",
  "Express",
  "Firebase",
  "Git",
  "Github",
  "HTML",
  "JavaScript",
  "Jest",
  "TypeScript",
  "MongoDB",
  "Node",
  "React",
  "React Testing Library",
  "Redux",
  "UI / UX",
  "SASS / CSS",
  "C#",
  "SQL",
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "2024",
    cardTitle: "Hills Golf & Sports Club",
    cardSubtitle: "Göteborg",
    cardDetailedText: "I work as a bartender at Hills Golf & Sports Club.",
  },
  {
    date: Date.now(),
    cardTitle: "Frontend Developer",
    // location: "Eco Hero",
    // description: "I created a landing page for a company in school.",
    // icon: React.createElement(CgWorkAlt),
    // date: "2021",
  },
] as const;
