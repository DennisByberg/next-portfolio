import { SxProps, Theme, useTheme } from '@mui/material';
import { common, grey } from '@mui/material/colors';

export const THEME_PROVIDER_BUTTON_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();
  return {
    position: 'fixed',
    width: 50,
    height: 50,
    bottom: 15,
    right: 15,
    backgroundColor: theme.palette.mode === 'light' ? common.white : grey[800],
    color: theme.palette.mode === 'light' ? common.black : common.white,
    zIndex: 1000,

    '@media (max-width: 640px)': {
      width: 35,
      height: 35,
    },
  };
};
