import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
