import { GITHUB_BUTTON_STYLE } from '@/styles/buttonsSX';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

function GithubButton() {
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

export default GithubButton;
