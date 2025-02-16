'use client';
import useSectionInView from '@/hooks/useSectionInView';
import { ABOUT_SECTION_STYLE } from '@/styles/aboutSX';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

function About() {
  const { ref } = useSectionInView('About');

  return (
    <Box
      sx={ABOUT_SECTION_STYLE}
      component={motion.section}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id={'about'}
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <Typography paragraph={true} sx={{ mb: 4, lineHeight: 1.9 }}>
        My name is Dennis Byberg, and I am a 30-year-old front-end web developer living in
        Kållered, Göteborg. When i&apos;m not diving into various hobby projects, I enjoy
        spending time with my son and partner. In addition to that, I have a great
        interest in football and look forward to one day being able to hit the golf course
        when time and opportunity allow, as I have developed a strong interest in golf
        while working part-time at Hills Golf & Sports Club.
      </Typography>
      <Typography paragraph={true} sx={{ mb: 0, lineHeight: 1.9 }}>
        I have a background in back-end development after one year of studies at Campus
        Mölndal Vocational University and have recently completed a two-year education in
        front-end web development at Jensen Vocational University. I am currently studying
        Cloud Development at Campus Mölndal and will graduate in the spring of 2026, at
        which point I will be able to title myself as a Junior Fullstack Cloud Developer.
      </Typography>
    </Box>
  );
}

export default About;
