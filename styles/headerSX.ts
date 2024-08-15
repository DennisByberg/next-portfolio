import { SxProps, Theme, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const HEADER_APP_BAR_STYLE_TOP: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    background: 'none',
    color: theme.palette.mode === 'light' ? grey[900] : grey[50],
    boxShadow: 'none',
  };
};

export const HEADER_APP_BAR_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    background: 'transparent',
    backdropFilter: 'blur(14px)',
    color: theme.palette.mode === 'light' ? grey[900] : grey[50],
    boxShadow: theme.palette.mode === 'light' ? '0px 0px 4px black' : '0px 0px 4px white',
  };
};

export const HEADER_LINK_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    transition: '150ms',
    m: 2,
    color: theme.palette.mode === 'light' ? grey[900] : grey[50],

    '&:hover': {
      color: grey[500],
    },
  };
};
