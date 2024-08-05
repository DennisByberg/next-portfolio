import { FOOTER_STYLE } from '@/styles/footerSX';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component={'footer'} sx={FOOTER_STYLE}>
      <Box component={'small'} sx={{ fontSize: '0.7rem' }}>
        &copy; 2024 Dennis Byberg. All rights reserved.
      </Box>
      <Typography paragraph={true} sx={{ fontSize: '0.7rem' }}>
        <Box component={'span'}>About this website:</Box> built with React & Next.js (App
        Router & Server Actions), Typescript, Material UI, Framer Motion, React Email &
        Resend, Vercel Hosting
      </Typography>
    </Box>
  );
}

export default Footer;
