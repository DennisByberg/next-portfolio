import { SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const SECTION_DIVIDER_STYLE: SxProps<Theme> = {
  backgroundColor: grey[200],
  marginTop: '4rem',
  marginBottom: '4rem',
  height: '4rem',
  width: '0.25rem',
  borderRadius: '99px',
  display: 'none',

  '@media (min-width: 640px)': {
    display: 'block',
  },
};
