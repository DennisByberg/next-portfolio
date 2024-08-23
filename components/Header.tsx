'use client';
import portfolioPNG from '@/app/favicon.ico';
import LINKS_DATA from '@/data/linksData';
import { name, version } from '@/package.json';
import {
  HEADER_APP_BAR_STYLE,
  HEADER_APP_BAR_STYLE_TOP,
  HEADER_LINK_STYLE,
} from '@/styles/headerSX';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const drawer = (
    <Box
      onClick={() => setMobileOpen((prevState) => !prevState)}
      sx={{ textAlign: 'center' }}
    >
      <Typography variant={'h6'} sx={{ my: 2 }}>
        {name}
      </Typography>
      <Divider />
      <List>
        {LINKS_DATA.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton href={link.hash} sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component={motion.nav}
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={isTop ? HEADER_APP_BAR_STYLE_TOP : HEADER_APP_BAR_STYLE}
      >
        <Toolbar>
          <IconButton
            color={'inherit'}
            aria-label={'open drawer'}
            edge={'start'}
            onClick={() => setMobileOpen((prevState) => !prevState)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            href={'#home'}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Image width={40} src={portfolioPNG} alt={'portfolio png'} />
          </Box>
          <Typography
            variant={'h6'}
            component={'div'}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, ml: 2 }}
          >
            {name}
            <Box component={'span'} sx={{ ml: 1, fontSize: 14 }}>
              v{version}
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {LINKS_DATA.map((link) => (
              <Box
                component={Link}
                href={link.hash}
                key={link.name}
                sx={HEADER_LINK_STYLE}
              >
                {link.name}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer
          variant={'temporary'}
          open={mobileOpen}
          onClose={() => setMobileOpen((prevState) => !prevState)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
