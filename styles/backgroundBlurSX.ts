import { SxProps, Theme, useTheme } from '@mui/material';

export const LEFT_BG_BLUR_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    backgroundColor: theme.palette.mode === 'light' ? '#dbd7fb' : 'transparent',
    position: 'absolute',
    top: '-1rem',
    zIndex: -10,
    left: '-35rem',
    height: '31.25rem',
    width: '50rem',
    borderRadius: '50%',
    filter: 'blur(10rem)',
    sm: {
      width: '68.75rem',
    },
    md: {
      left: '-33rem',
    },
    lg: {
      left: '-28rem',
    },
    xl: {
      left: '-15rem',
    },
    '2xl': {
      left: '-5rem',
    },
  };
};

export const RIGHT_BG_BLUR_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    backgroundColor: theme.palette.mode === 'light' ? '#fbe2e3' : 'transparent',
    position: 'absolute',
    top: '-6rem',
    zIndex: -10,
    right: '11rem',
    height: '31.25rem',
    width: '31.25rem',
    borderRadius: '50%',
    filter: 'blur(10rem)',
    sm: {
      width: '68.75rem',
    },
  };
};
