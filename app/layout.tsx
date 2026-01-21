import type { Metadata } from "next";
import {Inter_Tight} from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import "./globals.css";
import ThemeProvider from "./providers/Theme";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Ellypad",
  description: "A software project management platform",
};

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter-tight',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={interTight.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}