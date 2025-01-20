"use client"

import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

function ScreenSizeIndicator() {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 768) {
        setScreenSize('md');
      } else if (window.innerWidth < 1024) {
        setScreenSize('lg');
      } else if (window.innerWidth < 1280) {
        setScreenSize('xl');
      } else if (window.innerWidth < 1536) {
        setScreenSize('2xl');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return <div>Current screen size: {screenSize}</div>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScreenSizeIndicator />
        {children}
        <Analytics />
      </body>
    </html>
  )
}