'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import { links } from '@/lib/data';
import { Box, SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Box component={'header'} sx={HEADER_STYLE}>
      <Box
        sx={HEADER_BACKGROUND_STYLE}
        component={motion.div}
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
      >
        <Box component={'nav'} sx={HEADER_NAV_STYLE}>
          <Box component={'ul'} sx={HEADER_UL_STYLE}>
            {links.map((link) => (
              <Box
                component={motion.li}
                sx={HEADER_LIST_ITEM_STYLE}
                key={link.hash}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Box
                  component={Link}
                  sx={
                    activeSection === link.name
                      ? HEADER_LINK_ACTIVE_STYLE
                      : HEADER_LINK_STYLE
                  }
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Material UI Header Styles
const HEADER_STYLE: SxProps<Theme> = {
  zIndex: 999,
  position: 'relative',
};

const HEADER_BACKGROUND_STYLE: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  left: '50%',
  height: '4.5rem',
  width: '100%',
  border: '1px solid #ffffff66',
  backgroundColor: '#ffffffcc',
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

const HEADER_NAV_STYLE: SxProps<Theme> = {
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

const HEADER_UL_STYLE: SxProps<Theme> = {
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

const HEADER_LIST_ITEM_STYLE: SxProps<Theme> = {
  height: '75%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const HEADER_BASE_LINK_STYLE: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.75rem',
  transition: '150ms',
  textDecoration: 'none',
};

const HEADER_LINK_STYLE: SxProps<Theme> = {
  ...HEADER_BASE_LINK_STYLE,
  color: grey[600],

  '&:hover': {
    color: grey[900],
  },
};

const HEADER_LINK_ACTIVE_STYLE: SxProps<Theme> = {
  ...HEADER_BASE_LINK_STYLE,

  color: grey[900],
  fontWeight: 'bold',
};
