import { SxProps, Theme, useTheme } from '@mui/material';
import { common, grey, purple } from '@mui/material/colors';

export const SKILLS_SECTION_STYLE: SxProps<Theme> = {
  maxWidth: '53rem',
  scrollMarginTop: '3rem',
  textAlign: 'center',
};

export const SKILLS_LIST_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '0.5rem',
  mt: 2,
  pb: 4,
  color: grey[800],

  '@media (min-width: 640px)': {
    mt: 4,
  },
};

export const SKILLS_LIST_ITEM_STYLE: SxProps<Theme> = {
  backgroundColor: common.white,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '13px',
  padding: '0.75rem 1.25rem',
};

export const SKILLS_SUBJECT_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    background:
      theme.palette.mode === 'light'
        ? `linear-gradient(to right, ${grey[100]}, ${purple[50]}, ${grey[100]})`
        : `linear-gradient(to right, ${grey[900]}, ${grey[800]}, ${grey[900]})`,
    mt: 2,
    borderRadius: '5px 0px 0px 20px',
    fontSize: '1.2rem',
    p: 0.5,
  };
};
