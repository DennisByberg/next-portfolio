import { SxProps, Theme, useTheme } from '@mui/material';
import { common, grey } from '@mui/material/colors';

export const PROJECT_SECTION_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    cursor: 'pointer',
    backgroundColor: theme.palette.mode === 'light' ? grey[200] : grey[900],
    maxWidth: '50rem',
    border:
      theme.palette.mode === 'light' ? '1px solid #00000033' : `1px solid ${grey[200]}`,
    overflow: 'hidden',
    boxShadow: theme.palette.mode === 'dark' ? '1px 2px 3px white' : '1px 1px 1px black',
    position: 'relative',
    marginBottom: '0.75rem',
    borderRadius: 5,

    '@media (min-width: 640px)': {
      paddingRight: '2rem',
      height: '20rem',
      marginBottom: '2rem',
    },

    '& > *:last-child': {
      marginBottom: 0,
    },

    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[700],
    },
  };
};

export const PROJECT_LIST_ITEM_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    backgroundColor: theme.palette.mode === 'light' ? grey[800] : common.black,
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: common.white,
    borderRadius: 99,
  };
};

export const PROJECT_UL_STYLE: SxProps<Theme> = {
  marginTop: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',

  '@media (min-width: 640px)': {
    marginTop: 'auto',
  },
};

export const PROJECT_TITLE_STYLE: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: '1.5rem',

  '@media (max-width: 640px)': {
    mt: 3,
  },
};

export const PROJECT_DESCRIPTION_STYLE: SxProps<Theme> = () => {
  const theme = useTheme();

  return {
    color: theme.palette.mode === 'light' ? grey[600] : grey[400],
    fontStyle: 'italic',
    lineHeight: 1.625,
    marginTop: '0.5rem',
  };
};
