import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
