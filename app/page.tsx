import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { HOME_MAIN_STYLE } from "@/styles/pageSX";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box component={"main"} sx={HOME_MAIN_STYLE}>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}

export default Home;
