'use client';
import useSectionInView from '@/hooks/useSectionInView';
import { Box } from '@mui/material';
import React from 'react';
import CustomizedTimeline from './CustomizedTimeline';
import SectionHeading from './SectionHeading';

function Experience() {
  const { ref } = useSectionInView('Experience');
  return (
    <Box
      sx={{ scrollMarginTop: '5rem' }}
      component={'section'}
      id={'experience'}
      ref={ref}
    >
      <SectionHeading>Experience</SectionHeading>
      <CustomizedTimeline />
    </Box>
  );
}

export default Experience;
