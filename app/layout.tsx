import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContextProvider';
import ThemeProvider from '@/context/ThemeProvider';
import { Typography } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dennis Byberg | Portfolio',
  description: 'Dennis Byberg is a frontend developer',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Typography
      component={'html'}
      sx={{ scrollBehavior: 'smooth !important' }}
      lang={'en'}
    >
      <Typography
        component={'body'}
        sx={{ position: 'relative', pt: '8rem' }}
        className={inter.className}
      >
        <ThemeProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position={'top-right'} />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </Typography>
    </Typography>
  );
}

export default RootLayout;
