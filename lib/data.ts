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
  {
    name: "Experience",
    hash: "#experience",
  },
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
