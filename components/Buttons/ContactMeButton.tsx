import { SectionName } from '@/lib/types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Dispatch, SetStateAction } from 'react';

interface IContactMeButtonProps {
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}

export default function ContactMeButton({
  setActiveSection,
  setTimeOfLastClick,
}: IContactMeButtonProps) {
  return (
    <Button
      sx={CONTACT_ME_BUTTON_STYLE}
      variant={'contained'}
      endIcon={<KeyboardDoubleArrowRightIcon />}
      href={'#contact'}
      onClick={() => {
        setActiveSection('Contact');
        setTimeOfLastClick(Date.now());
      }}
    >
      Contact me here
    </Button>
  );
}

// Material UI ContactMeButton Styles
const CONTACT_ME_BUTTON_STYLE: SxProps<Theme> = {
  backgroundColor: grey[800],
  fontWeight: 600,
  borderRadius: 99,

  '&:hover': {
    backgroundColor: grey[900],
  },

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};
