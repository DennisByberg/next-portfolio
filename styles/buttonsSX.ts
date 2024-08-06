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

export const LINKED_IN_BUTTON_STYLE: SxProps<Theme> = {
  color: 'rgb(12,101,194)', // Default linked in icon color

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};

export const FACEBOOK_BUTTON_STYLE = {
  color: 'rgb(8,102,255)',

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};

export const SUBMIT_BUTTON_STYLE: SxProps<Theme> = {
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
