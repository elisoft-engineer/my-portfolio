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
  title: "Elkana Maina | Software Engineer",
  description: "Building smarter business systems and high-performance web applications. Specialized in Next.js, Django, and Enterprise automation.",
  keywords: ["Elkana Maina", "Software Engineer", "Business Automation", "Web Development Kenya", "Enterprise Software", "Ellypad", "Falcosend"],
  openGraph: {
    title: "Elkana Maina | Software Engineer",
    description: "Turning complex ideas into powerful, user-friendly digital experiences.",
    url: "https://elkana.ellypad.com",
    siteName: "Elkana Maina Portfolio",
    locale: "en_US",
    type: "website",
  },
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