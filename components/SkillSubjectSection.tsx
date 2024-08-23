import {
  SKILLS_LIST_ITEM_STYLE,
  SKILLS_LIST_STYLE,
  SKILLS_SUBJECT_STYLE,
} from '@/styles/skillsSX';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

interface ISkillSubjectSectionProps {
  title: string;
  skillData: readonly string[];
}

function SkillSubjectSection({ title, skillData }: ISkillSubjectSectionProps) {
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
    <React.Fragment>
      <Typography sx={SKILLS_SUBJECT_STYLE} variant={'h4'}>
        {title}
      </Typography>
      <Box component={'ul'} sx={SKILLS_LIST_STYLE}>
        {skillData.map((skill, index) => (
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
    </React.Fragment>
  );
}

export default SkillSubjectSection;
