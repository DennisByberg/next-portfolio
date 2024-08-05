import { TSectionName } from '@/types/globalTypes';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Dispatch, SetStateAction } from 'react';

interface IContactMeButtonProps {
  setActiveSection: Dispatch<SetStateAction<TSectionName>>;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
}

export default function ContactMeButton({
  setActiveSection,
  setTimeOfLastClick,
}: IContactMeButtonProps) {
  // Material UI ContactMeButton Styles
  const CONTACT_ME_BUTTON_STYLE: SxProps<Theme> = {
    backgroundColor: grey[800],
    color: grey[50],
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
