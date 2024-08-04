'use client';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { IconButton, PaletteMode } from '@mui/material';
import { common, grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  SxProps,
  Theme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

const getDesignTokens = (mode: PaletteMode) => ({
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
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  // Material UI ThemeProvider Styles
  const THEME_PROVIDER_BUTTON_STYLE: SxProps<Theme> = {
    position: 'fixed',
    width: 50,
    height: 50,
    bottom: 15,
    right: 15,
    backgroundColor: theme.palette.mode === 'light' ? common.white : grey[800],
    color: theme.palette.mode === 'light' ? common.black : common.white,
    zIndex: 1000,

    '@media (max-width: 640px)': {
      width: 35,
      height: 35,
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        size="small"
        sx={THEME_PROVIDER_BUTTON_STYLE}
        onClick={toggleTheme}
        color="inherit"
      >
        {theme.palette.mode === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
      </IconButton>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
