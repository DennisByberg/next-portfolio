'use client';
import { THEME_PROVIDER_BUTTON_STYLE } from '@/styles/themeSX';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { IconButton, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { useEffect, useState } from 'react';

function getDesignTokens(mode: PaletteMode) {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
              default: grey[100],
            },
            text: {
              primary: grey[900],
            },
          }
        : {
            // palette values for dark mode
            background: {
              default: grey[900],
            },
            text: {
              primary: grey[50],
            },
          }),
    },
  };
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton size={'small'} sx={THEME_PROVIDER_BUTTON_STYLE} onClick={toggleTheme}>
        {theme.palette.mode === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
      </IconButton>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
