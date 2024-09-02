import { SxProps, Theme } from '@mui/material';
import { common } from '@mui/material/colors';

export const INTRO_STYLE: SxProps<Theme> = {
  maxWidth: '50rem',
  textAlign: 'center',
  scrollMarginTop: '100rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
};

export const INTRO_CIRCLE_STYLE: SxProps<Theme> = {
  marginInline: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '130px',
};

export const INTRO_PHOTO_STYLE: SxProps<Theme> = {
  borderRadius: 99,
  border: `4px solid ${common.white}`,
  objectFit: 'cover',
  boxShadow: `2px 2px 3px ${common.white}`,
};

export const INTRO_PHOTO_EMOJI_STYLE: SxProps<Theme> = {
  fontSize: '3rem',
  position: 'absolute',
  bottom: '-0.5rem',
  right: '-0.5rem',
};

export const INTRO_TEXT_STYLE: SxProps<Theme> = {
  paddingInline: '1rem',
  fontSize: '1.5rem',
  fontWeight: 500,
  lineHeight: 1.5,

  '@media (min-width: 640px)': {
    fontSize: '2.25rem',
  },
};

export const INTRO_BUTTONS_CONTAINER_STYLE: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  paddingInline: '1rem',
};

export const INTRO_BIGGER_BUTTONS_CONTAINER_STYLE: SxProps<Theme> = {
  display: 'flex',
  gap: '1rem',
  maxWidth: 650,
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',

  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
};
