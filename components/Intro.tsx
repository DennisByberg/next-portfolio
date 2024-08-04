'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import getFormattedIntroText from '@/lib/helpers/getFormattedIntroText';
import { useSectionInView } from '@/lib/hooks';
import DennisPNG from '@/public/dennis2.png';
import { Box, SxProps, Theme } from '@mui/material';
import { common } from '@mui/material/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactMeButton from './Buttons/ContactMeButton';
import DownloadCVButton from './Buttons/DownloadCVButton';
import GithubButton from './Buttons/GithubButton';
import LinkedInButton from './Buttons/LinkedInButton';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <Box component={'section'} ref={ref} id={'home'} sx={INTRO_STYLE}>
      <Box component={'div'} sx={INTRO_CIRCLE_STYLE}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          <Box
            component={Image}
            sx={INTRO_PHOTO_STYLE}
            src={DennisPNG}
            alt={'a circular portrait of me'}
            priority={true}
            quality={100}
          />
        </Box>
        <Box
          component={motion.span}
          sx={INTRO_PHOTO_EMOJI_STYLE}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
        >
          👋
        </Box>
      </Box>

      <Box
        component={motion.h1}
        sx={INTRO_TEXT_STYLE}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {getFormattedIntroText()}
      </Box>

      <Box
        component={motion.div}
        sx={INTRO_BUTTONS_CONTAINER_STYLE}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ContactMeButton
          setActiveSection={setActiveSection}
          setTimeOfLastClick={setTimeOfLastClick}
        />
        <DownloadCVButton />
        <LinkedInButton />
        <GithubButton />
      </Box>
    </Box>
  );
}

// Material UI Intro styles
const INTRO_STYLE: SxProps<Theme> = {
  maxWidth: '50rem',
  textAlign: 'center',
  scrollMarginTop: '100rem',

  '@media (min-width: 640px)': {
    marginBottom: 0,
  },
};

const INTRO_CIRCLE_STYLE: SxProps<Theme> = {
  marginInline: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '130px',
};

const INTRO_PHOTO_STYLE: SxProps<Theme> = {
  borderRadius: 99,
  border: `4px solid ${common.white}`,
  objectFit: 'cover',
  boxShadow: `2px 2px 3px ${common.white}`,
};

const INTRO_PHOTO_EMOJI_STYLE: SxProps<Theme> = {
  fontSize: '3rem',
  position: 'absolute',
  bottom: '-0.5rem',
  right: '-0.5rem',
};

const INTRO_TEXT_STYLE: SxProps<Theme> = {
  marginBottom: '2.5rem',
  marginTop: '1rem',
  paddingInline: '1rem',
  fontSize: '1.5rem',
  fontWeight: 500,
  lineHeight: 1.5,

  '@media (min-width: 640px)': {
    fontSize: '2.25rem',
  },
};

const INTRO_BUTTONS_CONTAINER_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  paddingInline: '1rem',

  '@media (min-width: 640px)': {
    flexDirection: 'row',
  },
};
