import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import "./globals.css";
import ThemeProvider from "./providers/Theme";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Dialog from "./components/dialog/Dialog";
import { DialogProvider } from "./providers/Dialog";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Ellypad",
  description: "A software project management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DialogProvider>
            <Navbar />
            <main className="main">{children}</main>
            <Dialog />
            <Footer />
          </DialogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}