import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, SxProps, Theme, useTheme } from '@mui/material';
import { common } from '@mui/material/colors';

export default function GithubButton() {
  const theme = useTheme();

  // Material UI GithubButton Styles
  const GITHUB_BUTTON_STYLE: SxProps<Theme> = {
    color: `${theme.palette.mode === 'light' ? common.black : common.white}`,
    '&:active': {
      transform: 'translateY(3px)',
      transition: '100ms',
    },
  };

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
