import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import Skills from "@/components/Skills/Skills";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
