"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

const navButtonStyles = "bg-zinc-900 focus:outline-none flex justify-center items-center rounded-lg h-11 w-20 md:w-60";
const hoverStyles = "hover:scale-110 hover:border hover:border-white transition-transform";
const activeButtonStyles = "bg-slate-300 text-zinc-900 focus:outline-none flex justify-center items-center rounded-lg h-11 w-20 md:w-60";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  // Refs for navigation
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    switch(section) {
      case 'Accueil':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'À propos':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Expérience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      // Add other cases as needed
      default:
        break;
    }
  };

  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
