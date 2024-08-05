import { SxProps, Theme, useTheme } from '@mui/material';
import { common, grey } from '@mui/material/colors';

export const CONTACT_ME_BUTTON_STYLE: SxProps<Theme> = {
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

// Material UI DownloadCVButton Styles
export const DOWNLOAD_CV_BUTTON_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    backgroundColor: grey[50],
    color: grey[900],
    fontWeight: 600,
    borderRadius: 99,

    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? grey[200] : grey[400],
    },

    '&:active': {
      transform: 'translateY(3px)',
      transition: '100ms',
    },
  };
};

// Material UI GithubButton Styles
export const GITHUB_BUTTON_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    color: `${theme.palette.mode === 'light' ? common.black : common.white}`,
    '&:active': {
      transform: 'translateY(3px)',
      transition: '100ms',
    },
  };
};

// Material UI LinkedInButton Styles
export const LINKED_IN_BUTTON_STYLE: SxProps<Theme> = {
  color: '#126bc4',

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};

// Material UI SubmitButton Styles
export const SUBMIT_BUTTON_STYLE: SxProps<Theme> = {
  marginTop: '1rem',
  color: grey[50],
  backgroundColor: grey[800],
  fontWeight: 600,
  borderRadius: '99px',
  '&:hover': {
    backgroundColor: grey[900],
  },
  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
  '@media (max-width: 500px)': {
    width: '100%',
    padding: '1rem',
    borderRadius: '5px',
  },
};
