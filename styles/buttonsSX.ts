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

export const DOWNLOAD_BUTTON_STYLE: SxProps<Theme> = {
  background: 'linear-gradient(268deg, #F0AFFF 0%, #F9E6FFFF 100%)', // Brighter gradient
  color: grey[900],
  fontWeight: 600,
  borderRadius: 99,

  '&:hover': {
    background: 'linear-gradient(268deg, #E08CFFFF 0%, #F2D4FFFF 100%)', // Brighter gradient
  },

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
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

export const FACEBOOK_BUTTON_STYLE: SxProps<Theme> = {
  color: 'rgb(8,102,255)',

  '&:active': {
    transform: 'translateY(3px)',
    transition: '100ms',
  },
};

export const INSTAGRAM_BUTTON_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    color: `${theme.palette.mode === 'light' ? common.black : common.white}`,

    '&:active': {
      transform: 'translateY(3px)',
      transition: '100ms',
    },
  };
};

export const SUBMIT_BUTTON_STYLE: SxProps<Theme> = {
  color: grey[900],
  background: 'linear-gradient(268deg, #F0AFFF 0%, #F9E6FFFF 100%)', // Brighter gradient
  fontWeight: 600,
  borderRadius: '99px',
  '&:hover': {
    background: 'linear-gradient(268deg, #E08CFFFF 0%, #F2D4FFFF 100%)', // Brighter gradient
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
  '&.Mui-disabled': {
    color: grey[600],
  },
};
