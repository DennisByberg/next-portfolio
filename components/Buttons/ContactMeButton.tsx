import { CONTACT_ME_BUTTON_STYLE } from '@/styles/buttonsSX';
import { TSectionName } from '@/types/globalTypes';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface IContactMeButtonProps {
  setActiveSection: Dispatch<SetStateAction<TSectionName>>;
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
