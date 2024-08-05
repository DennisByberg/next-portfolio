'use client';
import { SECTION_DIVIDER_STYLE } from '@/styles/sectionDividerSX';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

function SectionDivider() {
  return (
    <Box
      component={motion.div}
      sx={SECTION_DIVIDER_STYLE}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></Box>
  );
}

export default SectionDivider;
