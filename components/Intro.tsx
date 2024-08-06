'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import useSectionInView from '@/hooks/useSectionInView';
import DennisPNG from '@/public/dennis2.png';
import { LEFT_BG_BLUR_STYLE, RIGHT_BG_BLUR_STYLE } from '@/styles/backgroundBlurSX';
import {
  INTRO_BIGGER_BUTTONS_CONTAINER_STYLE,
  INTRO_BUTTONS_CONTAINER_STYLE,
  INTRO_CIRCLE_STYLE,
  INTRO_PHOTO_EMOJI_STYLE,
  INTRO_PHOTO_STYLE,
  INTRO_STYLE,
  INTRO_TEXT_STYLE,
} from '@/styles/introSX';
import getFormattedIntroText from '@/utils/getFormattedIntroText';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactMeButton from './Buttons/ContactMeButton';
import DownloadCVButton from './Buttons/DownloadCVButton';
import DownloadSkillsButton from './Buttons/DownloadSkillsButton';
import FacebookButton from './Buttons/FacebookButton';
import GithubButton from './Buttons/GithubButton';
import InstagramButton from './Buttons/InstagramButton';
import LinkedInButton from './Buttons/LinkedInButton';

function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <Box component={'section'} ref={ref} id={'home'} sx={INTRO_STYLE}>
      <Box sx={RIGHT_BG_BLUR_STYLE}></Box>
      <Box sx={LEFT_BG_BLUR_STYLE}></Box>
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
        <Box sx={INTRO_BIGGER_BUTTONS_CONTAINER_STYLE}>
          <ContactMeButton
            setActiveSection={setActiveSection}
            setTimeOfLastClick={setTimeOfLastClick}
          />
          <DownloadCVButton />
          <DownloadSkillsButton />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <GithubButton />
          <LinkedInButton />
          <FacebookButton />
          <InstagramButton />
        </Box>
      </Box>
    </Box>
  );
}

export default Intro;
