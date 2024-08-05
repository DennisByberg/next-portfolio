'use client';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';
import LINKS_DATA from '@/data/linksData';
import {
  HEADER_BACKGROUND_STYLE,
  HEADER_LINK_ACTIVE_STYLE,
  HEADER_LINK_STYLE,
  HEADER_LIST_ITEM_STYLE,
  HEADER_NAV_STYLE,
  HEADER_UL_STYLE,
} from '@/styles/headerSX';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Box component={'header'} sx={{ zIndex: 999, position: 'relative' }}>
      <Box
        sx={HEADER_BACKGROUND_STYLE}
        component={motion.div}
        initial={{ y: -100, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
      >
        <Box component={'nav'} sx={HEADER_NAV_STYLE}>
          <Box component={'ul'} sx={HEADER_UL_STYLE}>
            {LINKS_DATA.map((link) => (
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

export default Header;
