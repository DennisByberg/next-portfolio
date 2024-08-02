import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContextProvider';
import { SxProps, Theme, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dennis Byberg | Portfolio',
  description: 'Dennis Byberg is a frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography component={'html'} sx={ROOT_LAYOUT_HTML_STYLE} lang="en">
      <Typography
        component={'body'}
        sx={ROOT_LAYOUT_BODY_STYLE}
        className={inter.className}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </Typography>
    </Typography>
  );
}

// Material UI RootLayout styles
const ROOT_LAYOUT_HTML_STYLE: SxProps<Theme> = {
  scrollBehavior: 'smooth !important',
};

const ROOT_LAYOUT_BODY_STYLE: SxProps<Theme> = {
  backgroundColor: grey[100],
  color: grey[900],
  position: 'relative',
  paddingTop: '8rem',
};
