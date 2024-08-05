'use client';
import PROJECTS_DATA from '@/data/projectsData';
import { useSectionInView } from '@/hooks/useSectionInView';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import Project from './Project';
import SectionHeading from './SectionHeading';

function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <Box
      component={motion.section}
      sx={{ scrollMarginTop: '7rem' }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="projects"
      ref={ref}
    >
      <SectionHeading>My Projects</SectionHeading>
      <Box component={'div'}>
        {PROJECTS_DATA.map((project) => (
          <React.Fragment key={project.id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default Projects;
