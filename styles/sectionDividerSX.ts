import { SxProps, Theme, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const SECTION_DIVIDER_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();
  return {
    backgroundColor: theme.palette.mode === 'light' ? grey[200] : grey[800],
    marginTop: '3rem',
    marginBottom: '3rem',
    height: '4rem',
    width: '0.25rem',
    borderRadius: '99px',
    display: 'none',

    '@media (min-width: 640px)': {
      display: 'block',
    },
  };
};
