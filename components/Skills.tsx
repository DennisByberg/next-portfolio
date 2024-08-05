'use client';
import SKILLS_DATA from '@/data/skillsData';
import useSectionInView from '@/hooks/useSectionInView';
import {
  SKILLS_LIST_ITEM_STYLE,
  SKILLS_LIST_STYLE,
  SKILLS_SECTION_STYLE,
} from '@/styles/skillsSX';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function Skills() {
  const { ref } = useSectionInView('Skills');

  // Framer Motion variants
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <Box component={'section'} sx={SKILLS_SECTION_STYLE} id={'skills'} ref={ref}>
      <SectionHeading>My skills</SectionHeading>
      <Box component={'ul'} sx={SKILLS_LIST_STYLE}>
        {SKILLS_DATA.map((skill, index) => (
          <Box
            component={motion.li}
            sx={SKILLS_LIST_ITEM_STYLE}
            key={index}
            variants={fadeInAnimationVariants}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
