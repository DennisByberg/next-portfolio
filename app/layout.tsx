import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContextProvider";
import ThemeProvider from "@/context/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennis Byberg | Portfolio",
  description: "Dennis Byberg is a frontend developer",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position={"top-right"} />
            </ActiveSectionContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export default RootLayout;
