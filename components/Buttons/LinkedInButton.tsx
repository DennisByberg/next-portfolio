import { LINKED_IN_BUTTON_STYLE } from '@/styles/buttonsSX';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

function LinkedInButton() {
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

export default LinkedInButton;
