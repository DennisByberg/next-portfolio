'use client';
import { Button, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
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

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={toggleTheme} variant="contained" color="primary">
        Theme: {theme.palette.mode}
      </Button>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
