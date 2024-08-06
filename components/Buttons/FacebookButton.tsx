import { FACEBOOK_BUTTON_STYLE } from '@/styles/buttonsSX';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

function FacebookButton() {
  return (
    <IconButton
      sx={FACEBOOK_BUTTON_STYLE}
      aria-label={'facebook'}
      href={'https://www.facebook.com/dennisbyberg94'}
      target={'_blank'}
    >
      <FacebookIcon />
    </IconButton>
  );
}

export default FacebookButton;
