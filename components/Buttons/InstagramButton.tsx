import { INSTAGRAM_BUTTON_STYLE } from '@/styles/buttonsSX';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

function LinkedInButton() {
  return (
    <IconButton
      sx={INSTAGRAM_BUTTON_STYLE}
      aria-label={'instagram'}
      href={'https://www.instagram.com/dennisbyberg/'}
      target={'_blank'}
    >
      <InstagramIcon />
    </IconButton>
  );
}

export default LinkedInButton;
