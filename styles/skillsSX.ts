import { SxProps, Theme } from '@mui/material';
import { common, grey } from '@mui/material/colors';

export const SKILLS_SECTION_STYLE: SxProps<Theme> = {
  // marginBottom: '3rem',
  maxWidth: '53rem',
  scrollMarginTop: '3rem',
  textAlign: 'center',

  '@media (min-width: 640px)': {
    // marginBottom: '10rem',
  },
};

export const SKILLS_LIST_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '0.5rem',
  color: grey[800],
};

export const SKILLS_LIST_ITEM_STYLE: SxProps<Theme> = {
  backgroundColor: common.white,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '13px',
  padding: '0.75rem 1.25rem',
};
