import { SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const HEADER_BACKGROUND_STYLE: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  left: '50%',
  height: '4.5rem',
  width: '100%',
  border: '1px solid #ffffff66',
  backgroundColor: grey[50],
  boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.03)',
  backdropFilter: 'blur(0.5rem)',
  borderRadius: 0,

  '@media (min-width: 640px)': {
    top: '1.5rem',
    height: '3.25rem',
    width: '36rem',
    borderRadius: '99px',
  },
};

export const HEADER_NAV_STYLE: SxProps<Theme> = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  left: '50%',
  height: '3rem',
  padding: '0.5rem 0',
  transform: 'translateX(-50%)',

  '@media (min-width: 640px)': {
    height: 'initial',
    paddingBottom: 0,
  },
};

export const HEADER_UL_STYLE: SxProps<Theme> = {
  display: 'flex',
  width: '22rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  fontSize: '0.9rem',
  fontWeight: 'medium',
  gap: '0.25rem 0',

  '@media (min-width: 640px)': {
    width: 'initial',
    flexWrap: 'nowrap',
    gap: '1.25rem',
  },
};

export const HEADER_LIST_ITEM_STYLE: SxProps<Theme> = {
  height: '75%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const HEADER_BASE_LINK_STYLE: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.75rem',
  transition: '150ms',
  textDecoration: 'none',
};

export const HEADER_LINK_STYLE: SxProps<Theme> = {
  ...HEADER_BASE_LINK_STYLE,
  color: grey[600],

  '&:hover': {
    color: grey[900],
  },
};

export const HEADER_LINK_ACTIVE_STYLE: SxProps<Theme> = {
  ...HEADER_BASE_LINK_STYLE,

  color: grey[900],
  fontWeight: 'bold',
};
