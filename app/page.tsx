import About from '@/components/About';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/SectionDivider';
import Skills from '@/components/Skills';
import { Box, SxProps, Theme } from '@mui/material';

export default function Home() {
  return (
    <Box component={'main'} sx={HOME_MAIN_STYLE}>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}

// Material UI Home styles
const HOME_MAIN_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInline: '1rem',
};
