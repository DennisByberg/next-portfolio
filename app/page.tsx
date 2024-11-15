import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import { HOME_MAIN_STYLE } from '@/styles/pageSX';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box component={'main'} sx={HOME_MAIN_STYLE}>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </Box>
  );
}

export default Home;
