import { Box, SxProps, Theme, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box component={'footer'} sx={FOOTER_STYLE}>
      <Box component={'small'} sx={SMALL_STYLE}>
        &copy; 2024 Dennis Byberg. All rights reserved.
      </Box>
      <Typography paragraph={true} sx={PARAGRAPH_STYLE}>
        <Box component={'span'}>About this website:</Box> built with React & Next.js (App
        Router & Server Actions), Typescript, Material UI, Framer Motion, React Email &
        Resend, Vercel Hosting
      </Typography>
    </Box>
  );
}

// Material UI Footer Styles
const FOOTER_STYLE: SxProps<Theme> = {
  textAlign: 'center',
  marginTop: '4rem',
  paddingInline: '3rem',
  marginBottom: '1rem',
  color: grey[500],
};

const SMALL_STYLE: SxProps<Theme> = {
  fontSize: '0.7rem',
};

const PARAGRAPH_STYLE: SxProps<Theme> = {
  fontSize: '0.7rem',
};
