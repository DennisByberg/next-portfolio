import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, SxProps, Theme } from '@mui/material';

export default function GithubButton() {
  return (
    <IconButton
      sx={GITHUB_BUTTON_STYLE}
      aria-label={'github'}
      href={'https://github.com/DennisByberg'}
      target={'_blank'}
    >
      <GitHubIcon />
    </IconButton>
  );
}

// Material UI GithubButton Styles
const GITHUB_BUTTON_STYLE: SxProps<Theme> = {
  color: '#0e1118',

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};
