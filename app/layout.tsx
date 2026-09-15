import type { Metadata } from "next";
import Script from "next/script";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";
import ThemeProvider from "./providers/Theme";
import { Navbar } from "./components/navbar/Navbar";

const SITE_URL = "https://elkana.ellypad.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Elkana Maina | Software Engineer",
  description:
    "Software Engineer building web apps, high-performance mobile software, backends, and practical ML models — turning messy operations into smooth, scalable systems.",
  keywords: [
    "Elkana Maina",
    "Software Engineer",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "Deep Learning",
    "PyTorch",
    "TensorFlow",
    "Data Science",
    "Business Automation",
    "Web Development Kenya",
    "Enterprise Software",
    "Ellypad",
    "Falcosend",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Elkana Maina | Software Engineer",
    description:
      "Turning complex ideas into powerful, user-friendly digital experiences — from full-stack web platforms to practical ML models.",
    url: SITE_URL,
    siteName: "Elkana Maina Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elkana Maina | Software Engineer",
    description:
      "Turning complex ideas into powerful, user-friendly digital experiences — from full-stack web platforms to practical ML models.",
    creator: "@mainakim99",
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
        "@id": `${SITE_URL}/#person`,
        name: "Elkana Maina",
        jobTitle: "Software Engineer",
        url: SITE_URL,
        sameAs: [
          "https://github.com/elisoft-engineer",
          "https://www.linkedin.com/in/elkana-maina-ab54851a0/",
          "https://www.facebook.com/profile.php?id=61561212267451",
          "https://x.com/mainakim99",
        ],
        worksFor: [
          { "@id": "https://falcosend.ellypad.com/#organization" },
          { "@id": "https://ellypad.com/#organization" },
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Murang'a University of Technology",
        },
        description:
          "Software Engineer building web apps, mobile software, backends, and practical ML models that turn messy operations into smooth, scalable systems.",
        knowsAbout: [
          // Frontend
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Flutter",
          // Backend
          "Node.js",
          "Django",
          "FastAPI",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          // AI & Machine Learning
          "Machine Learning",
          "Deep Learning",
          "PyTorch",
          "TensorFlow",
          "Data Science",
          "Generative AI",
          // DevOps & Cloud
          "Docker",
          "Linux",
          // General
          "Software Architecture",
          "Enterprise Automation",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            about: "Software Engineering",
            educationalLevel: "Bachelor's degree",
            name: "Bachelor of Science in Software Engineering (First Class Honours)",
            recognizedBy: {
              "@type": "CollegeOrUniversity",
              name: "Murang'a University of Technology",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "badge",
            name: "Machine Learning with Python - Level 1",
            recognizedBy: { "@type": "Organization", name: "IBM" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "badge",
            name: "Deep Learning",
            recognizedBy: { "@type": "Organization", name: "IBM" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "badge",
            name: "Deep Learning Essentials",
            recognizedBy: { "@type": "Organization", name: "IBM" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "badge",
            name: "Deep Learning with TensorFlow",
            recognizedBy: { "@type": "Organization", name: "IBM" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "badge",
            name: "Introduction to Data Science",
            recognizedBy: {
              "@type": "Organization",
              name: "Cisco Networking Academy",
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://falcosend.ellypad.com/#organization",
        name: "Falcosend",
        url: "https://falcosend.ellypad.com",
        description:
          "A multi-tenant form processing API enabling developers to collect submissions directly from static and client applications with zero backend configuration.",
        founder: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": "https://peter.ellypad.com/#person",
        name: "Peter Ngare",
        url: "https://peter.ellypad.com",
        worksFor: { "@id": "https://ellypad.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://ellypad.com/#organization",
        name: "Ellypad Tech",
        url: "https://ellypad.com",
        description:
          "A software development firm crafting full-stack web platforms, mobile products, and automated cloud infrastructure for growing enterprises.",
        founder: [
          { "@id": `${SITE_URL}/#person` },
          { "@id": "https://peter.ellypad.com/#person" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Elkana Maina Portfolio",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ItemList",
        name: "Portfolio Sections",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Who am I?",
            url: `${SITE_URL}/#hero`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Featured Work",
            url: `${SITE_URL}/#ventures`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Open Source",
            url: `${SITE_URL}/#open-source`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Tech Stack",
            url: `${SITE_URL}/#skills`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Credentials",
            url: `${SITE_URL}/#certifications`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 6,
            name: "Highlights",
            url: `${SITE_URL}/#spotlight`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 7,
            name: "Let's Connect",
            url: `${SITE_URL}/#contact`,
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
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
