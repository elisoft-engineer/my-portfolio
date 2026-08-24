import type { Metadata } from "next";
import Script from "next/script";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import ThemeProvider from "./providers/Theme";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import Dialog from "./components/dialog/Dialog";
import { DialogProvider } from "./providers/Dialog";

export const metadata: Metadata = {
  metadataBase: new URL("https://elkana.ellypad.com"),
  title: "Elkana Maina | Software Engineer",
  description:
    "Building smarter business systems and high-performance web applications. Specialized in Next.js, Django, and Enterprise automation.",
  keywords: [
    "Elkana Maina",
    "Software Engineer",
    "Business Automation",
    "Web Development Kenya",
    "Enterprise Software",
    "Ellypad",
    "Falcosend",
  ],
  openGraph: {
    title: "Elkana Maina | Software Engineer",
    description:
      "Turning complex ideas into powerful, user-friendly digital experiences.",
    url: "https://elkana.ellypad.com",
    siteName: "Elkana Maina Portfolio",
    locale: "en_US",
    type: "website",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://elkana.ellypad.com/#person",
        name: "Elkana Maina",
        jobTitle: "Software Engineer",
        url: "https://elkana.ellypad.com",
        sameAs: [
          "https://github.com/elisoft-engineer",
          "https://www.linkedin.com/in/elkana-maina-ab54851a0/",
          "https://www.facebook.com/profile.php?id=61561212267451",
          "https://x.com/mainakim99",
        ],
        worksFor: {
          "@type": "Organization",
          "@id": "https://ellypad.com/#organization",
          name: "Ellypad",
        },
        description:
          "Software Engineer specializing in Next.js, Django, and Enterprise automation.",
        knowsAbout: [
          "Next.js",
          "Django",
          "React",
          "Software Architecture",
          "Enterprise Automation",
          "Python",
          "TypeScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://elkana.ellypad.com/#website",
        url: "https://elkana.ellypad.com",
        name: "Elkana Maina Portfolio",
        publisher: { "@id": "https://elkana.ellypad.com/#person" },
      },
      {
        "@type": "ItemList",
        name: "Portfolio Sections",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Projects",
            url: "https://elkana.ellypad.com/projects",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Certifications",
            url: "https://elkana.ellypad.com/certifications",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Skills",
            url: "https://elkana.ellypad.com/skills",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="portfolio-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
