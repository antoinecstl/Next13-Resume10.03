import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next";
import JsonLd from './components/JsonLd';
import ChatBox from "./components/ChatBox";



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Antoine Castel | Professional Portfolio",
  description: "Professional portfolio of Antoine Castel - Specialized in Information Systems Architecture, Cybersecurity, and Software Engineering.",
  keywords: ["Antoine Castel", "Software Engineer", "Systems Architecture", "Cybersecurity", "Portfolio", "CV", "Resume", "Software Developer", "IT Security", "Computer Science", "IPSA", "CentraleSupélec"],
  authors: [{ name: "Antoine Castel" }],
  creator: "Antoine Castel",
  publisher: "Antoine Castel",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://antoinecastel.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en': '/',
      'fr': '/fr',
    },
  },
  openGraph: {
    title: "Antoine Castel | Professional Portfolio",
    description: "Professional portfolio of Antoine Castel - Specialized in Information Systems Architecture, Cybersecurity, and Software Engineering.",
    url: "https://antoinecastel.com",
    siteName: "Antoine Castel Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antoine Castel - Software Engineer & Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Castel | Professional Portfolio",
    description: "Professional portfolio of Antoine Castel - Specialized in Information Systems Architecture, Cybersecurity, and Software Engineering.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  verification: {
    google: "google-site-verification=FfbRvYE0_DzROeLqpqZKmIAZrMBG0KlGu5Ucuk5-hq0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Antoine Castel",
    jobTitle: "Software Engineer & Systems Architecture Student",
    description: "Fifth-year student, double degree in Architecture of Information Systems at CentraleSupélec | IPSA.",
    url: "https://antoinecastel.com",
    sameAs: [
      "https://www.linkedin.com/in/antoinecastel/",
      "https://github.com/antoinecstl"
    ],
    knowsAbout: ["Cybersecurity", "Software Engineering", "System Architecture", "Python", "C++", "React"]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://antoinecastel.com" />
      </head>
      <body className={inter.className}>
        <JsonLd data={personSchema} />
        {children}
        <ChatBox />
        <Analytics />
      </body>
    </html>
  )
}