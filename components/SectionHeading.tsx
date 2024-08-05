import { SECTION_HEADING_TEXT_STYLE } from '@/styles/sectionHeadingSX';
import { Typography } from '@mui/material';

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant={'h2'} sx={SECTION_HEADING_TEXT_STYLE}>
      {children}
    </Typography>
  );
}

export default SectionHeading;
