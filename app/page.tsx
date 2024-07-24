import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
