import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, SxProps, Theme } from '@mui/material';

export default function LinkedInButton() {
  return (
    <IconButton
      sx={LINKED_IN_BUTTON_STYLE}
      aria-label={'linked in'}
      href={'https://www.linkedin.com/in/dennisbyberg/'}
      target={'_blank'}
    >
      <LinkedInIcon />
    </IconButton>
  );
}

// Material UI LinkedInButton Styles
const LINKED_IN_BUTTON_STYLE: SxProps<Theme> = {
  color: '#126bc4',

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};
