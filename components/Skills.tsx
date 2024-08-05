'use client';

import SKILLS_DATA from '@/data/skillsData';
import { useSectionInView } from '@/hooks/useSectionInView';
import { Box, SxProps, Theme } from '@mui/material';
import { common, grey } from '@mui/material/colors';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <Box component={'section'} sx={SKILLS_SECTION_STYLE} id={'skills'} ref={ref}>
      <SectionHeading>My skills</SectionHeading>
      <Box component={'ul'} sx={SKILLS_LIST_STYLE}>
        {SKILLS_DATA.map((skill, index) => (
          <Box
            component={motion.li}
            sx={SKILLS_LISTITEM_STYLE}
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

// Material UI Skills styles
const SKILLS_SECTION_STYLE: SxProps<Theme> = {
  marginBottom: '3rem',
  maxWidth: '53rem',
  scrollMarginTop: '3rem',
  textAlign: 'center',

  '@media (min-width: 640px)': {
    marginBottom: '10rem',
  },
};

const SKILLS_LIST_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '0.5rem',
  color: grey[800],
};

const SKILLS_LISTITEM_STYLE: SxProps<Theme> = {
  backgroundColor: common.white,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '13px',
  padding: '0.75rem 1.25rem',
};
